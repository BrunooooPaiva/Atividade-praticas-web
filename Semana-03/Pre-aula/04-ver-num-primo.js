// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev: Bruno Paiva Souza
// DATA: 07/03/2023

function isPrime(num) {
    if (num < 2) {
        return false; // 0 e 1 não são primos
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // se o número for divisível por qualquer número entre 2 e sua raiz quadrada, não é primo
        }
    }
    return true; // se não for divisível por nenhum número entre 2 e sua raiz quadrada, é primo
}

// Exemplo de uso:
const numero = 17;
if (isPrime(numero)) {
    console.log(`${numero} é um número primo.`);
} else {
    console.log(`${numero} não é um número primo.`);
}
