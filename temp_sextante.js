>> SEXTANTE

Entradas:

1) Ângulo entre o sol e o horizonte (float)

/* Um sextante tem um visor ( uma espécie de mira ) com 2 espelhos dentro, um deles você foca no horizonte e vai movimentando o instrumento até alinhar o horizonte com o Sol. Uma vez alinhados, você tem o ângulo entre o Sol e o Horizonte. */

2) Dia (int)

3) Mês (int)

4) Horas (int)

/* Verificar horas e minutos ao meio dia no horário de Greenwich */

5) Minutos (int)

Variáveis internas:

1) Declinação (float)

2) Tabela (array)

3) Latitude (string)

/* A forma mais fácil de medir a latitude é ao meio dia do equinócio. Se você não sabe, equinócio é o momento onde o Sol viaja exatamente sobre a linha do equador. Não se preocupe, vamos conseguir medir nossa posição em outras datas fora do equinónio.

Primeira coisa que você tem que fazer com ângulo medido é subtrair 90 do número que você coletou.

Vamos supor que você ao meio dia do equinócio aponte seu sextante para o Sul e tire uma medida de 90°. Isso quer dizer que você está no equador, pois 90 – 90 = 0 e latitude 0 é a linha do equador. Se você mediu 80°, quer dizer que você está em +10° ( ou 10° N ), pois 90 – 80 = 10. Em 10° N você está navegando na linha da América central ou Filipinas, depende agora da sua Longitude.

Só posso medir minha posição no Equinócio?

Não, isso não tornaria possível a navegação, temos que nos achar em qualquer dia no ano e aí entram as tabelas de declinação solar. Lembre-se que a Terra gira ao redor do Sol de forma inclinada. Existem tabelas que nos auxiliam a corrigir essa inclinação e calcular corretamente nossa latitude.

Então vamos supor que você mediu 80° no dia 25 de fevereiro. Você consulta a tabela e descobre que nesse dia, a declinação é de -10,25 e fazendo as contas
(90 – 80) – 10,25 = -0,25

Então se no dia 25 de Fevereiro você mediu 80°, você está navegando na linha do Equador na Latitude 0.25 S

	LINK DA TABELA: http://trabalheseusonho.com.br/wp-content/uploads/2016/02/declinacao-solar-791x1024.png
*/

4) Longitude (string)

/* Para calcular a Longitude, você só precisa de um relógio ajustado com o horário de Greenwich.
Primeiro vamos lembrar que o Sol nasce no Leste e se põe no Oeste. Longitude é nada mais que uma medida de tempo.

Cada hora equivale à 15° de Longitude. Vamos supor que você ao meio dia local verifica seu relógio e ele está informando que em Greenwich são 13h. Passou 1 hora em que o Sol passou do Leste para o Oeste, sendo sua longitude 15° W
*/

Saída:

Latitude e Longitude (string) /* (ex: 64º N 60º E) */

Exemplo de cálculo:

/* Você pegará sua bússola e descobrirá onde está o Sul. Aponte seu sextante ao meio dia e faça a medida do ângulo do Sol em relação ao horizonte.

Verifique na tabela qual a declinação do Sol no dia que você fez a medida.

Dia 29 de Julho, medi 45° no sextante. Fazendo as contas:
( 90 – 45 ) + 19 = 64
Onde 90 é o número padrão para subtrairmos, 45 nossa medida e 19 a declinação do Sol. Obtivemos 64° N de Latitude

Ao verificarmos nosso relógio Greenwich ao meio dia, vimos que são 8 da manhã. Então:
( 12 – 8 ) * 15 = 60
Onde 12 é o hora local, 8 é o horario em Greenwich e 15 são os graus percorridos por hora. Obtivemos a posição de Longitude 60° E

Então nossa posição no planeta é: 64°N 60°E
Estariamos em algum lugar da Rússia.
*/


ALGORITMO:

função Sextante(angulo:float, dia:int, mes:int, horas:int, minutos:int) {
	declinacao = comparar (dia & mes) com tabela;
	(90 - angulo) + declinacao = latitudeTemp(float);

	funcao converterParaString(latitudeTemp:float) {
		retorna: latitude(string);
	}

	converterParaString(latitudeTemp);

	longitudeTemp = (12 - horario) * 15

	converterParaString(longitudeTemp);

	retorna: latitude + " " + longitude;

}