import GLOBALS from "./ppg-globals.mjs";

function DEBUG(x, option = 'log') {
  if (GLOBALS.DEBUG) {
    try { throw new Error('Debug trace'); } catch(e) { console.log(e.stack); }
    console.log(x);
  }

  //console.log(JSON.stringify(obj, null, 2))  
  //console.dir(obj, { depth: null })
}

export default DEBUG;