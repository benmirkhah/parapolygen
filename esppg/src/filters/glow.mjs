import { Filter    } from "../classes/filter.mjs";
import { randomInt } from "../utils/randoms.mjs";
import G from "../utils/globals.mjs";

function glowFilter() {
  let out = '';
  let c = randomInt(1, G.COLORS);
  let d = randomInt(2, 30);
  out += '<filter id="'+G.SVGID+'-glow">\r\n'
  out += `  <feDropShadow in="FillPaint" dx="0" dy="0" stdDeviation="${d}" flood-color="var(--c${c})" />\r\n`;
  out += '</filter>\r\n';
  return out;
}

const glow = new Filter('glow', glowFilter());

export default glow;