function filtrarCategorias(categoria) {
  const produtos = document.getElementsByClassName("box-produto");

  for (i = 0; i < produtos.length; i++) {
    if (produtos[i].id == categoria) {
      produtos[i].style = "display: inline-block";
    } else {
      produtos[i].style = "display: none";
    }
  }
}

function obterTodasCategorias() {
  const produtos = document.getElementsByClassName("box-produto");

  for (i = 0; i < produtos.length; i++) {
    produtos[i].style = "display: inline-block";
  }
}

function aumentarImagem(elemento) {
  elemento.style = "width: 300px";
}

function diminuirImagem(elemento) {
  elemento.style.width = "120px";
}
