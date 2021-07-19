function exibe(mensagem) {
  console.log(mensagem);
}

let umaPromise = new Promise(function(sucesso, ruim) {
  let teste = 200;

  if (teste == 200) {
    sucesso("OK!");
  }
  else {
    ruim("Azedou!");
  }
});

umaPromise.then(
function(valor) {exibe(valor);},
function(erro) {exibe(erro);}
);
