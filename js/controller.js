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
//Valores da declinação solar, em graus, calculadas segundo Spencer (1971), citado por Vianello e Alves (1991).
//https://www.google.com.br/search?q=tabela+declinacao+solar&rlz=1C1ASRM_enBR738BR738&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjzhfTKj47WAhUENiYKHfVIC3EQ_AUICigB&biw=1920&bih=974#imgrc=7sVxJ5Lja99n3M:

var janeiro = [-23.06,-22.98,-22.89,-22.8,-22.7,-22.59,-22.47,-22.34,-22.21,-22.07,-21.93,-21.77,-21.61,-21.45,-21.27,-21.09,-20.90,-20.71,-20.51,-20.30,-20.09,-19.87,-19.64,-19.41,-19.17,-18.92,-18.67,-18.42,-18.15,-17.89,-17.61];
var fevereiro = [-17.34,-17.05,-16.76,-16.47,-16.17,-15.87,-15.56,-15.25,-14.93,-14.61,-14.29,-13.96,-13.63,-13.29,-12.95,-12.61,-12.26,-11.91,-11.56,-11.20,-10.84,-10.48,-10.12,-9.75,-9.38,-9.01,-8.63,-8.26];
var marco = [-23.06,-22.98,-22.89,-22.8,-22.7,-22.59,-22.47,-22.34,-22.21,-22.07,-21.93,-21.77,-21.61,-21.45,-21.27,-21.09,-20.90,-20.71,-20.51,-20.30,-20.09,-19.87,-19.64,-19.41,-19.17,-18.92,-18.67,-18.42,-18.15,-17.89,-17.61];
var abril = [-23.06,-22.98,-22.89,-22.8,-22.7,-22.59,-22.47,-22.34,-22.21,-22.07,-21.93,-21.77,-21.61,-21.45,-21.27,-21.09,-20.90,-20.71,-20.51,-20.30,-20.09,-19.87,-19.64,-19.41,-19.17,-18.92,-18.67,-18.42,-18.15,-17.89,-17.61];
var maio = [-23.06,-22.98,-22.89,-22.8,-22.7,-22.59,-22.47,-22.34,-22.21,-22.07,-21.93,-21.77,-21.61,-21.45,-21.27,-21.09,-20.90,-20.71,-20.51,-20.30,-20.09,-19.87,-19.64,-19.41,-19.17,-18.92,-18.67,-18.42,-18.15,-17.89,-17.61];
var junho = [-23.06,-22.98,-22.89,-22.8,-22.7,-22.59,-22.47,-22.34,-22.21,-22.07,-21.93,-21.77,-21.61,-21.45,-21.27,-21.09,-20.90,-20.71,-20.51,-20.30,-20.09,-19.87,-19.64,-19.41,-19.17,-18.92,-18.67,-18.42,-18.15,-17.89,-17.61];
var julho = [-23.06,-22.98,-22.89,-22.8,-22.7,-22.59,-22.47,-22.34,-22.21,-22.07,-21.93,-21.77,-21.61,-21.45,-21.27,-21.09,-20.90,-20.71,-20.51,-20.30,-20.09,-19.87,-19.64,-19.41,-19.17,-18.92,-18.67,-18.42,-18.15,-17.89,-17.61];
var agosto = [-23.06,-22.98,-22.89,-22.8,-22.7,-22.59,-22.47,-22.34,-22.21,-22.07,-21.93,-21.77,-21.61,-21.45,-21.27,-21.09,-20.90,-20.71,-20.51,-20.30,-20.09,-19.87,-19.64,-19.41,-19.17,-18.92,-18.67,-18.42,-18.15,-17.89,-17.61];
var setembro = [-23.06,-22.98,-22.89,-22.8,-22.7,-22.59,-22.47,-22.34,-22.21,-22.07,-21.93,-21.77,-21.61,-21.45,-21.27,-21.09,-20.90,-20.71,-20.51,-20.30,-20.09,-19.87,-19.64,-19.41,-19.17,-18.92,-18.67,-18.42,-18.15,-17.89,-17.61];
var outubro = [-23.06,-22.98,-22.89,-22.8,-22.7,-22.59,-22.47,-22.34,-22.21,-22.07,-21.93,-21.77,-21.61,-21.45,-21.27,-21.09,-20.90,-20.71,-20.51,-20.30,-20.09,-19.87,-19.64,-19.41,-19.17,-18.92,-18.67,-18.42,-18.15,-17.89,-17.61];
var novembro = [-23.06,-22.98,-22.89,-22.8,-22.7,-22.59,-22.47,-22.34,-22.21,-22.07,-21.93,-21.77,-21.61,-21.45,-21.27,-21.09,-20.90,-20.71,-20.51,-20.30,-20.09,-19.87,-19.64,-19.41,-19.17,-18.92,-18.67,-18.42,-18.15,-17.89,-17.61];
var dezembro = [-23.06,-22.98,-22.89,-22.8,-22.7,-22.59,-22.47,-22.34,-22.21,-22.07,-21.93,-21.77,-21.61,-21.45,-21.27,-21.09,-20.90,-20.71,-20.51,-20.30,-20.09,-19.87,-19.64,-19.41,-19.17,-18.92,-18.67,-18.42,-18.15,-17.89,-17.61];

