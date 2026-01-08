import { Element } from "./element.mjs";

//Best part of SVG is the filter-----------------------------------------------
class Filter extends Element {
  static count =  0; //Number of filters
  static stack = []; //Active filters
  static sleep = []; //Inactive ones
  //FOR FUTURE USE
  //unitf = 'objectBoundingBox';
  //unitp = 'userSpaceOnUse';
  //color = 'sRGB'; 

  constructor (id='', html='', active=true) {
    super({'id':id});
    if (id) {
      this.id     =     id;
      this.html   =   html;
      this.active = active;
      Filter.count++;
      if (active) {
        Filter.stack[Filter.stack.length] = this.id;
      } else {
        Filter.sleep[Filter.sleep.length] = this.id;
      }
    } else { //Anonymous filters can be created to access stack/count methods
      this.id = 'anonymous';
    }
  }
  //------------------------------------------------------------
  count() { return Filter.count; }
  //------------------------------------------------------------
  stack() { return Filter.stack; }
  //------------------------------------------------------------
  sleep() { return Filter.sleep; }
  //------------------------------------------------------------
  render() { return this.html; }
}//----------------------------------------------------------------------------

export default Filter;