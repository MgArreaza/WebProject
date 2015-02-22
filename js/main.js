	function muestraMenu () {
	if (document.getElementById("menuI").style.visibility!="hidden") {
		document.getElementById("menuI").style.visibility="hidden"
	} else{
		document.getElementById("menuI").style.visibility="inherit"
	};
}

document.getElementById('miguel').onclick = muestraMenu;
document.getElementById('miguel1').onclick = muestraMenu;


