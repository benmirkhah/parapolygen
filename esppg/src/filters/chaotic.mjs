import Filter from "../classes/filter.mjs";
import G      from "../utils/globals.mjs";

function chaoticFilter() {
  let out = '';  
  out += '<filter id="'+G.SVGID+'-chaotic" color-interpolation-filters="linearRGB" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">\r\n';
  out += '  <feTurbulence type="turbulence" baseFrequency="0.015 0.015" numOctaves="3" seed="8" stitchTiles="stitch" result="turbulence"/>\r\n';
  out += '  <feMorphology operator="dilate" radius="35 35" in="turbulence" result="morphology"/>\r\n';
  out += '  <feColorMatrix type="matrix" values=\r\n';
  out += '    "1 0 0 0 0\r\n';
  out += '     0 1 0 0 0\r\n';
  out += '     0 0 1 0 0\r\n';
  out += '     0 0 0 10 0" in="morphology" result="colormatrix"/>\r\n';
  out += '  <feColorMatrix type="saturate" values="10" in="colormatrix" result="colormatrix1"/>\r\n';
  out += '  <feComposite in="colormatrix1" in2="SourceAlpha" operator="in" result="composite"/>\r\n';
  out += '</filter>\r\n';
  return out;
}

const chaotic = new Filter('chaotic', chaoticFilter());

export default chaotic;