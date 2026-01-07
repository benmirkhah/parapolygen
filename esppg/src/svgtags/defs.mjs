import filters from "../filters/filters.mjs";

//Output the render all the filters--------------------------------------------
function svgGradients() {
  let out = '';
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