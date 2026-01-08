import Filter from "../classes/filter.mjs";
import RI     from "../utils/randoms.mjs";
import G      from "../utils/globals.mjs";

function displacementFilter() {
  let out      = '';
  let scale    = RI(  2,   99);
  let seed25   = RI(  1,   25);
  let seed1000 = RI(100, 1000);
  out += '<filter id="'+G.SVGID+'-displacement">\r\n';
  out += `  <feTurbulence baseFrequency="0.0${seed25}" seed="${seed1000}" result="turbulence" />\r\n`;
  out += `  <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="${scale}" xChannelSelector="R" yChannelSelector="G" />\r\n`;
  out += '</filter>\r\n';
  return out;
}

const displacement = new Filter('displacement', displacementFilter());

export default displacement;