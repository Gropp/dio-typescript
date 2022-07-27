// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

const employee = {
    code: 10,
    name: 'John'
}

console.log(employee)

interface Empregado {
    code: number,
    name: string,
}

const funcionario: Empregado = {
    code: 10,
    name: 'Maria'
}

console.log(funcionario)