const soma = (num1,num2) => num1 + num2; //ARROW FNCTION QUANDO POSSUI UMA LINHA SOMENTE NÃO HÁ NECESSIDADE DO RETUNR
//NÃO PRECISA DO FUNCTION ANTES

//ARROW FUNCTION COM MAIS DE UMA LINHA DE INSTRUÇÃO
const somaNumerosPequenos = (num1, num2) => {
    console.log(num1 > 9 || num2 > 9 ? 'Somente números entre 1 a 9' : `Soma é: ${num1 + num2}`)
}

somaNumerosPequenos(5,11)

//HOISTING ARROW FUNCTION SE COMPORTA DO MESMO JEITO QUE UMA FUNÇÃO DECLARADA