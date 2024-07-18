function logar() {
    location.href = "index2.html";
}

function pag1() {
    location.href = "index.html";
}

var a = window.document.getElementById('area');

a.addEventListener('mouseenter', entrar);
a.addEventListener('mouseout', sair);

function entrar() {
    a.style.background = 'green';
}

function sair() {
    a.style.background = 'yellow';
}

//Interação do botão para o site index2
var b = document.getElementById('area2');

b.addEventListener('mouseenter', penetrar);
b.addEventListener('mouseout', despenetrar);

function penetrar() {
    b.style.background = 'green';
}

function despenetrar() {
    b.style.background = 'yellow';
}