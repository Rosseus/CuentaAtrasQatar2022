// Creación de Div's
let contenedor = document.querySelector('.contenedor');
let m = document.createElement('div');
let d = document.createElement('div');
let h = document.createElement('div');
let min = document.createElement('div');
let s = document.createElement('div');
contenedor.appendChild(m).className = 'meses';
contenedor.appendChild(d).className = 'dias';
contenedor.appendChild(h).className = 'horas';
contenedor.appendChild(min).className = 'minutos';
contenedor.appendChild(s).className = 'segundos';
let dias = document.querySelector('.dias');
let horas = document.querySelector('.horas');
let minutos = document.querySelector('.minutos');
let segundos = document.querySelector('.segundos');
//


function tiempoRestante (){
	const da = new Date()
let fecha = new Date("November 21, 2022 00:00:00");
let fechaMs = fecha.getTime();
let horaActual = Date.now();
const f = fechaMs - horaActual;
const unDia = 24 * 60 * 60 * 1000;
const unaHora = 60 * 60 * 1000;
const unMinuto = 60 * 1000;
let diaAhora = da.getDay();
let diaFecha = fecha.getDay();
let diasRestante = f / unDia ;
diasRestante = Math.floor(diasRestante);
let horaRestante = Math.floor((f % unDia) / unaHora);
let minutosRestante = Math.floor((f % unaHora) / unMinuto);
let segundosRestante = Math.floor((f % unMinuto) / 1000);


	dias.innerHTML = 'Días: ' + diasRestante
	segundos.innerHTML = 'Segundos: ' + segundosRestante
	horas.innerHTML ='Horas: ' + horaRestante
	minutos.innerHTML = 'Minutos: ' + minutosRestante
}



setInterval(tiempoRestante,500);
tiempoRestante();