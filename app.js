function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // Verifica se os valores são válidos
    if (isNaN(quantidade) || isNaN(de) || isNaN(ate) || de > ate || quantidade <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    let sorteados = new Set(); // Usamos um Set para evitar números repetidos

    while (sorteados.size < quantidade) {
        let numero = obterNumeroAleatorio(de, ate);
        sorteados.add(numero);
    }

    document.getElementById('resultado').innerText = `Números sorteados: ${[...sorteados].join(", ")}`;
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar() {
    document.getElementById('quantidade').value = "";
    document.getElementById('de').value = "";
    document.getElementById('ate').value = "";
    document.getElementById('resultado').innerText = "";
}

