// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev: Bruno Paiva Souza
// DATA: 07/03/2023

// Este código implementa uma função que inverte uma string fornecida pelo usuário. A função reverseString recebe uma string str como argumento e inicializa uma variável reversedStr como uma string vazia.
function reverseString(str) {
    // Em seguida, um loop for é iniciado, começando do último caractere da string (str.length - 1) até o primeiro caractere (0), decrementando i a cada iteração. A cada iteração do loop, o caractere correspondente à posição i na string str é adicionado ao final da string reversedStr.
    let reversedStr = '';
    // Quando o loop termina, a string reversedStr contém a string str invertida e é retornada pela função.
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

// Exemplo de uso:
const minhaString = 'Hello, world!';
const minhaStringInvertida = reverseString(minhaString);
console.log(minhaStringInvertida);
