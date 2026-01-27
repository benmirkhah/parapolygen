import { Element }     from "./element.mjs";
import { randomPoint } from "../utils/randoms.mjs";
import RC              from "../utils/colors.mjs";
import G               from "../utils/globals.mjs";

export let allGradients = {};

//Radial or Linear gradient elements-------------------------------------------
class Gradient extends Element {
  static total = 1;
  colors = ['#000000']; //index zero
  kind   = '';
  id     = '';
  //------------------------------------------------------------
  constructor(kind='', colorCount=3, palette='') {
    super();
    Gradient.total++;
    for(let c=1; c<=colorCount; c++) { 
      this.colors[c] = RC(palette);
    }
    //if gridient type not provided in args flip a coin and pick one randomly
    this.kind = kind ? kind : ( (Math.random() < 0.5) ? 'linear' : 'radial' );
    this.id   = ((this.kind=='radial') ? 'RG' : 'LG') + Gradient.total;
    this.id   = G.SVGID + this.id;
    allGradients[this.id] =  this;
  }
  //------------------------------------------------------------
  total() { return Gradient.total; }
  //------------------------------------------------------------
  id() { return this.id; }
  //------------------------------------------------------------
  render() {
    const  p1 = randomPoint();
    const  p2 = randomPoint();
    const  I  = '    '; //Indent
    let open  = '  ';
    let close = '  ';
    let nudge = Math.floor(100/(this.colors.length - 1));
    
    if (thiskind == 'radial') {
      open  += `<radialGradient id="${id}" gradientUnits="userSpaceOnUse" cx="${p1.x}" cy="${p1.y}" r="${p2.y}">\r\n`;
      close += '</radialGradient>\r\n';
    } else {
      open  += `<linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}">\r\n`;
      close += '</linearGradient>\r\n';
    }
    
    let grady = '';
    grady    += I+`<stop offset="0.00"`+` stop-color="var(--c${randomInt(1, colors)})"/>\r\n`;
    for (let i=2; i < c; i++) {  let pp = nudge * (i-1); //2 digit percentage
      grady  += I+`<stop offset="0.${pp}" stop-color="var(--c${randomInt(1, colors)})"/>\r\n`;
    } grady  += I+`<stop offset="1.00"`+` stop-color="var(--c${randomInt(1, colors)})"/>\r\n`;
    
    this.html = open + grady + close;

    return this.html;
  }
}
//--------------------------------------------------------------

export default Gradient