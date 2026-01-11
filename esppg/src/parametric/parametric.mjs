//Template class for all parametric iterator functions to extend---------------
class Parametric {
  static total = 0;
  static onnC  = 0;  //Count number of on
  static offC  = 0;  //Count number of off

  constructor({ 
    kind  = 'fixed', 
    value = 0,
    param = 0, //Value of delta, scaler, etc. 
    every = 0, //Stay on number (use value)
    altv  = 0, //Alternate value
    skip  = 0, //Stay off number (use altv)
    done  = 0, //Max iteration number
    pname = '' //Name of delta, scaler, etc.
  } = {}) {
    this.kind  = kind;
    this.value = value;
    if(param) this.start = value; //Initial value
    if(param) this.param = param;
    if(pname) this.pname = pname;
    if(every) this.every = every;
    if(altv)  this.altv  =  altv;
    if(skip)  this.skip  =  skip;
    if(done)  this.done  =  done;

    Parametric.total++;
  }
  //------------------------------------------------------------
  total() { return Parametric.total; }
  //------------------------------------------------------------
  val()   { return this.value; }
} 
//-----------------------------------------------------------------------------

export default Parametric;