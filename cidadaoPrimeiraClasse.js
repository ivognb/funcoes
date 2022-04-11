// Função de JS é First-Class Object (Citizens)
// High-order function

// criar de forma literal
function fn1() {
    
} // se você não colocar retorno na função, ela retorna undefined

// armazenar em uma variavel
const fun2 = function () {
    
}

// armazenar em um array
const array = [function (a, b) {return a + b}] 
console.log(array[0](2, 3));

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar());

// passar função como param
function run(fun){
    fun()
}

run(function (){console.log('executando...');})

// uma função pode retornar/conter uma funcção
function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}

soma(3,4)(4)


/* 
Ou voce pode armazenar o resultado da função em uma constante e chamar depois:

const seisMais = soma(3, 4)
seisMais(3)
*/