// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

enum Profissoes {
    Atriz,
    Padeiro
}

interface Dados {
    nome: string,
    idade: number,
    profissao?: Profissoes
}

let pessoa1:Dados = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissoes.Atriz
}

let pessoa2:Dados = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissoes.Padeiro
}

let pessoa3:Dados = {
    nome: 'Laura',
    idade: 32,
    profissao: Profissoes.Atriz
}

let pessoa4:Dados = {
    nome: 'Carlos',
    idade: 19,
    profissao: Profissoes.Atriz
}