import G           from "../utils/globals.mjs";
import RC          from "../utils/colors.mjs";
import Fill        from "../classes/fill.mjs";
import Grid        from "../classes/grid.mjs";
import Size        from "../classes/size.mjs";
import Stroke      from "../classes/stroke.mjs";
import Position    from "../classes/position.mjs";
import Incremental from "../parametric/incremental.mjs";
//Syntax sugar------------------------------------------
const disabled ='disabled';
const sunset   =  'sunset';
const normal   =  'normal';
const solid    =   'solid';

//Returns the system default configuration object------------------------------
function systemConf() {
  let sys = new Object;
  //------------------------------------------------------COLORS
  sys.colors                =                                40;
  sys.palette               =                            sunset;
  //--------------------------------------------------------GRID
  sys.grid                  =                new Grid('system');
  sys.grid.kind             =                            normal;
  sys.grid.sort             =                            normal;
  sys.grid.show             =                              true;
  sys.grid.rows             =                                24;
  sys.grid.cols             =                                16;
  sys.grid.center           =                             G.MID;
  sys.grid.size.w           =                           G.WIDTH;
  sys.grid.size.h           =                          G.HEIGHT;
  //--------------------------------------------------------SIZE
  sys.size                  =                          new Size;
  let wParam                =   {id:'sysw', value:80, param:10};          
  sys.size.w                =           new Incremental(wParam);
  sys.size.h                =                                60;
  sys.size.r                =                                50;
  sys.size.o                =                               150;
  //----------------------------------------------------POSITION
  sys.position              =                      new Position;
  sys.position.x            =                           G.MID.x;
  sys.position.y            =                           G.MID.y;
  //------------------------------------------------------STROKE
  sys.stroke                =                        new Stroke;
  sys.stroke.width          =                                 1;
  //--------------------------------------------------------FILL
  sys.fill                  =                          new Fill;
  sys.fill.kind             =                             solid;
  sys.fill.color            =                              RC();  
  //------------------------------------------------------FILTER
  sys.filter                =                        new Object;
  sys.filter.chaos          =                          disabled;
  sys.filter.watercolor     =                          disabled;
  //-------------------------------------------------------SCALE
  sys.rotation              =                          disabled;
  sys.scale                 =                          disabled;
  sys.skew                  =                          disabled;
  //------------------------------------------------------EVENTS
  sys.events                =                        new Object;
  sys.events.onclick        =                          disabled;
  //------------------------------------------------------------
  return sys;
}
//-----------------------------------------------------------------------------
export default systemConf;