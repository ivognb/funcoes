// arrow function no geral é sempre uma função anonima pois não tem como ser nomeada, diferente das funções tradicionais

const soma = (x, y) => { 
    return x + y
 }

 const imprimirResultado = (a, b, operacao = soma) => { 
     console.log(operacao(a, b))
 }

 imprimirResultado(3, 4)
 imprimirResultado(3, 4, function (x, y) {
     return x - y
 })

 const pessoa = {
     falar: function () {
         console.log('opa')
     }
 }

 pessoa.falar()