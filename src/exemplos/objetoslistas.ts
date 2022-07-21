const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'Desenvolvedora'
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
}

//grupo de constantes para padronizar alguns valores
enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    //torna a propriedade não obrigatoria
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 30,
    profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 20,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'Jéssica',
    idade: 20,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'Programação']
}

//como profissao nao é obrigatoria o compilador na reclamaou de nao ter profissao
const monica: Estudante = {
    nome: 'Mônica',
    idade: 21,
    materias: ['Matemática discreta', 'Programação']
}

function listar(lista: string[]){
    for(const item of lista){
        console.log('- ', item);
    }
}

listar(monica.materias);