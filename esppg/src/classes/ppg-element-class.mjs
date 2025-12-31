//Generic element template to build other elements from------------------------
export class Element {
  static ecount = 0; //Number of instances

  constructor ({
    id    =  '',
    cname =  '',
    html  =  '',
  } = {}) {
    this.id    =    id;
    this.cname = cname;
    this.html  =  html;
    Element.ecount++;
  }
  //------------------------------------------------------------
  count() {
    return Element.ecount;
  }
}//----------------------------------------------------------------------------