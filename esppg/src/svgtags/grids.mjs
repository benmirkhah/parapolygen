import G     from "../utils/globals.mjs";
//import Grid from "../classes/grid.mjs";

function svgGrids() {
  let out = '';
  out += '<!-- +svgGrids() -->';
  //------------------------------------------------------------



  out += G.MID.render('circle','MID',5,'lime');
  



  //------------------------------------------------------------
  out += '<!-- /svgGrids() -->';
  return out;
}
//-----------------------------------------------------------------------------

export default svgGrids;