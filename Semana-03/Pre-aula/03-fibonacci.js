// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev: Bruno Paiva Souza
// DATA: 07/03/2023

function fibonacci(n) {
    if (n < 1) {
        return []; // retorna um array vazio se n for menor que 1
    } else if (n === 1) {
        return [0]; // retorna [0] se n for igual a 1
    } else if (n === 2) {
        return [0, 1]; // retorna [0, 1] se n for igual a 2
    } else {
        const fib = [0, 1]; // começa com os dois primeiros números da série
        for (let i = 2; i < n; i++) {
            fib.push(fib[i - 1] + fib[i - 2]); // adiciona o próximo número na série
            if (fib[i] >= n) {
                break; // interrompe o loop se o próximo número for maior ou igual a n
            }
        }
        return fib; // retorna o array com a série completa
    }
}

// Exemplo de uso:
const num = 20;
const resultado = fibonacci(num);
console.log(`A série de Fibonacci até ${num} é: ${resultado}.`); // A série de Fibonacci até 20 é: 0,1,1,2,3,5,8,13.
