//Template class for all the parametric functions to extend--------------------
class Parametric {
  static count = 0;

  constructor({ 
    kind  = 'fixed', 
    value =       0,
  } = {}) {
    this.kind = kind;
    this.val  = value;
    Parametric.count++;
  }
  //------------------------------------------------------------
  count() { return Parametric.count; }
  //------------------------------------------------------------
} 
//-----------------------------------------------------------------------------

export default Parametric;