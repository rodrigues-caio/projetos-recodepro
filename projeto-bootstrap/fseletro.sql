-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 05/11/2020 às 01:00
-- Versão do servidor: 10.4.14-MariaDB
-- Versão do PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `fseletro`
--
CREATE DATABASE IF NOT EXISTS `fseletro` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `fseletro`;

-- --------------------------------------------------------

--
-- Estrutura para tabela `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(200) DEFAULT NULL,
  `mensagem` varchar(255) DEFAULT NULL,
  `data_publicada` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `comentarios`
--

INSERT INTO `comentarios` (`id`, `nome`, `mensagem`, `data_publicada`) VALUES
(10, 'Caio Rodrigues Barbosa', 'aaaaaaaaaaaaaaaaaaaa', '2020-10-31 10:43:46');

-- --------------------------------------------------------

--
-- Estrutura para tabela `produto`
--

CREATE TABLE `produto` (
  `idproduto` int(11) NOT NULL,
  `categoria` varchar(45) NOT NULL,
  `descricao` varchar(150) NOT NULL,
  `preco` decimal(8,2) DEFAULT NULL,
  `precofinal` decimal(8,2) DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `produto`
--

INSERT INTO `produto` (`idproduto`, `categoria`, `descricao`, `preco`, `precofinal`, `imagem`) VALUES
(3, 'geladeira', 'Geladeira Frost Free Brastemp Side Inverse 540 litros', '6389.00', '5019.00', './imagens/geladeira_brastemp.jpeg'),
(4, 'geladeira', 'Geladeira Frost Free Brastemp Branca 375 litros', '2068.60', '1910.90', './imagens/refrigerador_brastemp.jpeg'),
(5, 'geladeira', 'Geladeira Frost Free Consul Prata 340 litros', '2199.90', '2069.00', './imagens/refrigerador_consul.jpeg'),
(6, 'fogao', 'Fogão 4 Bocas Consul Inox com Mesa de Vidro', '1209.90', '1129.00', './imagens/fogao_consul.jpeg'),
(7, 'fogao', 'Fogão de Piso 4 Bocas Atlas Monaco com Atendimento Automático', '609.90', '519.70', './imagens/fogao_monaco.jpeg'),
(8, 'microondas', 'Micro-ondas Consul 32 Litros Inox 220V', '580.90', '409.88', './imagens/microondas_consul.jpeg'),
(9, 'microondas', 'Microondas 25L Espelhado Philco 220V', '508.70', '464.53', './imagens/microondas_philco.jpeg'),
(10, 'microondas', 'Forno de Microondas Electrolux 20L Branco', '459.90', '436.05', './imagens/microondas_eletrolux.jpeg'),
(11, 'lavalouca', 'Lava-Louça Electrolux Inox com 10 Serviços, 06 Programas de Lavagens.', '3599.00', '2799.90', './imagens/lava_loucas_eletrolux.jpeg'),
(12, 'lavalouca', 'Lava Louça Compacta 8 Serviços Branca 127V Brastemp', '1970.50', '1730.61', './imagens/lava_loucas.jpeg'),
(13, 'lavadora', 'Lavadora de Roupas Brastemp 11 kg com Turbo Perfomance Branca', '1699.00', '1214.00', './imagens/lavadora_brastemp.jpeg'),
(14, 'lavadora', 'Lavadora de Roupas Philco Inverter 12KG', '2399.90', '2179.90', './imagens/lavadora_philco.jpeg');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`idproduto`),
  ADD UNIQUE KEY `imagem` (`imagem`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `idproduto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
