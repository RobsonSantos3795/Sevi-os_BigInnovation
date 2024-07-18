var b = document.getElementById('area2');

b.addEventListener('mouseenter', penetrar);
b.addEventListener('mouseout', despenetrar);

function penetrar() {
    b.style.background = 'green';
}
function despenetrar() {
    b.style.background = 'yellow';
}

// Alteração de página

function pag1() {
    location.href = 'index.html'
}