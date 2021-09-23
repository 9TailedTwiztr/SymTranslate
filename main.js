function tocodebutton() {
  var to_code = document.getElementById("tocode").value;
  var _tc = to_code.toString();

	var engstr = _tc;
	var newengstr = engstr.replace(/a/gi, '=').replace(/b/gi, '!').replace(/c/gi, '"').replace(/d/gi, '£').replace(/e/gi, '%').replace(/f/gi, '&').replace(/g/gi, '-').replace(/h/gi, '¦').replace(/i/gi, ':').replace(/j/gi, ';').replace(/k/gi, '¿').replace(/l/gi, '@').replace(/m/gi, '#').replace(/n/gi, '~').replace(/o/gi, ',').replace(/p/gi, '°').replace(/q/gi, '¬').replace(/r/gi, '•').replace(/s/gi, "'").replace(/t/gi, '±').replace(/u/gi, '‰').replace(/v/gi, '¢').replace(/w/gi, '¥').replace(/x/gi, 'ƒ').replace(/y/gi, '¤').replace(/z/gi, '¡')

  document.getElementById('tocodebutton').textContent = newengstr;
}

function toengbutton() {
  var to_eng = document.getElementById("toeng").value;
  var _te = to_eng.toString();

	var codestr = _te;
	var newcodestr = codestr.replace(/=/g, 'a').replace(/!/g, 'b').replace(/"/g, 'c').replace(/£/g, 'd').replace(/%/g, 'e').replace(/&/g, 'f').replace(/-/g, 'g').replace(/¦/g, 'h').replace(/:/g, 'i').replace(/;/g, 'j').replace(/¿/g, 'k').replace(/@/g, 'l').replace(/#/g, 'm').replace(/~/g, 'n').replace(/,/g, 'o').replace(/°/g, 'p').replace(/¬/g, 'q').replace(/•/g, 'r').replace(/'/g, "s").replace(/±/g, 't').replace(/‰/g, 'u').replace(/¢/g, 'v').replace(/¥/g, 'w').replace(/ƒ/g, 'x').replace(/¤/g, 'y').replace(/¡/g, 'z')

  document.getElementById('toengbutton').textContent = newcodestr;
}
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

