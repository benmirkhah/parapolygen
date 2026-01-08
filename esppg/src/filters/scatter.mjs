import Filter from "../classes/filter.mjs";
import G      from "../utils/globals.mjs";

function scatterFilter() {
  let out = '';
  out += '<filter id="'+G.SVGID+'-scatter" color-interpolation-filters="sRGB">\r\n';
  out += '  <feTurbulence type="fractalNoise" baseFrequency="7.13"/>\r\n';
  out += '  <feDisplacementMap in="SourceGraphic" scale="256" xChannelSelector="R"/>\r\n';
  out += '  <feBlend in2="SourceGraphic"/>\r\n';
  out += '</filter>\r\n';
  return out;
}

const scatter = new Filter('scatter', scatterFilter());

export default scatter;