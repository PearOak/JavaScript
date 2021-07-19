function calculaVencimento(diasVencimento) {
    var diasVencimento = diasVencimento;
    var dataAtual = new Date();
    dataAtual.setHours(0,0,0,0);
    var cont = 0;
    var compensaFds = 0;

    while (cont < diasVencimento) {
      dataAtual.setDate(dataAtual.getDate() + 1);
      
      if (dataAtual.getDay() == 0 || dataAtual.getDay() == 6) {
        diasVencimento++;
        compensaFds++;
      }
      cont++;
    }
    return dataAtual;
  }

var teste = calculaVencimento(5);
console.log(teste)

function alteraVencimento(campoVencimento, numeroDias) {
    var campoVencimento = campoVencimento;
    var numeroDias = numeroDias;
    var dataMinima = calculaVencimento(numeroDias);
    var dataAtual = new Date();
    dataAtual.setHours(0,0,0,0);
    var stringVencimento = (campoVencimento.value).replace(/(\d{2})\/(\d{2})\/(\d{4})/,"$2/$1/$3");
    var dataEscolhida = new Date(stringVencimento);
    dataEscolhida.setHours(0,0,0,0);
    var diferencaEscolhida = (dataEscolhida-dataAtual)/(1000*60*60*24);
    var diferencaMinima = (dataMinima - dataAtual)/(1000*60*60*24);
    
    if (diferencaEscolhida < diferencaMinima) {
      alert("A data de vencimento mínima é D+" + numeroDias +"!");
      campoVencimento.value = dataMinima.toLocaleDateString();
    }
    else {
      campoVencimento.value = campoVencimento.value;
    }
  }
