function contarPalavras(frase) {
    // Para remover espaços em branco
    frase = frase.trim();

    // Divide a frase em palavras usando espaços como separadores
    const palavras = frase.split(/\s+/);

    return palavras.length;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite uma frase: ', (frase) => {
    // Verifica se a frase está vazia (caracteres especiais passam)
    if (!frase.trim()) {
        console.log("Por favor, insira uma frase válida.");
    } else {
        const quantidadePalavras = contarPalavras(frase);
        console.log(`Quantidade de palavras: ${quantidadePalavras}`);
    }

    readline.close();
});