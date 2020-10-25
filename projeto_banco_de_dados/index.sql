CREATE DATABASE projeto_final;

USE projeto_final;

CREATE TABLE projeto_final.produto (
  id_produto INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  descricao VARCHAR(300) NOT NULL,
  preco DECIMAL(8,2) NOT NULL,
  nome_imagem VARCHAR(300) NOT NULL
);

INSERT INTO projeto_final.produto (nome, descricao, preco, nome_imagem)
VALUES ('Geladeira BRASTEMP', 'Refrigere sua comida com alta qualidade!', 2512.25, 'caminho/da/imagem');

CREATE TABLE projeto_final.pedido (
  id_pedido INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nome_cliente VARCHAR(100) NOT NULL,
  endereco VARCHAR(200) NOT NULL,
  telefone INT NOT NULL,
  nome_produto VARCHAR(100) NOT NULL,
  valor_unitario DECIMAL(8,2) NOT NULL,
  quantidade INT NOT NULL,
  valor_total DECIMAL(8,2) NOT NULL
);

INSERT INTO projeto_final.pedido (nome_cliente, endereco, telefone, nome_produto, valor_unitario, quantidade, valor_total)
VALUES ('João', 'Avenida da alegria', 1158585252, 'Geladeira BRASTEMP', 2512.25, 2, 5024.50);
;