function dataHoraAtual() {
  var d = new Date();
  console.log(d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
}

setInterval(function() { dataHoraAtual();}, 1000);
