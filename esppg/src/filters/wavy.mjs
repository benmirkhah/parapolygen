import Filter from "../classes/filter.mjs";
import G      from "../utils/globals.mjs";

function wavyFilter() {
  let out = '';
  out += '<filter id="'+G.SVGID+'-wavy">\r\n';
  out += '  <feTurbulence x="0" y="0" baseFrequency="0.009" numOctaves="5" seed="2">\r\n';
  out += '    <animate attributeName="baseFrequency" dur="60s" values="0.02;0.005;0.02" repeatCount="indefinite">\r\n';
  out += '  </feTurbulence>\r\n';
  out += '  <feDisplacementMap in="SourceGraphic" scale="30">\r\n';
  out += '</filter>\r\n';
  return out;
}

const wavy = new Filter('wavy', wavyFilter());

export default wavy;