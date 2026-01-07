import filters from "../filters/filters.mjs";

//Output the render all the filters--------------------------------------------
function svgGradients(svgid) {
  let out = '<!-- '+svgid+' -->';
  return out;
}//----------------------------------------------------------------------------

//Output the render all the filters--------------------------------------------
function svgFilters(svgid) {
  let out = '';
  Object.keys(filters).forEach(filter => { 
    out += filters[filter].render();
  });
  return out;
}//----------------------------------------------------------------------------

//Adds the <defs> element for gradients and filters to reside in---------------
function svgDefs(svgid) {
  return '<defs>\r\n' + svgGradients(svgid) + svgFilters(svgid) + '</defs>\r\n';
}//----------------------------------------------------------------------------

export default svgDefs;