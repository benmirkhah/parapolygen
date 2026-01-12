import G               from "../utils/globals.mjs";
import Point           from "../classes/point.mjs";
import { randomPoint } from "../utils/randoms.mjs";
import Incremental     from "../parametric/incremental.mjs";

//Outputs all the rendered elements inside every group-------------------------
function svgContent() {
  let out = '';
  out += '<!-- +svgContent() -->'; 
  out += G.MID.render('circle','MID');
  
  let P = new Point;
  let X = new Incremental({id:'X', value:10,  param:20, every:5, skip:1, altv:500});
  let Y = new Incremental({id:'Y', value:100, param:10, every:3, skip:2, altv:200});

  for (let i=1; i<60; i++) {
    let x = X.next();
    let y = Y.next();
    P.x = x.value;
    P.y = y.value;
    //console.log(P);
    out += P.render('xmark',i)
  }

  const P1 = randomPoint();
  const P2 = randomPoint();

  out += P1.render('cross','P1',5,'red');
  out += P2.render('cross','P2',5,'red');

  out += '<!-- /svgContent() -->';
  return out;
} 
//-----------------------------------------------------------------------------

export default svgContent;