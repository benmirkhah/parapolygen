import Filter from "../classes/filter.mjs";
import RI     from "../utils/randoms.mjs";
import G      from "../utils/globals.mjs";

function oblivionFilter() {
  let out = '';
  let x = RI(G.WIDTH  * 0.5, G.WIDTH  * 0.75);
  let y = RI(G.HEIGHT * 0.5, G.HEIGHT * 0.75);
  let w = RI(1, x);
  let h = RI(1, y);    
  let r = RI(300, 500);
  r = r+' '+r;  //r = r%2 ? '0 '+r : r+' 0';
  out += '<filter id="'+G.SVGID+'-oblivion">\r\n';
  out += `  <feTile in="SourceGraphic" x="${x}" y="${y}" width="${w}" height="${h}" />\r\n`;
  out += `  <feGaussianBlur in="SourceGraphic" stdDeviation="${r}" edgeMode="duplicate" color-interpolation-filters="sRGB" />\r\n`;
  out += '</filter>\r\n';
  return out;
}

const oblivion = new Filter('oblivion', oblivionFilter(), false); //inactive by default

export default oblivion;