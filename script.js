var parrafo = document.getElementById('today');
var parrafoF = document.getElementById('faltan');


function mostrarFecha() {
  var ahora = new Date();
  var opciones = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
  var fechaActual = ahora.toLocaleDateString('es-ES', opciones);
  parrafo.innerHTML = fechaActual;
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

mostrarFechaF();


setInterval(mostrarFecha, 1000);


setInterval(mostrarFechaF, 1000);