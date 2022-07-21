"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'Desenvolvedora'
};
pessoa.idade = 25;
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
};
const paula = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
};
//grupo de constantes para padronizar alguns valores
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 30,
    profissao: Profissao.Desenvolvedora
};
const maria = {
    nome: 'Maria',
    idade: 20,
    profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: 'Jéssica',
    idade: 20,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'Programação']
};
//como profissao nao é obrigatoria o compilador na reclamaou de nao ter profissao
const monica = {
    nome: 'Mônica',
    idade: 21,
    materias: ['Matemática discreta', 'Programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
