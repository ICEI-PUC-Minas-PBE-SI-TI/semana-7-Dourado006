// Dados iniciais
let nome = prompt("Qual é o seu nome?");

//  Renda Mensal
let renda = Number(prompt("Informe sua renda mensal:"));
while (isNaN(renda) || renda <= 0) {
    renda = Number(prompt("Valor inválido! Por favor, digite um número para sua renda:"));
}

// Quantidade de Despesas
let qtdDespesas = Number(prompt("Quantas despesas você quer informar? (Limite de 1 a 5)"));
while (isNaN(qtdDespesas)) {
    qtdDespesas = Number(prompt("Por favor, digite um número válido para a quantidade:"));
}

// limite entre 1 e 5
if (qtdDespesas < 1) {
    qtdDespesas = 1;
} else if (qtdDespesas > 5) {
    qtdDespesas = 5;
}

// Lançamento de despesas
let totalDespesas = 0;

for (let i = 1; i <= qtdDespesas; i++) {
    let valorDespesa = Number(prompt("Digite o valor da despesa " + i + ":"));

    // Validação de número
    while (isNaN(valorDespesa)) {
        valorDespesa = Number(prompt("Valor inválido! Digite o número da despesa " + i + ":"));
    }
    totalDespesas += valorDespesa;
}

// IF / ELSE
let mensagemClassificacao = "";
let sobra = renda - totalDespesas;

if (totalDespesas > renda) {
    mensagemClassificacao = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
    // Calcula se a sobra é >= 30% da renda
    if (sobra >= (renda * 0.30)) {
        mensagemClassificacao = "✅ Ótimo: boa margem de sobra.";
    } else {
        mensagemClassificacao = "🙂 Ok: dá para melhorar a sobra.";
    }
}

// Saída Final (Alert e Console)
let resultadoFinal = `
--- RESULTADO DO ORÇAMENTO ---
Usuário: ${nome}
Renda: R$ ${renda.toFixed(2)}
Total de Despesas: R$ ${totalDespesas.toFixed(2)}
Sobra: R$ ${sobra.toFixed(2)}
------------------------------
Status: ${mensagemClassificacao}
`;

alert(resultadoFinal);
console.log(resultadoFinal);
