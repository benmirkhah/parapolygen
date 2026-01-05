//Adds the <defs> element for gradients to reside in---------------------------
function svgDefs() {
  return '<defs>\r\n' + svgGradients() + svgFilters() + '</defs>\r\n';
}//----------------------------------------------------------------------------