function obterMedia(){


    var html = parseInt(document.getElementById("html").value);
    var css = parseInt(document.getElementById("css").value);
    var js = parseInt(document.getElementById("js").value);
    
    var media = (html+css+js)/3;
    
    document.getElementById("resultado").innerHTML = "Parabéns, "+ document.getElementById("nome").innerHTML +"sua nota final é " + media+"%";
    
    }