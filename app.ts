let button = document.getElementById('button');
// garante que os inputes sao Elementos HTML e não nulos
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function adicionarNumero(numero1: number, numero2: number, devPrintar: boolean, frase:string) {
    let resultado = numero1 + numero2
    if (devPrintar) {
        console.log(frase + resultado)
    }
    return numero1 + numero2
}

let devPrintar = true;
let frase = 'O valor é: ';

if(button) {
    button.addEventListener('click', () => {
    if(input1 && input2) {
        console.log(adicionarNumero(Number(input1.value), Number(input2.value), devPrintar, frase))
    }
 }
)}

