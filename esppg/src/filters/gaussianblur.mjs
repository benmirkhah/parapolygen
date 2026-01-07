import { Filter    } from "../classes/filter.mjs";
import { randomInt } from "../utils/randoms.mjs";
import G from "../utils/globals.mjs";

function gaussianblurFilter() {
  let out = '';
  let x = randomInt(5, 99);
  let y = randomInt(5, 99);
  x   -=  randomInt(1,  x); //reduce likelihood of large x
  y   -=  randomInt(1,  y); //reduce likelihood of large y
  out += '<filter id="'+G.SVGID+'-gaussianblur">\r\n';
  out += `  <feGaussianBlur in="SourceGraphic" stdDeviation="${x} ${y}" edgeMode="duplicate" color-interpolation-filters="sRGB" />\r\n`;
  out += '</filter>\r\n';
  return out;
}

const gaussianblur = new Filter('gaussianblur', gaussianblurFilter());

export default gaussianblur;