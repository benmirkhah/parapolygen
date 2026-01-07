import G from "./globals.mjs";

function DEBUG(x, option = 'log') {
  if (G.DEBUG) {
    try { throw new Error('Debug trace'); } catch(e) { console.log(e.stack); }
    //console.log(JSON.stringify(obj, null, 2));
    console.log(x);
  }
}

export default DEBUG;