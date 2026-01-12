const SUGARS = {
  //Value calculation function types-------------------------------------------
  fixed        : 'fixed'       ,  //Stick to a predetermined value
  group        : 'group'       ,  //Snap to group grid
  random       : 'random'      ,  //Pick a random value between min & max
  system       : 'system'      ,  //Snap to main system grid
  disabled     : 'disabled'    ,  //Disable
  selfgrid     : 'selfgrid'    ,  //Snap to own grid 
  surprise     : 'surprise'    ,  //Pick one from this list except self  
  groupgrid    : 'groupgrid'   ,  //Snap to group grid
  functional   : 'functional'  ,  //Eval your own fuction
  exponential  : 'exponential' ,  //Current value * scaler parameter
  incremental  : 'incremental' ,  //Current value + delta parameter
  geometrical  : 'geometrical' ,  //Current Value * Sin/Cos/Tan 
  logarithmic  : 'logarithmic' ,  //Natural log
  //Grid related syntax sugar--------------------------------------------------
  normal       : 'normal'      ,
  radial       : 'radial'      ,
  spiral       : 'spiral'      ,
  backward     : 'backward'    ,
  diagonal     : 'diagonal'    ,
  vertical     : 'vertical'    ,
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

const S = Object.freeze(SUGARS);

export default S;