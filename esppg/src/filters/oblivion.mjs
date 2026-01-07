import { Filter    } from "../classes/filter.mjs";
import { randomInt } from "../utils/randoms.mjs";
import G from "../utils/globals.mjs";

function oblivionFilter() {
  let out = '';
  let x = randomInt(G.WIDTH  * 0.5, G.WIDTH  * 0.75);
  let y = randomInt(G.HEIGHT * 0.5, G.HEIGHT * 0.75);
  let w = randomInt(1, x);
  let h = randomInt(1, y);    
  let r = randomInt(300, 500);
  r = r+' '+r;  //r = r%2 ? '0 '+r : r+' 0';
  out += '<filter id="'+G.SVGID+'-oblivion">\r\n';
  out += `  <feTile in="SourceGraphic" x="${x}" y="${y}" width="${w}" height="${h}" />\r\n`;
  out += `  <feGaussianBlur in="SourceGraphic" stdDeviation="${r}" edgeMode="duplicate" color-interpolation-filters="sRGB" />\r\n`;
  out += '</filter>\r\n';
  return out;
}

const oblivion = new Filter('oblivion', oblivionFilter(), false); //inactive by default

export default oblivion;