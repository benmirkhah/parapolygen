const SUGARS = {
  //Value calculation function types-------------------------------------------
  fixed        : 'fixed'       ,  //Stick to a predetermined value
  random       : 'random'      ,  //Pick a random value between min & max
  sysgrid      : 'sysgrid'     ,  //Snap to main system grid
  selfgrid     : 'selfgrid'    ,  //Snap to own grid 
  surprise     : 'surprise'    ,  //Pick one from this list except self  
  alternate    : 'alternate'   ,  //Alternates between two modes every n intervals  
  intervals    : 'intervals'   ,  //Few of this type, few of that
  geometric    : 'geometric'   ,  //Current Value * Sin/Cos/Tan 
  groupgrid    : 'groupgrid'   ,  //Snap to group grid
  functional   : 'functional'  ,  //Eval your own fuction
  exponential  : 'exponential' ,  //Current value * scaler parameter
  incremental  : 'incremental' ,  //Current value + delta parameter
  logarithmic  : 'logarithmic' ,  //Natural log
  //Grid related syntax sugar--------------------------------------------------
  normal       : 'normal'      ,
  radial       : 'radial'      ,
  spiral       : 'spiral'      ,
  backward     : 'backward'    ,
  diagonal     : 'diagonal'    ,
  vertical     : 'vertical'    ,
  //Filter related syntax sugars-----------------------------------------------
  bnw          : 'bnw'         ,
  glow         : 'glow'        ,
  tile         : 'tile'        ,
  dance        : 'dance'       ,
  mboss        : 'mboss'       ,
  chaotic      : 'chaotic'     ,
  oblivion     : 'oblivion'    ,
  pixelate     : 'pixelate'    ,
  watercolor   : 'watercolor'  ,
  pointlight   : 'pointlight'  ,
  motionblurx  : 'motionblurx' ,
  motionblury  : 'motionblury' ,
  displacement : 'displacement',
  gaussianblur : 'gaussianblur',
  //Boxy shapes----------------------------------------------------------------
  blob         : 'blob'        ,
  claw         : 'claw'        ,
  wave         : 'wave'        ,
  cloud        : 'cloud'       ,
  flame        : 'flame'       ,
  corner       : 'corner'      ,
  bullet       : 'bullet'      ,
  letter       : 'letter'      ,
  square       : 'square'      ,
  ellipse      : 'ellipse'     ,
  mountain     : 'mountain'    ,
  rectangle    : 'rectangle'   ,
  //Radial shapes--------------------------------------------------------------
  star         : 'star'        ,
  heart        : 'heart'       ,
  circle       : 'circle'      ,
  flower       : 'flower'      ,
  pollen       : 'pollen'      ,
  hexagon      : 'hexagon'     ,
  octagon      : 'octagon'     ,
  oddagon      : 'oddagon'     ,
  polygon      : 'polygon'     ,
  dexagon      : 'dexagon'     ,
  dozengon     : 'dozengon'    ,
  nautilus     : 'nautilus'    ,
  randogon     : 'randogon'    ,
  pentagon     : 'pentagon'    ,
  triangle     : 'triangle'    ,
  umbrella     : 'umbrella'    ,
}
//-----------------------------------------------------------------------------
for (const key in SUGARS) Object.freeze(SUGARS[key]);

export default Object.freeze(SUGARS);