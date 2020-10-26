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
VALUES ('Geladeira Dako', 'Refrigere sua comida com alta qualidade!', 2512.25, 'caminho/da/imagem'),
('Geladeira Brastemp INOX', 'Geladeira Frost Free Brastemp Side Inverse 540 litros', 5019.00, './imagens/geladeira_brastemp.jpeg'),
('Geladeira Brastemp Branca', 'Geladeira Frost Free Brastemp Branca 375 litros', 1910.90, './imagens/refrigerador_brastemp.jpeg'),
('Fogão Consul', 'Fogão 4 Bocas Consul Inox com Mesa de Vidro', 1129.00, './imagens/fogao_consul.jpeg'),
('Lavadora Philco', 'Lavadora de Roupas Philco Inverter 12KG', 2399.90, './imagens/lavadora_philco.jpeg');

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
VALUES ('João', 'Avenida da alegria', 1158585252, 'Geladeira BRASTEMP Branca', 1910.90, 1, 1910.90),
('José', 'Rua do Açai', 115800002, 'Geladeira BRASTEMP INOX', 2399.90, 1, 2399.90),
('Maria', 'Avenida Professor', 4444555511, 'Fogão Consul', 1129.00, 1, 1129.00),
('Jeck', 'Rua quatro', 5555555544, 'Lavadora Philco', 2399.90, 1, 2399.90),
('Guilherme', 'Avenida Monteiro', 2222444488, 'Geladeira Dako', 2512.25, 1, 2512.25);
