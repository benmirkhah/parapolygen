import s from "../utils/ppg-sugar.mjs";

const ValFuncTypes = [
  s.surprise       , //zero index to be exculded from surprise pick
  s.random         , //most often used
  s.ongrid         , //second most popular 
  s.fixed          , //third popular
  s.incremental    , //fourth
  s.exponential    , //
  s.logarithmic    , //
  s.functional     , //
  s.groupgrid      , //
  s.alternate      , //
  s.geometric      , //
  s.intervals      , //
  s.selfgrid       , //
  s.sysgrid        , //
];

const fixedOptions = {
   fun:     s.fixed, //Function Type
   par:           0, //Parameter (delta, scaler, angle, etc.) 
};

const randomOptions = {
  fun: s.random,
  min:        0,
  max:      100,
};

const incrementalOptions = {
  fun: s.incremental,
  par:            10, //Delta parameter
  onn:             1, //On interval
  off:             1, //Off interval
  alt:      s.random,
};


//Any value needing constraints or parametric functions------------------------
class Val {
  id  =  'anon';
  fun = 'fixed';
  val =       0;

  constructor(val = 0, id = 'anon', options = defaultRandomOptions) {
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
      case     'fixed': this.val = this.options.par;                                break;
      case    'random': this.val = this.random(this.options.min, this.options.max); break;
      case 'alternate': this.val = this.alternate(this.options);                    break;
    }

    return this.val;
  }

  random(min=0, max=100) {
    return Math.floor(min + (Math.random() * (max - min)));
  }

  increament(options) {

  }
}//----------------------------------------------------------------------------
export default Val;