$(document).ready(function() {
	$(#numero).keydown(soloNuemros);


	function soloNumeros(evento){
		var caracteres = evento.keyCode;
		if (caracteres == 8 || (caracteres >= 48 && caracteres <= 57)) {
			return true;
		} else {
			return false;
		}
	}
});
