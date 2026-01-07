import { Filter    } from "../classes/filter.mjs";
import { randomInt } from "../utils/randoms.mjs";
import G from "../utils/globals.mjs";

function tileFilter() {
  let out = '';
  let x = randomInt(G.WIDTH  * 0.5, G.WIDTH  * 0.75);
  let y = randomInt(G.HEIGHT * 0.5, G.HEIGHT * 0.75);
  let w = randomInt(1, x);
  let h = randomInt(1, y);
  out += '<filter id="'+G.SVGID+'-tile" x="0" y="0" width="100%" height="100%">\r\n';
  out += `  <feTile in="SourceGraphic" x="${x}" y="${y}" width="${w}" height="${h}" />\r\n`;
  out += '  <feTile />\r\n';
  out += '</filter>\r\n';
  return out;
}

const tile = new Filter('tile', tileFilter());

export default tile;