//tipo de dados
//booleandos

//conversão implicita
const numero = 5;
const numeroString = '5';

console.log(numero === numeroString)
console.log(numero == numeroString)
console.log(numero + numeroString) // transforma o numero em string criando uma concatenação.


//conversao explicita
//Number()
console.log(numero + Number(numeroString))
//String()

let usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.
