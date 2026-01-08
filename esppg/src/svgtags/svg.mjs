import G               from "../utils/globals.mjs";
import { randomPoint } from "../utils/randoms.mjs";
import svgStyle        from "./style.mjs";
import svgDefs         from "./defs.mjs";
import svgBox          from "./box.mjs"

//Wraps everything in the <svg> element tag------------------------------------
function svgTag(svgid='S777') {
  const xmlns = "http://www.w3.org/2000/svg";
  const xlink = "http://www.w3.org/1999/xlink";
  //counter = resetCounter();
  let out = '';
  out += '<svg ';
  out += `id="${svgid}" `;
  out += `viewBox="0 0 ${G.WIDTH} ${G.HEIGHT}" `;
  out += `fill="none" `;
  out += 'preserveAspectRatio="xMinYMid slice" ';
  out += `xmlns="${xmlns}" `;
  out += `xmlns:xlink="${xlink}" `;
  out += 'stroke-width="1" ';
  out += 'stroke-linecap="round" ';
  out += 'stroke-linejoin="round" ';
  out += '>\r\n';
  //SVG Begins---------------------------------------------
  out += svgStyle();            //Add CSS
  out += svgDefs();             //Add Filters & Gradients
  out += svgBox();              //Add Background Color
  //out += svgShowGrid();         //Add Grids if any
  //out += svgContent();          //Add all the shapes
  
  const P1 = randomPoint();
  const P2 = randomPoint();

  out += G.MID.render('circle','MID');
  out += P1.render('cross','P1');
  out += P2.render('xmark','P2');





  out += '</svg>\r\n';          //Have a nice day
  return out;
}//----------------------------------------------------------------------------

export default svgTag