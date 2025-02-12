function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
}

let valorEmDolar = 870;
let valorEmReais = converterDolarParaReal(valorEmDolar);
console.log(`${valorEmDolar} dolar equivalem a R$ ${valorEmReais}`);