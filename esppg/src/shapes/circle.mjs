import { isObj } from "../utils/typeutils.mjs";
import Shape     from "../classes/shape.mjs";

class Circle extends Shape {
  static total = 0;
  count        = 1;
  n            = 1;  //Current instance number

  constructor( options = {} ) {
    options.kind  = 'circle';
    super(options);
    Circle.total++;
  }
  //-------------------------------------------------------------
  total()  { return Circle.total; }
  //-------------------------------------------------------------
  render() {
    let open  = '<circle ';
    let close = '</circle>\r\n';
    let r   = isObj(this.size.r    ) ? this.size.r.val()     : this.size.r;
    let cx  = isObj(this.position.x) ? this.position.x.val() : this.position.x;
    let cy  = isObj(this.position.y) ? this.position.y.val() : this.position.y;
    let out = open;
    out += 'id="'+this.id+'" ';
    out += ` r="${r }" `;
    out += `cx="${cx}" `;
    out += `cy="${cy}" `;
    out += isObj(this.stroke)    ? this.stroke.render()    : '' ;
    out += isObj(this.fill)      ? this.fill.render()      : '' ;
    out += isObj(this.filter)    ? this.filter.render()    : '' ;
    out += isObj(this.transform) ? this.transform.render() : '' ;
    out += isObj(this.event)     ? this.event.render()     : '' ;
    out += '>\r\n';
    out += isObj(this.animation) ? this.animation.render() : '' ;
    out += close;
    this.html = out; //cache the current render
    return this.html;
  }
  //------------------------------------------------------------
  redraw() { return this.html ? this.html : this.render(); }
}
//-----------------------------------------------------------------------------

export default Circle;