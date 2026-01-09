import { Element } from "./element.mjs";
import { makeid  } from "../utils/randoms.mjs";
import RC          from "../utils/colors.mjs";

//A group of one or more shapes------------------------------------------------
class Group extends Element {
  static total =   1;
  static stack =  []; //Active Group IDs
  static sleep =  []; //ID of inactive ones  
  active =      true; 
  zindex =         1;
  idlist =  Object(); //Keeps track of the member element IDs
  shapes =  Object(); //Count of each member shape
  //------------------------------------------------------------
  constructor(id = 'G'+makeid(), idlist = {}, cname = '', color='', active = true) {
    super({'id':id, 'cname':cname });
    this.zindex  = Group.total++;
    this.active  = active;
    
    if (idlist.length) this.idlist = { ...idlist };
    if ( active) Group.stack[Group.stack.length] = this.id;
    if (!active) Group.sleep[Group.sleep.length] = this.id;
    if (color)   color = (color == 'random')? RC() : color;      
  }
  //------------------------------------------------------------
  total() { return Group.total; }
  //------------------------------------------------------------
  enable() {
    if (this.active) return 'already-active';
    this.active = true;
    Group.stack[Group.stack.length] = this.id;
    //TODO: REMOVE FROM SLEEP
  }
  //------------------------------------------------------------
  disable() {
    if (!this.active) return 'already-disabled';
    this.active = false;
    Group.sleep[Group.sleep.length] = this.id;
    //TODO: REMOVE FROM STACK 
  }
  //------------------------------------------------------------
  add(id = 0) {
    if(id) { this.idlist[id] = id; }
    return id;
  }
  //------------------------------------------------------------
  remove(id = 0) {
    if(Object.hasOwn(this.idlist, id)) {
      delete this.idlist[id]; 
    }
    return id;
  }
  //------------------------------------------------------------
  render() {
    let out = '<g ';
    out += 'id="'+this.id+'"'+(this.cname ? ' class="'+this.cname+'" ' : ' ');
    out += 'style="zindex: '+this.zindex+'">\r\n';

    Object.keys(this.members).forEach(shapeID => {
      //shape = shapes[shapeID];
      //out  += '  '+shape.render();
      out  += '   <!-- '+shapeID+' goes here -->\r\n';
    });
    
    out += '</g>\r\n';
    this.html = out;
    return this.html;
  }
}//----------------------------------------------------------------------------

export default Group;