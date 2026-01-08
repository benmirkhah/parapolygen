import Filter from "../classes/filter.mjs";
import RI     from "../utils/randoms.mjs";
import G      from "../utils/globals.mjs";

function dialateFilter() {
  let out = '';
  let r   = RI(1,50);
  out += '<filter id="'+G.SVGID+'-dialate" color-interpolation-filters="sRGB">\r\n';
  out += '  <feMorphology operator="dilate" radius="'+r+'"/>\r\n';
  out += '</filter>\r\n';
  return out;
}

const dialate = new Filter('dialate', dialateFilter());

export default dialate;