function clicou (){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
    }
    
    function redirecionar(){
    window.open("https://www.facebook.com/"); //abre em uma nova janela
    window.location.href = "https://www.facebook.com/"; // abre na mesma janela
    }
    
    function trocar(elemento){
        elemento.innerHTML = "Obrigado por passar o Mouse";
        //document.getElementById("mousemove").innerHTML = "Obrigado por passar o Mouse"; //troca o texto
        //alert("trocar o texto"); // exibe alerta
    }
    
    function voltar(elemento){
        elemento.innerHTML = "Passe o mouse aqui";
        //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"; //volta o texto
    }
    
    
    function load(){
    alert("pagina carregada")
    }
    
    function funcaochange(elemento){
        console.log(elemento.value)}
    
    /*
    function validaIdade(idade){
        var validar;
        if (idade >= 18){
        validar = true
        }else{
        validar = false
    }
    return validar;
    };
    var idade = prompt("Qual a sua idade?");
    console.log(validaIdade(idade));
    
    
    function soma (n1, n2){
    return n1 + n2}
    
    function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)}
    
    alert (soma(5,10));
    
    alert (setReplace("Vai Japão","Japão","Brasil"));
    
    var idade = prompt ("Qual sua idade?");
    if (idade >= 18){
        alert("maior de idade")
    }else{
        alert("menor de idade")
    };
    
    var count = 0;
    while (count <= 5){
        console.log(count);
    alert(count);
        count++;
    };
    
    var count;
        for(count=0; count<=5;count++){
        alert(count);
    };
    
    var d = new Date();
    alert(d.getDay());
    alert(d.getHours());
    alert(d.getMinutes());
    */


// var nome = "Victor Rodrigues";
// var idade = 28; 
// var idade2 = 10;
// var frase = "Japão é o melhor time do mundo";
// //alert (nome + " tem " + idade + " anos!");
// // alert (idade+idade2);
// console.log(nome + " tem " + idade + " anos!");
// console.log(idade+idade2);
// console.log(frase.replace("Japão", "Brasil"));
// console.log(frase.toUpperCase());
// console.log(frase.toLowerCase());

// var lista = ["maça", "pêra", "Laranja"];
// lista.push("uva");
// //lista.pop();
// console.log(lista);
// console.log(lista.toString());
// console.log(lista.join(" - "));
// // console.log(lista.reverse());

// var fruta = {nome: "maça", cor:"Vermelho"};
// console.log(fruta);
// console.log(fruta.nome);
// console.log(fruta.cor);

// var frutas = [{nome: "maça", cor:"Vermelho"},{nome: "uva", cor:"roxo"}];
// console.log(frutas);
// console.log(frutas[1].nome);
// console.log(frutas[0].cor);

