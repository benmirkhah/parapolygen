import { Filter } from "../classes/filter.mjs";
import G from "../utils/globals.mjs";

function danceFilter() {
  let out = '';
  out += '<filter id="'+G.SVGID+'-dance" color-interpolation-filters="linearRGB" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">\r\n';
  out += '  <feMorphology operator="dilate" radius="8 8" in="SourceAlpha" result="morphology"/>\r\n';
  out += '  <feFlood flood-color="#000000" flood-opacity="0.5" result="flood"/>\r\n';
  out += '  <feComposite in="flood" in2="morphology" operator="in" result="composite"/>\r\n';
  out += '  <feComposite in="composite" in2="SourceAlpha" operator="out" result="composite1"/>\r\n';
  out += '  <feTurbulence type="fractalNoise" baseFrequency="0.01 0.02" numOctaves="1" seed="0" stitchTiles="stitch" result="turbulence"/>\r\n';
  out += '  <feDisplacementMap in="composite1" in2="turbulence" scale="17" xChannelSelector="A" yChannelSelector="A" result="displacementMap"/>\r\n';
  out += '  <feMerge result="merge">\r\n';
  out += '    <feMergeNode in="SourceGraphic" result="mergeNode"/>\r\n';
  out += '    <feMergeNode in="displacementMap" result="mergeNode1"/>\r\n';
  out += '  </feMerge>\r\n';
  out += '</filter>\r\n';
  return out;
}

const dance = new Filter('dance', danceFilter());

export default dance;