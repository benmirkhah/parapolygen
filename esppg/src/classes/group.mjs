import { Element } from "./element.mjs";
import { makeid } from "../helpers/ppg-random.mjs";

//A group of one or more shapes------------------------------------------------
class Group extends Element{
  static count =   1;
  zindex  =        1;
  members = Object();
  //------------------------------------------------------------
  constructor(id = 'G'+makeid(), members = {}, cname = '') {
    super({'id':id, 'cname':cname });
    this.zindex  = Group.count++;
    if (members.length) { 
      this.members = { ...members };
    }
  }
  //------------------------------------------------------------
  count() { return Group.count; }
  //------------------------------------------------------------
  add(id = 0) {
    if(id) { this.members[id] = id; }
    return id;
  }
  //------------------------------------------------------------
  remove(id = 0) {
    if(Object.hasOwn(this.members, id)) {
      delete this.members[id]; 
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