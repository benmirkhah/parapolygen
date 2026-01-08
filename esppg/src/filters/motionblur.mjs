import Filter from "../classes/filter.mjs";
import RI     from "../utils/randoms.mjs";
import G      from "../utils/globals.mjs";

function motionblurFilter(axis = 'x') {
  let out = '';
  let std = '';
  let rnd = 0;
  axis = (axis.toLowerCase == 'x') ? 'x' : 'y';
  rnd  = RI(5, 400);
  rnd -= RI(1, rnd); //reduce likelihood of large rand
  std  = (axis == 'x') ? rnd+' 0' : '0 '+rnd;
  out += '<filter id="'+G.SVGID+'-motionblur'+axis+'">\r\n';
  out += `  <feGaussianBlur in="SourceGraphic" stdDeviation="${std}" edgeMode="duplicate" color-interpolation-filters="sRGB" />\r\n`;
  out += '</filter>\r\n';
  return out;
}

export const motionblurx = new Filter('motionblurx', motionblurFilter('x'));
export const motionblury = new Filter('motionblury', motionblurFilter('y'));
