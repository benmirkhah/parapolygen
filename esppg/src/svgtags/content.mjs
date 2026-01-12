import G               from "../utils/globals.mjs";
import Point           from "../classes/point.mjs";
import { allGroups }   from "../classes/group.mjs";
import { randomPoint } from "../utils/randoms.mjs";
import Incremental     from "../parametric/incremental.mjs";
//Syntax sugar--------------------------------------------------
function CL(x) { return G.DEBUG ? console.log(x) : false; }

//Outputs all the rendered elements inside every group-------------------------
function svgContent() {
  let out = '';
  out += '<!-- +svgContent() -->';
  
  //iterate through each group
  for (const id in allGroups) {
    let group = allGroups[id];
    CL(group.id);
  } 






  

  let P = new Point;
  let X = new Incremental({id:'X', value:10,  param:10, every:3, skip:1, altv:500});
  let Y = new Incremental({id:'Y', value:100, param:20, every:7, skip:3, altv:200});

  for (let i=1; i<40; i++) {
    P.x = X.next().value+(i*i);
    P.y = Y.next().value;
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