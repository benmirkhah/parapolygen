import Filter from "../classes/filter.mjs";
import RI     from "../utils/randoms.mjs";
import G      from "../utils/globals.mjs";

function pointlightFilter() {
  let out = '';
  let x = RI(G.WIDTH  * 0.1, G.WIDTH  * 0.9);
  let y = RI(G.HEIGHT * 0.1, G.HEIGHT * 0.9);
  let c = RI(1, G.COLORS);
  let z = RI(100,   1000);
  out += '<filter id="'+G.SVGID+'-pointlight">\r\n';
  out += `  <feDiffuseLighting in="SourceGraphic" result="light" lighting-color="var(--c${c})">\r\n`;
  out += `    <fePointLight x="${x}" y="${y}" z="${z}" />\r\n`;
  out += '  </feDiffuseLighting>\r\n';
  out += '  <feComposite in="SourceGraphic" in2="light" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" />\r\n';
  out += '</filter>\r\n';
  return out;
}

const pointlight = new Filter('pointlight', pointlightFilter());

export default pointlight;