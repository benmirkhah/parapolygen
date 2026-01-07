import bnw             from "./bnw.mjs";
import chaotic         from "./chaotic.mjs";
import dance           from "./dance.mjs";
import displacement    from "./displacement.mjs";
import gaussianblur    from "./gaussianblur.mjs";
import glow            from "./glow.mjs";
import mboss           from "./mboss.mjs";
import { motionblurx } from "./motionblur.mjs";
import { motionblury } from "./motionblur.mjs";
import oblivion        from "./oblivion.mjs";
import pixelate        from "./pixelate.mjs";
import pointlight      from "./pointlight.mjs";
import tile            from "./tile.mjs";
import watercolor      from "./watercolor.mjs";

const filters = {
  bnw          : bnw          ,
  chaotic      : chaotic      ,
  dance        : dance        ,
  displacement : displacement ,
  gaussianblur : gaussianblur ,
  glow         : glow         ,
  mboss        : mboss        ,
  motionblurx  : motionblurx  ,
  motionblury  : motionblury  ,
  oblivion     : oblivion     ,
  pixelate     : pixelate     ,
  pointlight   : pointlight   ,
  tile         : tile         ,
  watercolor   : watercolor   ,
}

export default filters;