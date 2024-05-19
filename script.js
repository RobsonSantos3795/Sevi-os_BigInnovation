function logar() {
    location.href = "index2.html";
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