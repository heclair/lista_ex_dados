//P.1.14. Demonstre como uma variável declarada com escopo de bloco pode levar a uma obtenção errada de resultado quando existe uma função ou método que faz uso de um valor armazenado em uma variável global. Ilustre isso com uma função simples e diga como esse tipo de construção de programa viola um bom projeto de função. Como esse tipo de problema poderia ser resolvido? 

let varGlobal: number = 30;

function foradobloco(){
    varGlobal = varGlobal +1;
}

function blocoFuncao(){
    let varGlobal: number = 15;
    console.log("Valor dentro do bloco ", varGlobal);
}

blocoFuncao();
console.log("Fora do bloco = ", varGlobal);

foradobloco();
console.log("Dentro do Bloco", varGlobal);