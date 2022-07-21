"use strict";
let valorAny;
valorAny = 1;
valorAny = "ola";
valorAny = true;
let valorString = 'teste';
//apesar do typescript ser autamente tipado, ele permite que voce atribua a uma variavel declarada como string uma variavel do tipo any, pois o any pode ser em algum momento uma string. Isto pode gerar muitos problemas.
//esse tipo de uso acaba com o que o typescript tem de melhor, que é a validacao dos tipos
//NAO FAZER ISSO
valorString = valorAny;
let valorString2 = 'teste2';
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
//a função ira retornar um valor imprevisivel... pois nao sabemos o que esta guardado em valorAny..
somarString(valorString, valorString2);
