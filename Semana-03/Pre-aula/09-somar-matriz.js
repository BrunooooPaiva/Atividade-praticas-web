// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev: Bruno Paiva Souza
// DATA: 07/03/2023

// Este código implementa uma função que soma todos os números em uma matriz fornecida pelo usuário. A função sumArray recebe a matriz arr como argumento.
function sumArray(arr) {
    let sum = 0;
    // Em seguida, duas estruturas de repetição for são usadas para iterar sobre os elementos da matriz. O primeiro loop for itera sobre as linhas da matriz, enquanto o segundo loop for itera sobre os elementos de cada linha.
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            // Para cada elemento da matriz, o valor do elemento é adicionado à variável sum.
            sum += arr[i][j];
        }
    }
    // Finalmente, a função retorna o valor total da soma de todos os elementos da matriz.
    return sum;
}

// Exemplo de uso:
const minhaMatriz = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];
const minhaSoma = sumArray(minhaMatriz);
console.log(minhaSoma);
