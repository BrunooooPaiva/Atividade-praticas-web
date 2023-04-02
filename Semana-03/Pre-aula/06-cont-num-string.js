// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev: Bruno Paiva Souza
// DATA: 07/03/2023

// Este código implementa uma função que conta o número de palavras em uma string fornecida pelo usuário. A função countWords recebe uma string str como argumento e usa o método trim para remover quaisquer espaços em branco no início ou no final da string.
function countWords(str) {
    // Em seguida, a string é dividida em palavras usando a expressão regular /\s+/, que corresponde a um ou mais espaços em branco. Isso retorna um array de palavras.
    const words = str.trim().split(/\s+/);
    // Finalmente, o número de palavras no array é retornado pela função.
    return words.length;
}

// Exemplo de uso:
const minhaString = '  Hello,    world!  ';
const numPalavras = countWords(minhaString);
console.log(numPalavras);
