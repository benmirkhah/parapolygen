import G from "../utils/globals.mjs";

//Generates the bottom most bounding box layer containing background color-----
function svgBox() {
  //let bgc = ''; //Background color
  //bgcolor     = ( svgconf.enabled.bgcolor === true) ? 'currentColor' : svgconf.enabled.bgcolor;
  //bgcolor     = (!svgconf.enabled.bgcolor         ) ? 'none'         : bgcolor;
  let out = '';
  out += '<rect '; //Add a bounding box
  out += `id="${G.SVGID}-box"`   ;
  out += ` x="0" y="0"`          ;
  out += ` width="${G.WIDTH  }" `;
  out += `height="${G.HEIGHT }"` ; 
  out += `  fill="${G.BGC    }"` ;
  out += `></rect>\r\n`;  //allow parent element to control border color
  return out;
}//----------------------------------------------------------------------------

export default svgBox;