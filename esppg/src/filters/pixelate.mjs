import { Filter    } from "../classes/filter.mjs";
import { randomInt } from "../utils/randoms.mjs";
import G from "../utils/globals.mjs";

function pixelateFilter() {
  let out = '';
  let r = randomInt(5, 101);
  out += '<filter id="'+G.SVGID+'-pixelate">\r\n';
  out += '  <feGaussianBlur operator="pixelate" in="SourceGraphic" radius="'+r+'"/>\r\n';
  out += '</filter>\r\n';
  return out;
}

const pixelate = new Filter('pixelate', pixelateFilter());

export default pixelate;