// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev: Bruno Paiva Souza
// DATA: 07/03/2023

// Este código implementa uma função que calcula o fatorial de um número fornecido pelo usuário usando recursão. A função recursiveFactorial recebe o número n como argumento.
function recursiveFactorial(n) {
    // A recursão é realizada verificando se o valor de n é igual a zero. Se sim, a função retorna 1, já que 0! é igual a 1 por definição. Caso contrário, a função retorna o valor de n multiplicado pelo resultado da chamada recursiva da função recursiveFactorial passando n-1 como argumento.
    if (n === 0) {
        return 1;
    } else {
        // O código também inclui um exemplo de uso da função recursiveFactorial, onde o número 5 é usado como entrada para a função. O resultado é impresso no console, que deve ser 120 (5! = 5 * 4 * 3 * 2 * 1 = 120).
        return n * recursiveFactorial(n - 1);
    }
}

// Exemplo de uso:
const num = 5;
const fatorial = recursiveFactorial(num);
console.log(fatorial);
