function obterMedia() {


    var html = parseInt(document.getElementById("html").value);
    var css = parseInt(document.getElementById("css").value);
    var js = parseInt(document.getElementById("js").value);

    var media = (html + css + js) / 3;

    if (media >= 7){
        document.getElementById("resultado").innerHTML = "Parabéns, " + document.getElementById("nome").value + ", sua nota final é " + Math.round(media)+" e você foi aprovado!";
    }else{
        document.getElementById("resultado").innerHTML = "Sinto muito, " + document.getElementById("nome").value + ", sua nota final é " + Math.round(media)+" e você foi reprovado!";
    }

    // document.getElementById("resultado").innerHTML = "Parabéns, " + document.getElementById("nome").value + ", sua nota final é " + media+"!";
}