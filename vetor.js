function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function separarMultiplosDe3(vetor) {
    const multiplosDe3 = [];
    const naoMultiplosDe3 = [];

    // Separar os números
    for (const numero of vetor) {
        if (numero % 3 === 0) {
            multiplosDe3.push(numero);
        } else {
            naoMultiplosDe3.push(numero);
        }
    }

    return { multiplosDe3, naoMultiplosDe3 };
}

// Gerar um vetor de 50 números inteiros aleatórios
const vetorOriginal = [];
for (let i = 0; i < 50; i++) {
    vetorOriginal.push(gerarNumeroAleatorio(1, 100));
}

const { multiplosDe3, naoMultiplosDe3 } = separarMultiplosDe3(vetorOriginal);

console.log("Vetor original:", vetorOriginal);
console.log("Números múltiplos de 3:", multiplosDe3);
console.log("Números não múltiplos de 3:", naoMultiplosDe3);