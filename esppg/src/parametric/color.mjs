import RI          from "../utils/random.mjs";
import RC          from "../utils/colors.mjs";
import { hex2rgb } from "../utils/colors.mjs";
import { rgb2hex } from "../utils/colors.mjs";

//Color in either RGBA or HSLA format------------------------------------------
class Color {
  static total = 0;
   
  constructor({
    id   = '', 
    hex  = '',
    pal  = 'random',
    kind = 'RGBA', //or HSLA
    R    = 0,
    G    = 0,
    B    = 0,
    A    = 0,
    H    = 0,
    S    = 0,
    L    = 0,
  } = {}) {
    Color.total++;
    this.pal = pal;
    
    if (kind.toUpperCase == 'HSLA') { //Not parametric 
      this.kind = 'HSLA';
      this.H    = H ? H : RI(1,361);
      this.S    = S ? S : RI(1,101);
      this.L    = L ? L : RI(1,101);
      this.A    = A ? A : RI(1,101);
      this.hsla = 'hsla('+this.H+','+this.S+'%,'+this.L+'%,'+this.A/255+')';
    } else {
      this.kind = 'RGBA';
      let rgb   = hex2rgb((hex ? hex : RC(pal)));  
      this.R    = hex ? rgb.R : (R ? R : RI(1,256));
      this.G    = hex ? rgb.G : (G ? G : RI(1,256));
      this.B    = hex ? rgb.B : (B ? B : RI(1,256));
      this.A    = hex ? rgb.A : (A ? A : RI(1,256));
      this.hex  = hex ? hex : rgb2hex({R:this.R, G:this.G, B:this.B, A:this.A});      
    }

    if(id) this.id = id;
  }
  //------------------------------------------------------------
  count() { return Color.total; }
  //------------------------------------------------------------
  next() {
    out = '';
    return out;
  }
  //------------------------------------------------------------
  //Step function example:
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Iterator#examples

  steps(steps=10, goal=RC()) {
    let out = [this.hex]; //index zero
    let start = hex2rgb(this.hex);
    let end   = hex2rgb(goal);

    //Determine the delta value for each step
    let dR = RI(((end.R - start.R) / steps), 1);
    let dG = RI(((end.G - start.G) / steps), 1);
    let dB = RI(((end.B - start.B) / steps), 1);
    let dA = RI(((end.A - start.A) / steps), 1);
   
    for (let s=1; s<steps; s++) {
      start.R += dR;
      start.G += dG;
      start.B += dB;
      start.A += dA;
      out[s] = rgb2hex({R:start.R, G:start.G, B:start.B, A:start.A});
    }
    out[steps] = goal;
    return out;
  }
}

export default Color;