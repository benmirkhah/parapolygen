import Filter from "../classes/filter.mjs";
import G      from "../utils/globals.mjs";

function mbossFilter() {
  let out = '';
  out += '<filter id="'+G.SVGID+'-mboss">\r\n';
  out += '  <feConvolveMatrix order="4" kernelMatrix="-2 2 1 -1 -1 3 2 1 -1 0 -1 -4 -1 1 0 0"/>\r\n';
  out += '</filter>\r\n';
  return out;
}

const mboss = new Filter('mboss', mbossFilter());

export default mboss;