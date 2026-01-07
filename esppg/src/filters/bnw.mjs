import { Filter } from "../classes/filter.mjs";
import G from "../utils/globals.mjs";

function bnwFilter() {
  let out = '';
  out += '<filter id="'+G.SVGID+'-bnw" filterUnits="objectBoundingBox">\r\n';
  out += '  <feColorMatrix id="lumval" type="luminanceToAlpha" in="SourceGraphic"/>\r\n';
  out += '</filter>\r\n';
  return out;
}

const bnw = new Filter('bnw', bnwFilter());

export default bnw;