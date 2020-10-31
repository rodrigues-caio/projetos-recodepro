<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./css/estilo.css" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="./css/pedidos.css" />

    <title>Faça seu pedido!</title>
  </head>
  <body>
    <?php include('menu.html') ?>
    <!-- MUDAR A EXTENSÃO DO ARQUIVO!!!-->
    <form action="pedido-realizado.html" method="post">
      <h2>Informe os seus dados:</h2>

      <label for="nome">Nome:</label>
      <input type="text" name="nome" id="nome" />

      <label for="email">Email:</label>
      <input type="email" name="email" id="email" />

      <label for="endereco">Endereço:</label>
      <input type="text" name="endereco" id="endereco" />

      <label for="cep">Cep:</label>
      <input type="number" name="cep" id="cep" />

      <h2>Qual é o seu pedido?</h2>

      <label for="produto">Produtos:</label>
      <select name="produto" id="produto">
        <option>Escolha aqui!</option>

        <?php include('conexao.php'); 
        
        $sql = "select descricao from produto";
        $result = $connection->query($sql);

        while($rows = $result->fetch_assoc()) {
        ?>
        <option value="<?php echo $rows['descricao'] ?>"><?php echo $rows['descricao'] ?></option>
        <?php 
        }
        ?>
      </select>

      <label for="quantidade">Quantidade:</label>
      <input type="number" name="quantidade" id="quantidade">
    
      <input class="btn btn-success my-4" type="submit" value="Realizar pedido!">
    </form>
  </body>
</html>
