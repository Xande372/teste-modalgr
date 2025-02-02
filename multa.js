function calcularMulta(valorPorDia, diasAtraso) {
    var valorMulta = valorPorDia * diasAtraso;

    // valor mínimo da multa
    if (valorMulta < 1) {
        valorMulta = 1;
    }
    valorMulta = valorMulta.toFixed(2);
    

    return `O valor da multa para ${diasAtraso} dias de atraso é: R$${valorMulta}`;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite o valor da multa por dia (em R$): ', (valorPorDia) => {
    readline.question('Digite o número de dias de atraso: ', (diasAtraso) => {
        
        valorPorDia = parseFloat(valorPorDia);
        diasAtraso = parseInt(diasAtraso);

        // Verifica se os valores são válidos
        if (isNaN(valorPorDia) || isNaN(diasAtraso) || valorPorDia < 0 || diasAtraso < 0) {
            console.log("Por favor, insira valores válidos.");
        } else {
            const mensagem = calcularMulta(valorPorDia, diasAtraso);
            console.log(mensagem);
        }

        readline.close();
    });
});