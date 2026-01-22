import G               from "../utils/globals.mjs";
import RC              from "../utils/colors.mjs";
import Fill            from "../classes/fill.mjs";
import Point           from "../classes/point.mjs";
import Circle          from "../shapes/circle.mjs";
import Stroke          from "../classes/stroke.mjs";
import { radialRA }    from "../utils/radial.mjs";
import { radialRJ }    from "../utils/radial.mjs";
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
    //CL(group.id);
  } 

  let C = new Circle;
  C.position = G.MID;
  C.size.r = new Incremental({value: 450, param: -20});
  C.stroke = new Stroke(RC('clear'));
  C.stroke.opacity = 0.66;
  let csw = new Incremental({value: 0, param: 1});
  
  for (let i=1; i<10; i++) {
    C.size.r.next();
    C.fill = new Fill({kind: 'random', param: 'clear'});
    C.stroke.width = csw.next().value;
    out += C.render();
  }

  const P1 = randomPoint();
  const P2 = randomPoint();

  out += P1.render('cross','P1',5,'red');
  out += P2.render('cross','P2',5,'red');

  const A = radialRA();
  A.forEach((point) => {
    out += point.render('cross',point.id,5,'hotpink');
  });

  out += '<!-- /svgContent() -->';
  return out;
} 
//-----------------------------------------------------------------------------

export default svgContent;