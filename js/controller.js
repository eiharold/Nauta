var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
function inicio () {
	control = setInterval(cronometro,10);
	document.getElementById("inicio").disabled = true;
	document.getElementById("parar").disabled = false;
	document.getElementById("continuar").disabled = true;
	document.getElementById("reinicio").disabled = false;
}
function parar () {
	clearInterval(control);
	document.getElementById("parar").disabled = true;
	document.getElementById("continuar").disabled = false;
}
function reinicio () {
	clearInterval(control);
	centesimas = 0;
	segundos = 0;
	minutos = 0;
	horas = 0;
	Centesimas.innerHTML = ":00";
	Segundos.innerHTML = ":00";
	Minutos.innerHTML = ":00";
	Horas.innerHTML = "00";
	document.getElementById("inicio").disabled = false;
	document.getElementById("parar").disabled = true;
	document.getElementById("continuar").disabled = true;
	document.getElementById("reinicio").disabled = true;
}

function cronometro () {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
		Centesimas.innerHTML = ":"+centesimas;
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { segundos = "0"+segundos }
		Segundos.innerHTML = ":"+segundos;
	}
	if (segundos == 59) {
		segundos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0) ) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
		Minutos.innerHTML = ":"+minutos;
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
		horas ++;
		if (horas < 10) { horas = "0"+horas }
		Horas.innerHTML = horas;
	}
}

//TABELA DE DECLINAÇÃO SOLAR PARA O SEXTANTE
var janeiro = [-23.09,-23.02,-22.94,-22.86,-22.76];

//SEXTANTE

function sextante(angulo, dia, mes, horas, minutos) {

	if (mes == "janeiro") {
		for (i = 1; i < 32; i++) { 
		    if (dia == i) {
				var declinacao = janeiro[i-1];
			}
		}
	}

	var latitudeTemp = (90 - angulo) + declinacao;

	if (latitudeTemp > 0) {
		var eixoY = "N";
	}

	else {
		var eixoY = "S"
	}

	var latitude = latitudeTemp.toString() + " " + eixoY;

	var longitudeTemp = (12 - horas) * 15

	if (longitudeTemp > 0) {
		var eixoX = "L";
	}
	else {
		var eixoX = "O"
	}

	var longitude = longitudeTemp.toString() + " " + eixoX;

	var resultado = (latitude + " " + longitude);
	console.log(resultado);
	return resultado;

};


/* $( document ).ready(function() {
    sextante(45,2,"janeiro",11,0);
});
*/