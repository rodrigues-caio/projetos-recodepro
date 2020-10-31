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

    <form class="feedback" action="" method="POST">
      <h4>Nome:</h4>
      <input type="text" name="nome" />
      <h4>Mensagem:</h4>
      <textarea name="mensagem"></textarea>

      <input type="submit" value="Enviar" />
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
  </body>
</html>
