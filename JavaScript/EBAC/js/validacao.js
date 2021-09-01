/* 
 *  VALIDAÇÃO DE CAMPOS DE FORMULÁRIO COM JAVASCRIPT SIMPLES
 

function validar() {
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var tel = document.getElementById("tel");
    var end = document.getElementById("end");
    var cep = document.getElementById("cep");
    var uf = document.getElementById("uf");

    if (nome.value == "") {
        alert("Nome não informado");
        nome.fucus();
        return
    }
    if (email.value == "") {
        alert("E-mail não informado");
        email.fucus();
        return
    }
    if (tel.value == "") {
        alert("Telefone não informado");
        tel.fucus();
        return
    }
    if (end.value == "") {
        alert("Endereço não informado");
        end.fucus();
        return
    }
    if (cep.value == "") {
        alert("CEP não informado");
        cep.fucus();
        return
    }
    if (uf.value == "") {
        alert("Estado não informado");
        uf.fucus();
        return
    }
    alert("Formulário enviado!");
}
*/

/* 
 *  VALIDAÇÃO DE CAMPOS DE FORMULÁRIO COM JAVASCRIPT COMPLETA
*/

function calcularMedia(notas) {

    let soma = 0;
    for (c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;

}

let media; // escopo global

function aprovacao(notas) {

    let media = calcularMedia(notas); // escopo da função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;

}


// Função Recursivas

function contagemRegressiva(numero) {

    console.log(numero);

    let proximoNumero = numero - 1;

    if (proximoNumero > 0)
        contagemRegressiva(proximoNumero);

}

// contagemRegressiva(50);

/* 
 * Formulário envio de dados para cálculo da média 
 */
const formulario1 = document.getElementById('formulario');

if (formulario1)
    formulario1.addEventListener('submit', function (evento) {

        evento.preventDefault();
        evento.stopPropagation();

        if (this.getAttribute('class').match(/erro/)) {
            return false;
        }

        let dados = new FormData(this);

        let notas = [];

        for (let key of dados.keys()) {

            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número

            if (!isNaN(numero)) {
                notas.push(numero);
            }

        }

        console.log(notas);

        texto = aprovacao(notas)

        document.getElementById('resultado').innerHTML = texto;

    });


function validaCampo(elemento) {

    elemento.addEventListener('focusout', function (event) {

        event.preventDefault();

        if (this.value == "") {
            document.querySelector('.mensagem').innerHTML = "*Verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }

    });

}

function validaCampoNumerico(elemento) {

    elemento.addEventListener('focusout', function (event) {

        event.preventDefault();

        let numero = this.value.match(/^[0-9]{5}-[0-9]{3}$/) ? this.value.replace(/-/, "") : this.value;

        if (numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "*Verifique o seu CEP foi preenchido corretamente";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}


function validaEmail(elemento) {

    elemento.addEventListener('focusout', function (event) {

        event.preventDefault();

        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if (this.value.match(emailValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "*Verifique o seu e-mail foi preenchido corretamente";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

function validaUF(elemento) {

    elemento.addEventListener('focusout', function (event) {

        event.preventDefault();

        const UFValido = /^[a-z]{2}$/i;
        if (this.value.match(UFValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "*Verifique se a sigla do seu Estado foi preenchida corretamente";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}


let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');
let camposUF = document.querySelectorAll('input.uf');

for (let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for (let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}

for (let emFoco of camposEmail) {
    validaEmail(emFoco);
}
for (let emFoco of camposUF) {
    validaUF(emFoco);
}