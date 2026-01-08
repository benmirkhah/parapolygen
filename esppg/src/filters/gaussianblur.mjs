import Filter from "../classes/filter.mjs";
import RI     from "../utils/randoms.mjs";
import G      from "../utils/globals.mjs";

function gaussianblurFilter() {
  let out = '';
  let x = RI(5, 99);
  let y = RI(5, 99);
  x   -=  RI(1,  x); //reduce likelihood of large x
  y   -=  RI(1,  y); //reduce likelihood of large y
  out += '<filter id="'+G.SVGID+'-gaussianblur">\r\n';
  out += `  <feGaussianBlur in="SourceGraphic" stdDeviation="${x} ${y}" edgeMode="duplicate" color-interpolation-filters="sRGB" />\r\n`;
  out += '</filter>\r\n';
  return out;
}

const gaussianblur = new Filter('gaussianblur', gaussianblurFilter());

export default gaussianblur;