<?php include('conexao.php'); 

  if (isset($_POST['nome']) && isset($_POST['mensagem'])) {
    $nome = $_POST['nome'];
    $mensagem = $_POST['mensagem'];
  
    $sql = "insert into comentarios (nome, mensagem) values ('$nome', '$mensagem')";
  
    $connection->query($sql);
  };
  
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./css/estilo.css" />

    <title>Contato - Full Stack Eletro</title>
  </head>
  <body>
    <div class="container-fluid">

    <!-- Início do Menu -->
   <?php include_once('menu.html') ?>

    <!--FIM DO MENU -->
    <h2>Contato</h2>
    <hr />

    <section class="contatos">
      <div class="contato">
        <img src="./imagens/email.jpg" width="40px" />
        <p>contato@fullstackeletro.com</p>
      </div>

      <div class="contato">
        <img src="./imagens/whatsapp.jpg" width="40px" />
        <p>(11) 9999-9999</p>
      </div>
    </section>
  <div class="container">
    <form class="feedback bg-info text-white" action="" method="POST">
      <div class="form-group">
        <label for="exampleFormControlInput1">Nome:</label>
        <input type="text" class="form-control" name="nome" id="exampleFormControlInput1">
      </div>
      
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Mensagem:</label>
        <textarea class="form-control" name="mensagem" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>

      <input class="btn btn-warning" type="submit" value="Enviar" />
    </form>

    <?php 
        $sql = "select * from comentarios";

        $result = $connection->query($sql);

        if ($result->num_rows > 0) {
          while ($rows = $result->fetch_assoc()) {
            echo "Nome: " . $rows['nome'], "<br>";
            echo "Mensagem: " . $rows['mensagem'], "<br>";
            echo "Data: " . $rows['data_publicada'], "<br>";
          }
        } else {
          echo "Nenhum comentário ainda!";
        }
    ?>

  </div>
 

   
    <br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br />

    <footer id="rodape">
      <p id="formas_pagamento">
        <b>Formas de pagamento</b>
      </p>
      <img
        width="420px"
        src="./imagens/formas-pagamento.jpeg"
        alt="Formas de pagamento"
      />
      <p>&copy; Recode Pro</p>
    </footer>
    </div>
  </body>
</html>
