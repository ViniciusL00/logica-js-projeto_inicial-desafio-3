# logica-js-projeto_inicial-2-desafio-3
 Terceiro desafio de logica de programação com JavaScript.

1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

    function calculaIMC(altura, peso){

    let imc = peso / (alturaMetros * alturaMetros);
    }

2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

    function calcularFatorial(numero) {
        if (numero === 0 || numero === 1) {
            return 1;
        }
        let fatorial = 1;
        for (let i = 2; i <= numero; i++) {
            fatorial *= i;
        }
        return fatorial;
    }

    let numero = 8;
    let resultado = calcularFatorial(numero);
    console.log(`O Fatorial de ${numero} é ${resultado}`);

3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

    function converterDolarParaReal(valorEmDolar) {
        let cotacaoDolar = 4.80;
        let valorEmReais = valorEmDolar * cotacaoDolar;
        return valorEmReais.toFixed(2);
    }

    let valorEmDolar = 870;
    let valorEmReais = converterDolarParaReal(valorEmDolar);
    console.log(`${valorEmDolar} dolar equivalem a R$ ${valorEmReais}`);

4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

    function calcularAreaPerimetro(altura, largura) {
        const area = altura * largura;
        const perimetro = 2 * (altura + largura);
        console.log(`Área com ${area} m².`);
        console.log(`Perímetro com ${perimetro} metros.`);
    }

    calcularAreaPerimetro (15, 23);

5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

    function calcularAreaPerimetroCircular(raio) {
        const pi = 3.14;
        const area = pi * (raio * raio);
        const perimetro = 2 * pi * raio;
        console.log(`Area ${area} m²`);
        console.log(`Perimetro ${perimetro} metros`);
    }

    calcularAreaPerimetroCircular(5);

6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

    function mostrarTabuada(numero, limite) {
        for (let i = 1; i <= limite; i++) {
            const resultado = numero * i;
            console.log(numero + " x " + i + " = " + resultado);
        }
    }

    mostrarTabuada(12, 10);