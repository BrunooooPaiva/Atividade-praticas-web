// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev: Bruno Paiva Souza
// DATA: 07/03/2023

// Este código implementa uma função que encontra a palavra mais longa em uma string fornecida pelo usuário. A função findLongestWord recebe a string str como argumento.
function findLongestWord(str) {
    // Em seguida, a string é dividida em palavras usando o método split com um espaço como separador. As palavras são armazenadas em um array chamado words.
    const words = str.split(' ');
    // Depois, uma variável chamada longestWord é definida como uma string vazia.
    let longestWord = '';
    // Então, um loop for...of é usado para iterar sobre as palavras no array words. Para cada palavra, é verificado se seu comprimento é maior do que o comprimento da palavra mais longa até agora (armazenada na variável longestWord). Se for, a palavra atual se torna a nova palavra mais longa.
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    // Finalmente, a função retorna a palavra mais longa encontrada.
    return longestWord;
}

// Exemplo de uso:
const minhaString = 'Esta é uma frase de exemplo para encontrar a palavra mais longa.';
const minhaPalavra = findLongestWord(minhaString);
console.log(minhaPalavra);
