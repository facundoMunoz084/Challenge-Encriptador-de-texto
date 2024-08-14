function encryptText() {
    let inputText = document.getElementById("inputText").value;
    let outputText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.querySelector('.output-text').textContent = outputText ? outputText : "Ningún mensaje fue encontrado";
}

function decryptText() {
    let inputText = document.getElementById("inputText").value;
    let outputText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.querySelector('.output-text').textContent = outputText ? outputText : "Ningún mensaje fue encontrado";
}

function copyText() {
    let outputText = document.querySelector('.output-text').textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        alert("Error al copiar texto: ", err);
    });
}


