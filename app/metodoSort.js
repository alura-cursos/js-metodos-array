btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');

btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    livrosOrdenados = livros.sort((a, b) => { a.preco - b.preco })
    exibirOsLivrosNaTela(livrosOrdenados)
}


