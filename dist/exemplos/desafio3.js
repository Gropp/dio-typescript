"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
// let botaoAtualizar = document.getElementById('atualizar-saldo');
// let botaoLimpar = document.getElementById('limpar-saldo');
// let soma = document.getElementById('soma');
// let campoSaldo = document.getElementById('campo-saldo');
// campoSaldo.innerHTML = 0
// function somarAoSaldo(soma) {
//     campoSaldo.innerHTML += soma;
// }
// function limparSaldo() {
//     campoSaldo.innerHTML = '';
// }
// botaoAtualizar.addEventListener('click', function () {
//     somarAoSaldo(soma.value);
// });
// botaoLimpar.addEventListener('click', function () {
//     limparSaldo();
// });
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
campoSaldo.innerHTML = '0';
let saldoTotal;
saldoTotal = 0;
function somarAoSaldo(soma) {
    let saldo = parseInt(soma);
    saldoTotal += saldo;
    campoSaldo.innerHTML = saldoTotal.toString();
}
function limparSaldo() {
    saldoTotal = 0;
    campoSaldo.innerHTML = '0';
}
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */ 
