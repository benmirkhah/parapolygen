import G from "../utils/globals.mjs";
import Size        from "./size.mjs";
import Position    from "./position.mjs";
import { Element } from "./element.mjs";
import { makeid  } from "../utils/randoms.mjs";

//-----------------------------------------------------------------------------
class Shape extends Element {
  static total = 0;
  count        = 1;
  n            = 1;  //Current instance number

  constructor({
    id            =G.SVGID+makeid(4),
    count         =                1,
    kind          =        'generic',
    group         =        'builtin',
    position      =     new Position,
    size          =         new Size,
    //Above required, Below optional
    fill          =             null,
    grid          =             null,
    cname         =             null,
    event         =             null,
    filter        =             null,
    stroke        =             null,
    palette       =             null,
    animation     =             null,
    transform     =             null,
  } = {}) {
    super();
    this.count    =            count; 
    this.id       =               id;
    this.kind     =             kind;
    this.size     =             size;
    this.group    =            group;
    this.position =         position;
    if(fill     ) this.fill         =         fill;
    if(grid     ) this.grid         =         grid;
    if(cname    ) this.cname        =        cname;
    if(event    ) this.event        =        event;
    if(filter   ) this.filter       =       filter;
    if(stroke   ) this.stroke       =       stroke;
    if(palette  ) this.palette      =      palette;
    if(animation) this.animation    =    animation;
    if(transform) this.transform    =    transform;
    Shape.total++;
  }
  //------------------------------------------------------------
  total() { return Shape.total; }
  //------------------------------------------------------------
  next() { //iterate every iteratable 
    out = '';
    if (this.n > this.count) return 'done';
    this.n++;
    this.id = makeid()
    out += '#'+this.id+' was number '+this.n;
    out += ' out of '+this.count+' processed with ';
    out += (this.count - this.n)+' remaining';
    return out;
  }
  //------------------------------------------------------------
  render() {
    let open  = '<!-- ';
    let close = ' -->\r\n';
    let out   = '';
    out += this.open+'Generic shape id='+this.id+' / Total shapes:'+Shape.total+this.close;
    return out;
  }
}
//-----------------------------------------------------------------------------
export default Shape;