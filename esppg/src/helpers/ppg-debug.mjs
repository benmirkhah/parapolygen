import GLOBALS from "./ppg-globals.mjs";

function DEBUG(x, option = 'log') {
  if (GLOBALS.DEBUG) {
    console.log(x);
  }

  //console.log(JSON.stringify(obj, null, 2))  
  //console.dir(obj, { depth: null })
  //try { throw new Error('Stack trace'); } catch(e) { console.log(e.stack); }
}

export default DEBUG;