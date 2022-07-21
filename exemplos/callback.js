"use strict";
function printarValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2);
}
// a funcao recebe uma funcao como parametro
function somaValorNumericoTratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
// chamo a funcao, passo os dois numeros e passo a funcao que recebe o resultado e faz outra operacao
// com uma funcao callback conseguimos dentro de uma função, inserir diferentes funcoes para consumir o resultado da função principal
console.log(somaValorNumericoTratar(1, 3, aoQuadrado));
console.log(somaValorNumericoTratar(1, 3, dividirPorEleMesmo));
