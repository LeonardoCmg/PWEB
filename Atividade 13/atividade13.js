document.addEventListener("DOMContentLoaded", function() {
    const janela = document.getElementById('janela');
    const titulo = document.getElementById('titulo');

    janela.addEventListener('mouseover', function() {
        janela.src = 'janelaaberta.png';
        titulo.innerText = 'Janela Aberta';
    });

    janela.addEventListener('mouseout', function() {
        janela.src = 'janelafechada.png';
        titulo.innerText = 'Janela Fechada';
    });

    janela.addEventListener('click', function() {
        janela.src = 'janelaquebrada.png';
        titulo.innerText = 'Janela Quebrada';
    });
});
