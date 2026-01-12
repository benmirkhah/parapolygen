import G            from "../utils/globals.mjs";
import Grid         from "../classes/grid.mjs";
import Group        from "../classes/group.mjs";
import builtinGroup from "./builtin.mjs";
//Syntax sugar--------------------------------------------------
function CL(x) { return G.DEBUG ? console.log(x) : false; }
const radial = 'radial';

//Returns the system default configuration object------------------------------
function groupConf() {
  let grp     =   new Object();
  grp.builtin = builtinGroup();
  //------------RED---------------------------------------------
  grp.red                          =           new Group('red');
  grp.red.grid                     =            new Grid('red');
  grp.red.grid.kind                =                     radial;
  grp.red.grid.center              =                      G.MID;
  grp.red.grid.rings               =                          4;
  grp.red.grid.jewels              =                         12;
  grp.red.grid.size.r              =                        200;
  grp.red.grid.size.o              =                        400;
  grp.red.grid.color               =                      'red';
  //----------------SHAPES--------------------------------------
  //grp.red.shapes.circle.size.r   =                        100;
  //------------------------------------------------------------
  return grp;
}
//-----------------------------------------------------------------------------

export default groupConf;