//Syntax Sugar
const self           = 'self'        ;
const fixed          = 'fixed'       ;
const group          = 'group'       ;
const random         = 'random'      ;
const system         = 'system'      ;
const interval       = 'interval'    ;
const surprise       = 'surprise'    ;
const alternate      = 'alternate'   ;
const geometric      = 'geometric'   ;
const functional     = 'functional'  ;
const exponential    = 'exponential' ;
const incremental    = 'incremental' ;
const logarithmic    = 'logarithmic' ;

const FuncionTypes = [
  surprise         , //zero index to be exculded from surprise pick
  random           , //most often used
  system           , //second most popular 
  group            , //third popular
  fixed            , //fourth popular
  incremental      ,
  exponential      ,
  logarithmic      ,
  functional       ,
  alternate        ,
  geometric        ,
  interval         ,
  self             ,
];

const fixedOptions = {
   fun: fixed, //Function Type
   par:     0, //Parameter (delta, scaler, angle, etc.) 
};

const randomOptions = {
  fun: random,
  min:      0,
  max:    100,
};

const incrementalOptions = {
  fun: incremental,
  par:          10, //Delta parameter
  onn:           1, //On interval
  off:           1, //Off interval
  alt:      random,
};


//Any value needing constraints or parametric functions------------------------
class Value {
  id  =  'anon';
  fun =   fixed;
  val =       0;

  constructor(val = 0, id = 'anon', options = randomOptions) {
    this.id       = id;
    this.val      = val;
    this.options  = options;
    this.fun      = options.fun;
  }
  
  next() {
    if (typeof(this.fun) == 'function') {
       this.val = this.fun(this.val, this.options);
       return this.val;
    }

    switch (this.fun) {
      case      fixed: this.val = this.options.par;                                break;
      case     random: this.val = this.random(this.options.min, this.options.max); break;
      case  alternate: this.val = this.alternate(this.options);                    break;
    }

    return this.val;
  }

  random(min=0, max=100) {
    return Math.floor(min + (Math.random() * (max - min)));
  }

  increament(options) {

  }
}//----------------------------------------------------------------------------
export default Value;