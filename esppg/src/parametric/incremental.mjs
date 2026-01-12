import Parametric from "./parametric.mjs";
import { toggle } from "../utils/randoms.mjs";

class Incremental extends Parametric {
  static total = 0; //Final item count
  static count = 0; //Current item number
  
  constructor(options) {
    options.value = options.value ?? 10;
    options.param = options.param ?? 10;
    options.every = options.every ??  1;
    options.skip  = options.skip  ??  1;
    options.altv  = options.altv  ?? options.value;
    options.kind  = 'incremental';
    options.pname = 'delta';
    super(options);
    Incremental.total++;
  }
  //------------------------------------------------------------
  total() { return Incremental.total; }
  //------------------------------------------------------------
  reset() { //Reset counters and value to starting point
    Incremental.count = 0;
    Incremental.onnC  = 0;
    Incremental.offC  = 0;
    this.value=this.start; 
    return this.start; 
  }
  //------------------------------------------------------------
  next() {
    let swap = 0; //Toggle not needed
    let out  = new Object(null);

    if(this.done) { //Done value was provided in options 
      out['done'] = (Incremental.count < this.done) ? false : true;
      if (out['done']) {//Don't waste time when done
        out['value'] = this.reset();
        return out;
      }
    } else { //Never ending iterator was requested in options
      out['done'] = false;
    }
    
    if (this.every < 2) { //Don't bother calculating every/skip/mode 
      Incremental.count++;
      out['value'] = this.value;
      this.value  += this.param;
      return out;
    }
        
    if (this.mode) { //ON (return value)
      Incremental.onnC++;
      this.value  += Incremental.count ? this.param : 0;
      out['value'] = this.value;
      swap = Incremental.onnC % this.every;
      this.mode = swap ? this.mode : toggle(this.mode); //Toggle when mod result is 0
      Incremental.onnC = swap ? Incremental.onnC : 0;   //Reset onn counter on toggle
    } else {        //OFF (return altv)
      Incremental.offC++;
      out['value'] = this.altv;
      swap = Incremental.offC % this.skip;
      this.mode = swap ? this.mode : toggle(this.mode); //Toggle when mod results is 0
      Incremental.offC = swap ? Incremental.offC : 0;   //Reset off counter on toggle  
    }
    
    Incremental.count++;

    return out;
  }
}
//-----------------------------------------------------------------------------

export default Incremental