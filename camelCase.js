function camelCase(stringEntrada) {
  stringEntrada = stringEntrada.toLowerCase();

  while (stringEntrada.indexOf(" ") != -1) {
    let charAtual = stringEntrada[stringEntrada.indexOf(" ") + 1];
    let charNovo = charAtual.toUpperCase();
    stringEntrada = stringEntrada.replace(/ ./, charNovo);
  }
  return stringEntrada.normalize("NFD").replace(/[\u0021-\u002F]|[\u003A-\u0040]|[\u005B-\u0060]|[\u007B-\uFFFF]|/g, "");
}

var teste = camelCase("Endereço do Fornecedor 123!/:@[`{");
console.log(teste);

