import { allGradients } from "../classes/gradient.mjs";
import filters          from "../filters/filters.mjs";
import G                from "../utils/globals.mjs";
//Syntax sugar-------------------------------------
function CL(x) { return G.DEBUG ? console.log(x) : false; }

//Output the render all the filters--------------------------------------------
function svgGradients() {
  let out = '';
  out += '<!-- +svgGradients() -->';
  //iterate through each group
  CL(allGradients);
  
  for (const id in allGradients) {
    let gradient = allGradients[id];
    //CL(gradient.id());
  } 
  
  out += '<!-- /svgGradients() -->';
  return out;
}//----------------------------------------------------------------------------

//Output the render all the filters--------------------------------------------
function svgFilters() {
  let out = '';
  Object.keys(filters).forEach(filter => { 
    out += filters[filter].render();
  });
  return out;
}//----------------------------------------------------------------------------

//Adds the <defs> element for gradients and filters to reside in---------------
function svgDefs() {
  return '<defs>\r\n' + svgGradients() + svgFilters() + '</defs>\r\n';
}//----------------------------------------------------------------------------

export default svgDefs;