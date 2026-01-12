import RC    from "../utils/colors.mjs";
import Grid  from "../classes/grid.mjs";
import Size  from "../classes/size.mjs";
import Group from "../classes/group.mjs";
import Point from "../classes/point.mjs";
//Syntax sugar------------------------------
const normal = 'normal';
const solid  =  'solid';

//return the default builtin group configuration------------------------------- 
function builtinGroup() {
  let builtin                       =      new Group('builtin');
  builtin.color                     =                    'gold';
  //--------------------------------------------------------GRID
  builtin.grid                      =       new Grid('builtin');
  builtin.grid.center               = new Point({x:480, y:480});
  builtin.grid.kind                 =                    normal;
  builtin.grid.rows                 =                        12;
  builtin.grid.cols                 =                        12;
  builtin.grid.size.w               =                       480;
  builtin.grid.size.h               =                       480;
  builtin.grid.color                =               '#999999';
  //------SHAPES------------------------------------------CIRCLE
//builtin.shapes.circle.count       =                         5;
//builtin.shapes.circle.size        =                  new Size;
//builtin.shapes.circle.size.r      =                       100;
//builtin.shapes.circle.fill        =                  new Fill;
//builtin.shapes.circle.fill.kind   =                     solid;
//builtin.shapes.circle.fill.color  =                      RC();
  //---------------------------------------------------RECTANGLE
//builtin.shapes.rectangle.count    =                         5;
  //------------------------------------------------------------  
  return builtin;
}
//-----------------------------------------------------------------------------
export default builtinGroup;