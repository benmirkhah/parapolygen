import Filter from "../classes/filter.mjs";
import G      from "../utils/globals.mjs";

function watercolorFilter() {
  let out = '';
  out += '<filter id="'+G.SVGID+'-watercolor" color-interpolation-filters="sRGB" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">\r\n';
  out += '  <feTurbulence type="fractalNoise" baseFrequency="0.09 0.09" numOctaves="7" seed="1" stitchTiles="stitch" result="turbulence"/>\r\n';
  out += '  <feDiffuseLighting surfaceScale="0.5" diffuseConstant="3.2" lighting-color="#ffffff" in="turbulence" result="diffuseLighting">\r\n';
  out += '    <feDistantLight azimuth="250" elevation="16"/>\r\n';
  out += '  </feDiffuseLighting>\r\n';
  out += '  <feTurbulence type="fractalNoise" baseFrequency="0.011 0.004" numOctaves="2" seed="3" stitchTiles="noStitch" result="turbulence1"/>\r\n';
  out += '  <feColorMatrix type="saturate" values="3" in="turbulence1" result="colormatrix"/>\r\n';
  out += '  <feColorMatrix type="matrix" values=\r\n';
  out += '    "2 0   0 0 0\r\n';
  out += '     0 1.5 0 0 0\r\n';
  out += '     0 0   2 0 0\r\n';
  out += '     0 0   0 2 0" in="colormatrix" result="colormatrix1"/>\r\n';
  out += '  <feBlend mode="multiply" in="diffuseLighting" in2="colormatrix1" result="blend"/>\r\n';
  out += '  <feComposite in="blend" in2="SourceAlpha" operator="in" result="composite1"/>\r\n';
  out += '</filter>\r\n';
  return out;
}

const watercolor = new Filter('watercolor', watercolorFilter());

export default watercolor;