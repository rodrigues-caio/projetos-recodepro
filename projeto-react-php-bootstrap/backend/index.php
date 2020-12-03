<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api //  //Indicação de arquivo JSON 
header("Content-type: application/json");

require './Models/Produto.php';

$produtos = Produto::getAll();

print_r(json_encode($produtos));