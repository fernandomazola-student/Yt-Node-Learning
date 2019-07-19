//REFATORADO PARA MÓDULOS

// function soma(n1,n2){
//     return n1+n2;
// }

// function sub(n1,n2){
//     return n1-n2;
// }

// function multi(n1,n2){
//     return n1*n2;
// }

// function div(n1,n2){
//     return n1/n2;
// }

// function geral(n1, n2, operador){
//     return eval(`${n1} ${operador} ${n2}`);
// }


// var resultado = geral(2, 5, '-');

// console.log(resultado);


// //ou


// console.log(geral(10,5,'+'));



//CARREGANDO MÓDULOS

var SomaFunc = require('./soma');
var SubFunc = require('./sub');
var MultiFunc = require('./multi');

console.log(SomaFunc(5,6));
console.log(SubFunc(5,6));
console.log(MultiFunc(100,10));