import RI from "../utils/randoms.mjs";
//Syntax Sugar------------------------
const fixed          = 'fixed'       ;
const group          = 'group'       ;
const random         = 'random'      ;
const system         = 'system'      ;
const surprise       = 'surprise'    ;
const geometric      = 'geometric'   ;
const parabolic      = 'parabolic'   ;
const functional     = 'functional'  ;
const exponential    = 'exponential' ;
const incremental    = 'incremental' ;
const logarithmic    = 'logarithmic' ;

const funcionTypes = [
  surprise         , //Zero index to be exculded from surprise pick iteseld
  functional       , //User defined also needs to be excluded from surprise
  random           , //Most often used
  system           , //Default system grid 
  group            , //Third popular, group grid
  incremental      , //Parametric #1
  exponential      , //Parametric #2
  logarithmic      , //Parametric #3
  geometric        , //Parametric #4
  parabolic        , //Parametric #5
];

//Template class for all parametric iterator functions to extend---------------
class Parametric {
  static total = 0;
  kind = fixed; //Default
  onnC = 0; //Count number of on (value used)
  offC = 0; //Count number of off (altv used)
  n    = 0; //Current iteration

  constructor({
    kind  = fixed, //Default
    value = 0, 
    id    = '',
    pname = '', //Name of delta, scaler, etc.
    param = 0, //Value of delta, scaler, etc. 
    every = 0, //Stay on number (use value)
    mode  = 0, //Starting mode (0 uses value, 1 uses altv)
    altv  = 0, //Alternate value (Fixed if altp is 0)
    altp  = 0, //Alternate param
    skip  = 0, //Stay off number (use altv)
    done  = 0, //Max iteration number
  } = {}) {
    this.value     = value;
    this.kind      =  kind;
    if(id)    this.id    =    id;
    if(param) this.param = param;
    if(pname) this.pname = pname;
    if(every) this.every = every;
    if(mode ) this.mode  =  mode;
    if(altv ) this.altv  =  altv;
    if(altp ) this.altp  =  altp;
    if(skip ) this.skip  =  skip;
    if(done ) this.done  =  done;
    if(param) this.start = value; //Initial value
    if(kind === surprise) this.kind = funcionTypes[RI(2,9)]; 

    Parametric.total++;
  }
  //------------------------------------------------------------
  total() { return Parametric.total; }
  //------------------------------------------------------------
  val()   { return this.value; }
  //------------------------------------------------------------
  next()  {
    //if (typeof(this.kind) === functional) {
    //  this.value = this.param(this.value, this.options);
    //  return this.value;
    //}
  
    switch (this.kind) {
      case      fixed: this.value = this.options.value;                            break;
      case     random: this.value = this.rand(this.options.min, this.options.max); break;
      default: this.value = this.options.value;
    }

    return this.value;
  }
  //------------------------------------------------------------
  rand(min=0, max=100) {
    return Math.floor(min + (Math.random() * (max - min)));
  }
} 
//-----------------------------------------------------------------------------

export default Parametric;