// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev: Bruno Paiva Souza
// DATA: 07/03/2023

// Este código implementa uma função que calcula a média de um conjunto de números fornecidos pelo usuário. A função calculateAverage recebe um array de números numbers como argumento.
function calculateAverage(numbers) {
    // Em seguida, o método reduce é usado para somar todos os números no array. A função de callback do reduce recebe um acumulador (acc) e um número (num), e retorna a soma do acumulador e do número. O segundo argumento do reduce é o valor inicial do acumulador, que neste caso é 0. O resultado da soma é armazenado na variável total.
    const total = numbers.reduce((acc, num) => acc + num, 0);
    // Em seguida, a média é calculada dividindo-se o total pelo número de elementos no array (numbers.length). O resultado é armazenado na variável average.
    const average = total / numbers.length;
    // Finalmente, a média é retornada pela função.
    return average;
}

// Exemplo de uso:
const meusNumeros = [3, 5, 7, 9, 11];
const minhaMedia = calculateAverage(meusNumeros);
console.log(minhaMedia);
