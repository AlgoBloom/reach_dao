// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      4: [ctc1, ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    aliceAddr: ctc0,
    bobAddr: ctc0,
    deadline: ctc1,
    ticketPrice: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:45:14:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:45:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v161, time: v160, didSend: v22, from: v159 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v161, time: v160, didSend: v22, from: v159 } = txn1;
  ;
  const v164 = stdlib.protect(ctc2, await interact.getParams(), {
    at: './index.rsh:49:38:application',
    fs: ['at ./index.rsh:47:18:application call to [unknown function] (defined at: ./index.rsh:47:22:function exp)'],
    msg: 'getParams',
    who: 'Deployer'
    });
  const v165 = v164.aliceAddr;
  const v166 = v164.bobAddr;
  const v167 = v164.deadline;
  const v168 = v164.ticketPrice;
  
  const txn2 = await (ctc.sendrecv({
    args: [v159, v160, v168, v167, v165, v166],
    evt_cnt: 4,
    funcNum: 1,
    lct: v160,
    onlyIf: true,
    out_tys: [ctc1, ctc1, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v174, v175, v176, v177], secs: v179, time: v178, didSend: v43, from: v173 } = txn2;
      
      ;
      const v182 = stdlib.add(v160, v175);
      const v183 = stdlib.checkedBigNumberify('./index.rsh:56:23:decimal', stdlib.UInt_max, '0');
      const v184 = stdlib.checkedBigNumberify('./index.rsh:56:26:decimal', stdlib.UInt_max, '0');
      const v185 = v178;
      const v186 = v160;
      const v192 = stdlib.checkedBigNumberify('./index.rsh:38:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v198 = stdlib.gt(v182, v186);
        
        return v198;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v233 = stdlib.ge(v183, v184);
        const v234 = v233 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v235 = stdlib.eq(v234, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v236 = v235 ? v176 : v177;
        sim_r.txns.push({
          kind: 'from',
          to: v236,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v174, v175, v176, v177], secs: v179, time: v178, didSend: v43, from: v173 } = txn2;
  ;
  const v180 = stdlib.addressEq(v159, v173);
  stdlib.assert(v180, {
    at: './index.rsh:51:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v182 = stdlib.add(v160, v175);
  let v183 = stdlib.checkedBigNumberify('./index.rsh:56:23:decimal', stdlib.UInt_max, '0');
  let v184 = stdlib.checkedBigNumberify('./index.rsh:56:26:decimal', stdlib.UInt_max, '0');
  let v185 = v178;
  let v186 = v160;
  let v192 = stdlib.checkedBigNumberify('./index.rsh:38:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v198 = stdlib.gt(v182, v186);
    
    return v198;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc3],
      timeoutAt: ['time', v182],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v174, v176, v177, v182, v183, v184, v185, v192],
        evt_cnt: 0,
        funcNum: 4,
        lct: v185,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:71:19:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v227, time: v226, didSend: v113, from: v225 } = txn4;
          
          ;
          
          const cv183 = v183;
          const cv184 = v184;
          const cv185 = v226;
          const cv186 = v185;
          const cv192 = v192;
          
          await (async () => {
            const v183 = cv183;
            const v184 = cv184;
            const v185 = cv185;
            const v186 = cv186;
            const v192 = cv192;
            
            if (await (async () => {
              const v198 = stdlib.gt(v182, v186);
              
              return v198;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v233 = stdlib.ge(v183, v184);
              const v234 = v233 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              const v235 = stdlib.eq(v234, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
              const v236 = v235 ? v176 : v177;
              sim_r.txns.push({
                kind: 'from',
                to: v236,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc1, ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v227, time: v226, didSend: v113, from: v225 } = txn4;
      ;
      stdlib.protect(ctc4, await interact.showOutcome(stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'), v183, v184), {
        at: './index.rsh:42:29:application',
        fs: ['at ./index.rsh:41:11:application call to [unknown function] (defined at: ./index.rsh:41:35:function exp)', 'at ./index.rsh:72:43:application call to [unknown function] (defined at: ./index.rsh:40:51:function exp)', 'at ./index.rsh:70:38:application call to [unknown function] (defined at: ./index.rsh:70:38:function exp)'],
        msg: 'showOutcome',
        who: 'Deployer'
        });
      
      const cv183 = v183;
      const cv184 = v184;
      const cv185 = v226;
      const cv186 = v185;
      const cv192 = v192;
      
      v183 = cv183;
      v184 = cv184;
      v185 = cv185;
      v186 = cv186;
      v192 = cv192;
      
      continue;
      }
    else {
      const {data: [v210], secs: v212, time: v211, didSend: v84, from: v209 } = txn3;
      const v215 = stdlib.add(v192, v174);
      ;
      const v217 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v218 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v219 = v210 ? v217 : v218;
      const v220 = v219[stdlib.checkedBigNumberify('./index.rsh:67:19:array', stdlib.UInt_max, '0')];
      const v221 = v219[stdlib.checkedBigNumberify('./index.rsh:67:19:array', stdlib.UInt_max, '1')];
      const v222 = stdlib.add(v183, v220);
      const v223 = stdlib.add(v184, v221);
      const cv183 = v222;
      const cv184 = v223;
      const cv185 = v211;
      const cv186 = v185;
      const cv192 = v215;
      
      v183 = cv183;
      v184 = cv184;
      v185 = cv185;
      v186 = cv186;
      v192 = cv192;
      
      continue;}
    
    }
  const v233 = stdlib.ge(v183, v184);
  const v234 = v233 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  const v235 = stdlib.eq(v234, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v236 = v235 ? v176 : v177;
  ;
  stdlib.protect(ctc4, await interact.showOutcome(v234, v183, v184), {
    at: './index.rsh:42:29:application',
    fs: ['at ./index.rsh:41:11:application call to [unknown function] (defined at: ./index.rsh:41:35:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:40:51:function exp)'],
    msg: 'showOutcome',
    who: 'Deployer'
    });
  
  return;
  
  
  
  
  };
export async function Member(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Member expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Member expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v161, time: v160, didSend: v22, from: v159 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 1,
    out_tys: [ctc0, ctc0, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v174, v175, v176, v177], secs: v179, time: v178, didSend: v43, from: v173 } = txn2;
  ;
  const v180 = stdlib.addressEq(v159, v173);
  stdlib.assert(v180, {
    at: './index.rsh:51:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Member'
    });
  const v182 = stdlib.add(v160, v175);
  let v183 = stdlib.checkedBigNumberify('./index.rsh:56:23:decimal', stdlib.UInt_max, '0');
  let v184 = stdlib.checkedBigNumberify('./index.rsh:56:26:decimal', stdlib.UInt_max, '0');
  let v185 = v178;
  let v186 = v160;
  let v192 = stdlib.checkedBigNumberify('./index.rsh:38:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v198 = stdlib.gt(v182, v186);
    
    return v198;})()) {
    const v206 = stdlib.protect(ctc2, await interact.getVote(), {
      at: './index.rsh:60:43:application',
      fs: ['at ./index.rsh:59:26:application call to [unknown function] (defined at: ./index.rsh:59:26:function exp)', 'at ./index.rsh:59:26:application call to [unknown function] (defined at: ./index.rsh:59:26:function exp)'],
      msg: 'getVote',
      who: 'Member'
      });
    const v207 = stdlib.protect(ctc2, await interact.shouldVote(), {
      at: './index.rsh:61:47:application',
      fs: ['at ./index.rsh:59:26:application call to [unknown function] (defined at: ./index.rsh:59:26:function exp)', 'at ./index.rsh:59:26:application call to [unknown function] (defined at: ./index.rsh:59:26:function exp)'],
      msg: 'shouldVote',
      who: 'Member'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v174, v176, v177, v182, v183, v184, v185, v192, v206],
      evt_cnt: 1,
      funcNum: 3,
      lct: v185,
      onlyIf: v207,
      out_tys: [ctc2],
      pay: [v174, []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v210], secs: v212, time: v211, didSend: v84, from: v209 } = txn3;
        
        const v215 = stdlib.add(v192, v174);
        sim_r.txns.push({
          amt: v174,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        
        const v217 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v218 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v219 = v210 ? v217 : v218;
        const v220 = v219[stdlib.checkedBigNumberify('./index.rsh:67:19:array', stdlib.UInt_max, '0')];
        const v221 = v219[stdlib.checkedBigNumberify('./index.rsh:67:19:array', stdlib.UInt_max, '1')];
        const v222 = stdlib.add(v183, v220);
        const v223 = stdlib.add(v184, v221);
        const cv183 = v222;
        const cv184 = v223;
        const cv185 = v211;
        const cv186 = v185;
        const cv192 = v215;
        
        await (async () => {
          const v183 = cv183;
          const v184 = cv184;
          const v185 = cv185;
          const v186 = cv186;
          const v192 = cv192;
          
          if (await (async () => {
            const v198 = stdlib.gt(v182, v186);
            
            return v198;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v233 = stdlib.ge(v183, v184);
            const v234 = v233 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v235 = stdlib.eq(v234, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
            const v236 = v235 ? v176 : v177;
            sim_r.txns.push({
              kind: 'from',
              to: v236,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: ['time', v182],
      tys: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v174, v176, v177, v182, v183, v184, v185, v192],
        evt_cnt: 0,
        funcNum: 4,
        lct: v185,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:71:19:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v227, time: v226, didSend: v113, from: v225 } = txn4;
          
          ;
          
          const cv183 = v183;
          const cv184 = v184;
          const cv185 = v226;
          const cv186 = v185;
          const cv192 = v192;
          
          await (async () => {
            const v183 = cv183;
            const v184 = cv184;
            const v185 = cv185;
            const v186 = cv186;
            const v192 = cv192;
            
            if (await (async () => {
              const v198 = stdlib.gt(v182, v186);
              
              return v198;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v233 = stdlib.ge(v183, v184);
              const v234 = v233 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              const v235 = stdlib.eq(v234, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
              const v236 = v235 ? v176 : v177;
              sim_r.txns.push({
                kind: 'from',
                to: v236,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v227, time: v226, didSend: v113, from: v225 } = txn4;
      ;
      stdlib.protect(ctc3, await interact.showOutcome(stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'), v183, v184), {
        at: './index.rsh:42:29:application',
        fs: ['at ./index.rsh:41:11:application call to [unknown function] (defined at: ./index.rsh:41:35:function exp)', 'at ./index.rsh:72:43:application call to [unknown function] (defined at: ./index.rsh:40:51:function exp)', 'at ./index.rsh:70:38:application call to [unknown function] (defined at: ./index.rsh:70:38:function exp)'],
        msg: 'showOutcome',
        who: 'Member'
        });
      
      const cv183 = v183;
      const cv184 = v184;
      const cv185 = v226;
      const cv186 = v185;
      const cv192 = v192;
      
      v183 = cv183;
      v184 = cv184;
      v185 = cv185;
      v186 = cv186;
      v192 = cv192;
      
      continue;
      }
    else {
      const {data: [v210], secs: v212, time: v211, didSend: v84, from: v209 } = txn3;
      const v215 = stdlib.add(v192, v174);
      ;
      stdlib.protect(ctc3, await interact.memberWas(v209), {
        at: './index.rsh:66:49:application',
        fs: ['at ./index.rsh:66:24:application call to [unknown function] (defined at: ./index.rsh:66:28:function exp)', 'at ./index.rsh:64:27:application call to [unknown function] (defined at: ./index.rsh:64:27:function exp)'],
        msg: 'memberWas',
        who: 'Member'
        });
      
      const v217 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v218 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v219 = v210 ? v217 : v218;
      const v220 = v219[stdlib.checkedBigNumberify('./index.rsh:67:19:array', stdlib.UInt_max, '0')];
      const v221 = v219[stdlib.checkedBigNumberify('./index.rsh:67:19:array', stdlib.UInt_max, '1')];
      const v222 = stdlib.add(v183, v220);
      const v223 = stdlib.add(v184, v221);
      const cv183 = v222;
      const cv184 = v223;
      const cv185 = v211;
      const cv186 = v185;
      const cv192 = v215;
      
      v183 = cv183;
      v184 = cv184;
      v185 = cv185;
      v186 = cv186;
      v192 = cv192;
      
      continue;}
    
    }
  const v233 = stdlib.ge(v183, v184);
  const v234 = v233 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  const v235 = stdlib.eq(v234, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v236 = v235 ? v176 : v177;
  ;
  stdlib.protect(ctc3, await interact.showOutcome(v234, v183, v184), {
    at: './index.rsh:42:29:application',
    fs: ['at ./index.rsh:41:11:application call to [unknown function] (defined at: ./index.rsh:41:35:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:40:51:function exp)'],
    msg: 'showOutcome',
    who: 'Member'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAJAAEECEhQWGBoJgIBAAAiNQAxGEECgClkSSJbNQElWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0mBAwxAAPVJJAxAAFMkEkQkNAESRDQESSISTDQCEhFEKGRJNQMhBFs1/4AEkSc087AyBjT/D0Q0AyJbNANXCCA0A1coIDT/NAMhBVs0AyEGWzIGNAMhB1s0AyEIW0IBQEgkNAESRDQESSISTDQCEhFEKGRJNQNJIls1/yEEWzX+STUFFzX9gARlsQNdNP0WUQcIULAyBjT+DEQ0/4gB2IAQAAAAAAAAAAAAAAAAAAAAAYAQAAAAAAAAAAEAAAAAAAAAADT9TTX8NP80A1cIIDQDVyggNP40AyEFWzT8IlsINAMhBls0/CVbCDIGNAMhB1s0AyEIWzT/CEIApEkjDEAAZyMSRCM0ARJENARJIhJMNAISEUQoZEk1A4EgWzX/STUFSUoiWzX+JVs1/VcQIDX8VzAgNfuABGlbjwU0/hZQNP0WUDT8UDT7ULA0A1cAIDEAEkQ0/jT8NPs0/zT9CCIiMgY0/yJCADdIgaCNBogBBiI0ARJENARJIhJMNAISEUSABF8Nq/qwMQAyBhZQKEsBVwAoZ0gjNQEyBjUCQgCFNf81/jX9Nfw1+zX6Nfk1+DX3NPo0/g1BAC809xY0+FA0+VA0+hZQNPsWUDT8FlA0/RZQNP8WUChLAVcAcGdIJDUBMgY1AkIAPLEisgE0/7III7IQNPk0+CMiNPs0/A9NIhJNsgezQgAAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 112,
  unsupported: [],
  version: 10,
  warnings: []
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:46:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:79:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:56:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Deployer": Deployer,
  "Member": Member
  };
export const _APIs = {
  };
