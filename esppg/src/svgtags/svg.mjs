import G          from "../utils/globals.mjs";
import svgContent from "./content.mjs";
import svgStyle   from "./style.mjs";
import svgGrids   from "./grids.mjs";
import svgDefs    from "./defs.mjs";
import svgBox     from "./box.mjs"

//Wraps the entire rendered elements with the <svg> tag------------------------
function svgTag(svgid='S777') {
  const xmlns = "http://www.w3.org/2000/svg";
  const xlink = "http://www.w3.org/1999/xlink";
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
  out += svgStyle();            //Add CSS rules & vars
  out += svgDefs();             //Add filters & gradients
  out += svgBox();              //Add bounding box background color
  out += svgGrids();            //Add all the grids
  out += svgContent();          //Add all the shapes
  out += '</svg>\r\n';          //Have a nice day bye
  return out;
}//----------------------------------------------------------------------------

export default svgTag