<?php include('conexao.php') ?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./css/estilo.css" />
    <script src="./js/funcoes.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <title>Produtos - Full Stack Eletro</title>
  </head>
  <body>
    <!-- Início do Menu -->
    <div class="container-fluid">
      <?php include_once('menu.html') ?>


    <!--FIM DO MENU -->

    <header>
      <h2>Produtos</h2>
    </header>
    <hr />

    <div class="container-fluid row">
      <section class="categorias col-3">
        <h3>Categorias</h3>
        <ul>
          <li onclick="obterTodasCategorias()">Todos (12)</li>
          <li onclick="filtrarCategorias('geladeira')">Geladeiras (3)</li>
          <li onclick="filtrarCategorias('fogao')">Fogões (2)</li>
          <li onclick="filtrarCategorias('microondas')">Microondas (3)</li>
          <li onclick="filtrarCategorias('lavadora')">Lavadoura de roupas (2)</li>
          <li onclick="filtrarCategorias('lavalouca')">Lava-louças (2)</li>
        </ul>
      </section>

    
      <section class="produtos col-9">
        <div class="row">

        <?php
        $sql = "SELECT * FROM produto";
        $result = $connection->query($sql);

        if ($result->num_rows > 0) {
          while ($rows = $result->fetch_assoc()) {

        ?>
          <div class="box-produto col-3" id="<?php echo $rows['categoria'] ?>">
              <img src="<?php echo $rows['imagem'] ?>" width="120px" onmouseover="aumentarImagem(this)" onmouseout="diminuirImagem(this)" />
              <br />
              <p class='descricao'><?php echo $rows['descricao'] ?></p>
              <hr />
              <p class="descricao"><strike>R$ <?php echo $rows['preco'] ?></strike></p>
              <br />
              <p class="preco">R$ <?php echo $rows['precofinal'] ?></p>
            </div>
            
            
            <?php    
            }
          } else {
            echo "Nenhum produto cadastrado";
          }
          ?>
          </div>
      </section>
    </div>


    <footer id="rodape">
      <p id="formas_pagamento">
        <b>Formas de pagamento</b>
      </p>
      <img
        width="420px"
        src="./imagens/formas-pagamento.jpeg"
        alt="Formas de pagamento"
      />
      <p face="Arial" size="2">&copy; Recode Pro</p>
    </footer>
    </div>
  </body>
</html>
