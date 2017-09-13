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



var janeiro = [-23.08,	-23.00,	-22.91,	-22.82,	-22.72,	-22.61,	-22.49,	-22.37,	-22.24,	-22.10,	-21.95,	-21.80,	-21.64,	-21.47,	-21.30,	-21.12,	-20.93,	-20.74,	-20.54,	-20.33,	-20.12,	-19.90,	-19.67,	-19.44,	-19.20,	-18.96,	-18.71,	-18.46,	-18.19,	-17.93,	-17.66];
var fevereiro = [-17.38,	-17.10,	-16.81,	-16.52,	-16.22,	-15.92,	-15.62,	-15.31,	-14.99,	-14.67,	-14.35,	-14.02,	-13.69,	-13.36,	-13.02,	-12.68,	-12.33,	-11.99,	-11.63,	-11.28,	-10.92,	-10.56,	-10.20,	-9.83,	-9.47,	-9.09,	-8.72,	-8.35];
var marco = [-7.97,	-7.59,	-7.21,	-6.83,	-6.44,	-6.06,	-5.67,	-5.28,	-4.89,	-4.50,	-4.11,	-3.72,	-3.33,	-2.93,	-2.54,	-2.14,	-1.75,	-1.35,	-0.96,	-0.56,	-0.17,	0.23,	0.62,	1.02,	1.41,	1.80,	2.20,	2.59,	2.98,	3.37,	3.76];
var abril = [4.15,	4.53,	4.92,	5.30,	5.69,	6.07,	6.45,	6.82,	7.20,	7.57,	7.94,	8.31,	8.68,	9.04,	9.40,	9.76,	10.12,	10.47,	10.82,	11.17,	11.51,	11.85,	12.19,	12.53,	12.86,	13.19,	13.51,	13.83,	14.15,	14.46];
var maio = [14.77,	15.07,	15.37,	15.67,	15.96,	16.25,	16.53,	16.81,	17.08,	17.35,	17.62,	17.88,	18.13,	18.38,	18.62,	18.86,	19.10,	19.32,	19.55,	19.76,	19.97,	20.18,	20.38,	20.57,	20.76,	20.95,	21.12,	21.29,	21.46,	21.61,	21.77];
var junho = [21.91,	22.05,	22.18,	22.31,	22.43,	22.54,	22.65,	22.75,	22.84,	22.93,	23.01,	23.08,	23.15,	23.21,	23.26,	23.31,	23.35,	23.38,	23.40,	23.42,	23.43,	23.44,	23.44,	23.43,	23.41,	23.39,	23.36,	23.32,	23.28,	23.23];
var julho = [23.18,	23.11,	23.04,	22.96,	22.88,	22.79,	22.69,	22.59,	22.48,	22.36,	22.24,	22.11,	21.98,	21.84,	21.69,	21.53,	21.37,	21.21,	21.04,	20.86,	20.67,	20.48,	20.29,	20.09,	19.88,	19.67,	19.45,	19.23,	19.00,	18.76,	18.53];
var agosto = [18.28,	18.03,	17.78,	17.52,	17.26,	16.99,	16.72,	16.44,	16.16,	15.87,	15.58,	15.29,	14.99,	14.69,	14.38,	14.07,	13.76,	13.44,	13.12,	12.79,	12.47,	12.13,	11.80,	11.46,	11.12,	10.78,	10.43,	10.08,	9.73,	9.38,	9.02];
var setembro = [8.66,	8.30,	7.94,	7.57,	7.20,	6.83,	6.46,	6.09,	5.71,	5.33,	4.95,	4.57,	4.19,	3.81,	3.43,	3.04,	2.66,	2.27,	1.88,	1.50,	1.11,	0.72,	0.33,	-0.06,	-0.45,	-0.84,	-1.23,	-1.62,	-2.01,	-2.40];	
var outubro = [-2.79,	-3.18,	-3.57,	-3.95,	-4.34,	-4.73,	-5.11,	-5.50,	-5.88,	-6.26,	-6.64,	-7.02,	-7.39,	-7.77,	-8.14,	-8.51,	-8.88,	-9.25,	-9.62,	-9.98,	-10.34,	-10.70,	-11.05,	-11.41,	-11.75,	-12.10,	-12.44,	-12.78,	-13.12,	-13.46,	-13.79];
var novembro = [-14.11,	-14.43,	-14.75,	-15.07,	-15.38,	-15.68,	-15.99,	-16.28,	-16.58,	-16.86,	-17.15,	-17.43,	-17.70,	-17.97,	-18.23,	-18.49,	-18.74,	-18.99,	-19.23,	-19.47,	-19.70,	-19.92,	-20.14,	-20.35,	-20.55,	-20.75,	-20.94,	-21.13,	-21.31,	-21.48];
var dezembro = [-21.65,	-21.81,	-21.96,	-22.10,	-22.24,	-22.37,	-22.49,	-22.61,	-22.72,	-22.82,	-22.91,	-23.00,	-23.08,	-23.15,	-23.21,	-23.27,	-23.32,	-23.36,	-23.39,	-23.41,	-23.43,	-23.44,	-23.44,	-23.43,	-23.42,	-23.40,	-23.37,	-23.33,	-23.28,	-23.23,	-23.17];


//SEXTANTE

function sextante(angulo, dia, mes, horas, minutos) {

	var matrizmes = [];

		   if (mes == "janeiro") {	
		matrizmes = janeiro;
	} else if (mes == "fevereiro") {	
		matrizmes = fevereiro;
	} else if (mes == "marco") {	
		matrizmes = marco;
	} else if (mes == "abril") {	
		matrizmes = abril;
	} else if (mes == "maio") {	
		matrizmes = maio;
	}  else if (mes == "junho") {	
		matrizmes = junho;
	}  else if (mes == "julho") {	
		matrizmes = julho;
	}  else if (mes == "agosto") {	
		matrizmes = agosto;
	}  else if (mes == "setembro") {	
		matrizmes = setembro;
	}  else if (mes == "outubro") {	
		matrizmes = outubro;
	}  else if (mes == "novembro") {	
		matrizmes = novembro;
	}  else if (mes == "dezembro") {	
		matrizmes = dezembro;
	}

	
	for (i = 1; i < 32; i++) { 
		    if (dia == i) {
				var declinacao = matrizmes[i-1];
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