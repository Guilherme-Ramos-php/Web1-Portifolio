var dataAtual = new Date(), anoAtual = dataAtual.getFullYear(), diaNasc = 17, mesNasc = 9, anoNasc = 1999,
    idade = anoAtual - anoNasc, mesAtual = dataAtual.getMonth() + 1;
if(mesAtual < mesNasc){
    idade--;
} else {
    //Se estiver no mes do nascimento, verificar o dia
    if(mesAtual === mesNasc){
        if(new Date().getDate() < diaNasc ){
            idade--;
        }
    }
}

var text = document.getElementById('descr_guilherme').innerHTML;
document.getElementById("descr_guilherme").innerHTML = text.replace('{idade}', idade);
