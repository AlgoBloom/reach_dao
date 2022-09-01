//  crowdfunding, voting and ability for the DAO to change it's state through a vote
// parallel reduce should be able to fill this function by uploading a new version of the smart contract

'reach 0.1';
'use strict';

const [_, CHARITY_1_WINS, CHARITY_2_WINS, TIMEOUT] = makeEnum(3);

const Common = {
  showOutcome: Fun([UInt, UInt, UInt], Null),
};

export const main =
  Reach.App(() => {

    setOptions({ connectors: [ALGO] });

    const Deployer =
      Participant('Deployer', {
        ...Common,
        getParams: Fun([], Object({
          ticketPrice: UInt,  // this will be the crowdfunding element
          deadline: UInt,
          aliceAddr: Address, // charity 1
          bobAddr: Address    // charity 2
        }))
      });

    const Member =
      ParticipantClass('Member',
        {
          ...Common,
          getVote: Fun([], Bool),
          memberWas: Fun([Address], Null),
          shouldVote: Fun([], Bool),
        });

    init();

    const showOutcome = (which, forA, forB) => () => {
      each([Deployer, Member], () =>
        interact.showOutcome(which, forA, forB));
    };

    Deployer.publish();
    commit();
    Deployer.only(() => {
      const { ticketPrice, deadline, aliceAddr, bobAddr } =
        declassify(interact.getParams());
    });
    Deployer.publish(ticketPrice, deadline, aliceAddr, bobAddr);

    const [timeRemaining, keepGoing] = makeDeadline(deadline);

    const [forA, forB] =
      parallelReduce([0, 0])
        .invariant(balance() == (forA + forB) * ticketPrice)
        .while(keepGoing())
        .case(Member, () => ({
          msg: declassify(interact.getVote()),
          when: declassify(interact.shouldVote()),
        }),
          (_) => ticketPrice,
          (forCharityOne) => {
            const member = this;
            Member.only(() => interact.memberWas(member));
            const [nA, nB] = forCharityOne ? [1, 0] : [0, 1];
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
