'reach 0.1';
'use strict';

const [_, CHARITY_1_WINS, CHARITY_2_WINS, TIMEOUT] = makeEnum(3);

const Common = {
  showOutcome: Fun([UInt, UInt, UInt], Null),
};

export const main =
  Reach.App(() => {

    setOptions({ connectors: [ALGO] });

    const Pollster =
      Participant('Pollster', {
        ...Common,
        getParams: Fun([], Object({
          ticketPrice: UInt,  // this will be the crowdfunding element
          deadline: UInt,
          aliceAddr: Address, // charity 1
          bobAddr: Address    // charity 2
        }))
      });

    const Voter =
      ParticipantClass('Voter',
        {
          ...Common,
          getVote: Fun([], Bool),
          voterWas: Fun([Address], Null),
          shouldVote: Fun([], Bool),
        });

    init();

    const showOutcome = (which, forA, forB) => () => {
      each([Pollster, Voter], () =>
        interact.showOutcome(which, forA, forB));
    };

    Pollster.publish();
    commit();
    Pollster.only(() => {
      const { ticketPrice, deadline, aliceAddr, bobAddr } =
        declassify(interact.getParams());
    });
    Pollster.publish(ticketPrice, deadline, aliceAddr, bobAddr);

    const [timeRemaining, keepGoing] = makeDeadline(deadline);

    const [forA, forB] =
      parallelReduce([0, 0])
        .invariant(balance() == (forA + forB) * ticketPrice)
        .while(keepGoing())
        .case(Voter, () => ({
          msg: declassify(interact.getVote()),
          when: declassify(interact.shouldVote()),
        }),
          (_) => ticketPrice,
          (forAlice) => {
            const voter = this;
            Voter.only(() => interact.voterWas(voter));
            const [nA, nB] = forAlice ? [1, 0] : [0, 1];
            return [forA + nA, forB + nB];
          })
        .timeout(timeRemaining(), () => {
          Anybody.publish();
          showOutcome(TIMEOUT, forA, forB)();
          return [forA, forB];
        });

    const outcome = forA >= forB ? CHARITY_1_WINS : CHARITY_2_WINS;
    const winner = outcome == CHARITY_1_WINS ? aliceAddr : bobAddr;
    transfer(balance()).to(winner);
    commit();
    showOutcome(outcome, forA, forB)();

  });
