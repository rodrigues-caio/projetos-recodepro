<?php 
  $connection = mysqli_connect('localhost', 'root', '', 'fseletro');

  if (!$connection) {
    die ("A conexão não foi realizada" . mysqli_connect_error());
  }
?>