let botao = document.getElementById('button');
let entrada1 = document.getElementById('input1');
let entrada2 = document.getElementById('input2');

function somarNumeros(numero1, numero2) {
    if (typeof numero1 == 'number' && typeof numero2 == 'number') {
        return numero1 + numero2
    } else {
        return Number(numero1) + Number(numero2)
    }
}

button.addEventListener('click', () => {
    console.log(somarNumeros(entrada1.value, entrada2.value));
})