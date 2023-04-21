var parrafo = document.getElementById('today');
var parrafoF = document.getElementById('faltan');
var parrafoS = document.getElementById('falta18');

function mostrarFecha() {
  var ahora = new Date();
  var opciones = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
  var fechaActual = ahora.toLocaleDateString('es-ES', opciones);
  parrafo.innerHTML = fechaActual;
}

function mostrarFaltante18(){
  var ahora = new Date();
  var proximo18 = new Date("September 18, 2023 00:00:00");
  var diferenciaMSS = proximo18.getTime() - ahora.getTime();
  var segundosS = Math.floor(diferenciaMSS / 1000);
  var minutosS = Math.floor(segundosS / 60);
  var horasS = Math.floor(minutosS / 60);
  var diasS = Math.floor(horasS / 24);
  parrafoS.innerHTML = `${diasS} días ${horasS % 24} horas ${minutosS % 60} minutos ${segundosS % 60} segundos`;
}

function mostrarFechaF() {
  var ahora = new Date();
  var proximoAñoNuevo = new Date(`January 1, ${ahora.getFullYear() + 1} 00:00:00`);
  var diferenciaMS = proximoAñoNuevo.getTime() - ahora.getTime();
  var segundosF = Math.floor(diferenciaMS / 1000);
  var minutosF = Math.floor(segundosF / 60);
  var horasF = Math.floor(minutosF / 60);
  var diasF = Math.floor(horasF / 24);
  parrafoF.innerHTML = `${diasF} días ${horasF % 24} horas ${minutosF % 60} minutos ${segundosF % 60} segundos`;
}

mostrarFecha();
mostrarFaltante18()
mostrarFechaF();


setInterval(mostrarFecha, 1000);
setInterval(mostrarFaltante18, 1000);

setInterval(mostrarFechaF, 1000);