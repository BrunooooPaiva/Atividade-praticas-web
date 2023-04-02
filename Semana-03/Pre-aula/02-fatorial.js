// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev: Bruno Paiva Souza
// DATA: 07/03/2023

// Este código implementa uma função que calcula o fatorial de um número n fornecido como argumento. O fatorial é o produto de todos os números inteiros positivos de 1 até n.
function fatorial(n) {
    if (n < 0) {
        // A função fatorial começa verificando se o número fornecido é negativo. Se for, a função retorna undefined. Em seguida, ela verifica se o número é 0 e, se for, retorna 1, pois o fatorial de 0 é 1.
        return undefined; // retorna undefined se o número for negativo
        //Se o número não for negativo nem 0, a função chama a si mesma recursivamente, passando como argumento o número anterior a n (ou seja, n - 1). O resultado dessa chamada é multiplicado por n e retornado. Isso continua até que a função alcance o caso base, em que n é igual a 0.
    } else if (n === 0) {
        return 1; // retorna 1 se o número for 0
    } else {
        return n * fatorial(n - 1); // chama a função recursivamente
    }
}

// Exemplo de uso:
const num = 5;
const resultado = fatorial(num);
console.log(`O fatorial de ${num} é ${resultado}.`); // O fatorial de 5 é 120.
