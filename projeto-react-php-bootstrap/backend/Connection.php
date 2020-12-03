<?php

class Connection 
{
  public static function getDB()
  {
    $connection = new PDO('mysql:host=localhost;dbname=fseletro;charset=utf8', 'root', '');

    if ($connection) {
      return $connection;
    } else {
      echo "<h1>Falha na conexão.</h1>";
    }
  }
}