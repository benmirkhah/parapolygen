//Generates random colors as CSS variables------------------------------------- 
function colorVars(pal = [ '#00000000' ]) {
  let extra  = '';
  let output = '  --c0:  #00000000; \r\n';

  for (let i=1; i <= colors; i++) {
    pal[i] = randomColor();
    extra  = ((i < 10)) ? ' ' : '';
    output += '  --c' + i + ': '+extra+ pal[i] + ((i % 5) ? ';' : ';\r\n');
  }

  output += '  --c-count: '+colors+';\r\n';
  return output;
}//----------------------------------------------------------------------------

//Adds unique CSS ID-----------------------------------------------------------
function svgVars(svgid) {
  let out = '';
  out += '#'+svgid+' {\r\n';
  out += colorVars();
  out += '}\r\n';
  return out;
}//----------------------------------------------------------------------------

//Adds the <style> element-----------------------------------------------------
function svgStyle(svgid) {
  let out = '';
  out += '<style>\r\n';
  out += '* { transform-box: fill-box; } text { font-size:0.65em; }\r\n';
  out += svgVars(svgid);
  out += '</style>\r\n';
  return out;
}//----------------------------------------------------------------------------

export default svgStyle