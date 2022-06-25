dataAtual = new Date();

var text = document.getElementById('texto_rodape').innerHTML;
document.getElementById("texto_rodape").innerHTML = text.replace('{ano}', dataAtual.getFullYear());