//SEXTANTE

function sextante(angulo, dia, mes, horas, minutos) {

	if (mes == "janeiro") {
		for (i = 1; i < 32; i++) { 
		    if (dia == i) {
				var declinacao = janeiro[i-1];
			}
		}
	}

	if (mes == "fevereiro") {
			for (i = 1; i < 32; i++) { 
			    if (dia == i) {
					var declinacao = fevereiro[i-1];
				}
			}
		}

	if (mes == "marco") {
			for (i = 1; i < 32; i++) { 
			    if (dia == i) {
					var declinacao = marco[i-1];
				}
			}
		}

	if (mes == "abril") {
			for (i = 1; i < 32; i++) { 
			    if (dia == i) {
					var declinacao = abril[i-1];
				}
			}
		}

	if (mes == "maio") {
			for (i = 1; i < 32; i++) { 
			    if (dia == i) {
					var declinacao = maio[i-1];
				}
			}
		}

	if (mes == "junho") {
			for (i = 1; i < 32; i++) { 
			    if (dia == i) {
					var declinacao = junho[i-1];
				}
			}
		}

	if (mes == "julho") {
			for (i = 1; i < 32; i++) { 
			    if (dia == i) {
					var declinacao = julho[i-1];
				}
			}
		}

	if (mes == "agosto") {
			for (i = 1; i < 32; i++) { 
			    if (dia == i) {
					var declinacao = agosto[i-1];
				}
			}
		}

	if (mes == "setembro") {
			for (i = 1; i < 32; i++) { 
			    if (dia == i) {
					var declinacao = setembro[i-1];
				}
			}
		}

	if (mes == "outubro") {
			for (i = 1; i < 32; i++) { 
			    if (dia == i) {
					var declinacao = outubro[i-1];
				}
			}
		}

	if (mes == "novembro") {
			for (i = 1; i < 32; i++) { 
			    if (dia == i) {
					var declinacao = novembro[i-1];
				}
			}
		}

	if (mes == "dezembro") {
			for (i = 1; i < 32; i++) { 
			    if (dia == i) {
					var declinacao = dezembro[i-1];
				}
			}
		}

	var latitudeTemp = ((90 - angulo) + declinacao).toFixed(2);

	if (latitudeTemp > 0) {
		var eixoY = "N";
	}

	else {
		var eixoY = "S"
	}

	var latitude = latitudeTemp.toString() + " " + eixoY;

	var longitudeTemp = ((12 - horas) * 15).toFixed(2);

	if (longitudeTemp > 0) {
		var eixoX = "L";
	}
	else {
		var eixoX = "O"
	}

	var longitude = longitudeTemp.toString() + " " + eixoX;

	var resultado = (latitude + " " + longitude);
	console.log(resultado);

	if (dia < 1 || dia > 31) {
		resultado = "Insira um dia válido!";
	} else if (horas < 0 || horas > 24 || horas == "") {
		resultado = "Insira uma hora válida!";
	} else if (minutos < 0 || minutos > 60 || minutos == "") {
		resultado = "Insira minutos válidos!";
	} else if (angulo < -360 || angulo > 360 || angulo == "") {
		resultado = "Insira um ângulo válido!";
	} else if (mes == "" || mes == "Mês") {
		resultado = "Insira um mês válido!";
	}

	document.getElementById("result-calc").innerHTML = resultado;

};


/* $( document ).ready(function() {
    sextante(45,2,"janeiro",11,0);
});
*/