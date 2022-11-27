-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 27-Nov-2022 às 20:56
-- Versão do servidor: 10.4.25-MariaDB
-- versão do PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `sonoscompiuter`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `armazenamento`
--

CREATE TABLE `armazenamento` (
  `prod_id` int(5) NOT NULL,
  `prod_desc` varchar(100) NOT NULL,
  `fabricante` varchar(100) NOT NULL,
  `capacidade` varchar(100) NOT NULL,
  `write_speed` varchar(20) NOT NULL,
  `read_speed` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `armazenamento`
--

INSERT INTO `armazenamento` (`prod_id`, `prod_desc`, `fabricante`, `capacidade`, `write_speed`, `read_speed`) VALUES
(1, 'SSD KINGSTON NV2 1TB M.2 NVME 2280', 'KINGSTON', '1TB', '2100 MB/s', '3500 MB/s'),
(2, 'SSD KINGSTON NV2 500GB M.2 NVME 2280', 'KINGSTON', '500GB', '2100 MB/s', '3500 MB/s');

-- --------------------------------------------------------

--
-- Estrutura da tabela `clientes`
--

CREATE TABLE `clientes` (
  `cli_id` int(5) NOT NULL,
  `cli_nome` varchar(100) NOT NULL,
  `cli_cpfcnpj` varchar(14) NOT NULL,
  `cli_endereco` varchar(100) NOT NULL,
  `cli_bairro` varchar(20) NOT NULL,
  `cli_municipio` varchar(20) NOT NULL,
  `cli_uf` varchar(2) NOT NULL,
  `cli_cep` varchar(8) NOT NULL,
  `cli_fone` varchar(11) DEFAULT NULL,
  `cli_email` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `cpus`
--

CREATE TABLE `cpus` (
  `prod_id` int(5) NOT NULL,
  `prod_desc` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `fontes`
--

CREATE TABLE `fontes` (
  `prod_id` int(5) NOT NULL,
  `prod_desc` varchar(100) NOT NULL,
  `fabricante` varchar(100) NOT NULL,
  `potencia` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `gabinetes`
--

CREATE TABLE `gabinetes` (
  `prod_id` int(5) NOT NULL,
  `prod_desc` varchar(100) NOT NULL,
  `fabricante` varchar(100) NOT NULL,
  `qtde_cooler` int(10) NOT NULL,
  `sup_wc` tinyint(1) NOT NULL,
  `tamanho` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `gabinetes`
--

INSERT INTO `gabinetes` (`prod_id`, `prod_desc`, `fabricante`, `qtde_cooler`, `sup_wc`, `tamanho`) VALUES
(1, 'GABINETE GAMER THERMALTAKE VERSA J23 RGB MID TOWER', 'THERMALTAKE', 5, 0, 'MID TOWER'),
(2, 'GABINETE GAMER THERMALTAKE H550 TG ARGB MID TOWER', 'THERMALTAKE', 5, 0, 'MID TOWER');

-- --------------------------------------------------------

--
-- Estrutura da tabela `gpus`
--

CREATE TABLE `gpus` (
  `prod_id` int(5) NOT NULL,
  `prod_desc` varchar(100) NOT NULL,
  `fabricante` varchar(50) NOT NULL,
  `consumo` varchar(10) NOT NULL,
  `frequencia` varchar(10) NOT NULL,
  `memoria` varchar(10) NOT NULL,
  `fans` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `gpus`
--

INSERT INTO `gpus` (`prod_id`, `prod_desc`, `fabricante`, `consumo`, `frequencia`, `memoria`, `fans`) VALUES
(1, 'PLACA DE VIDEO MSI NVIDIA GEFORCE GTX 1660 SUPER GAMING X', 'MSI', '0', '0', '6', 2),
(2, 'PLACA DE VIDEO AFOX RADEON RX 550', 'AFOX', '', '', '4', 2),
(3, 'PLACA DE VÍDEO GIGABYTE GEFORCE RTX 3060 EAGLE OC 12G', 'GIGABYTE', '', '', '12', 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `it_pedidos`
--

CREATE TABLE `it_pedidos` (
  `it_num` int(5) NOT NULL,
  `it_seq` int(3) NOT NULL,
  `it_idprod` int(5) NOT NULL,
  `it_descprod` varchar(100) NOT NULL,
  `it_qtde` int(11) NOT NULL,
  `it_vlrunit` float NOT NULL,
  `it_vlrtotal` float NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `mobos`
--

CREATE TABLE `mobos` (
  `prod_id` int(5) NOT NULL,
  `prod_desc` varchar(100) NOT NULL,
  `fabricante` varchar(20) NOT NULL,
  `chipset` varchar(10) NOT NULL,
  `ram_slots` int(10) NOT NULL,
  `max_memory` int(11) NOT NULL,
  `nvme_slots` int(11) NOT NULL,
  `socket` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `mobos`
--

INSERT INTO `mobos` (`prod_id`, `prod_desc`, `fabricante`, `chipset`, `ram_slots`, `max_memory`, `nvme_slots`, `socket`) VALUES
(1, 'PLACA MÃE ASUS TUF GAMING B550M-PLUS', 'ASUS', 'AMD B550', 4, 128, 2, 0),
(2, 'PLACA MÃE ASUS PRIME A520M-E', 'ASUS', 'AMD A520', 2, 64, 1, 0),
(3, 'PLACA MAE ASUS PRIME H510M-E', 'ASUS', 'INTEL H510', 2, 0, 1, 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--

CREATE TABLE `pedidos` (
  `ped_numero` int(5) NOT NULL,
  `ped_idcliente` varchar(100) NOT NULL,
  `ped_nomecliente` int(11) NOT NULL,
  `ped_valortotal` float NOT NULL,
  `ped_emissao` date NOT NULL,
  `ped_nota` varchar(9) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

CREATE TABLE `produtos` (
  `prod_id` int(5) NOT NULL,
  `prod_desc` varchar(100) NOT NULL,
  `prod_qtest` int(11) NOT NULL,
  `prod_preco` float NOT NULL,
  `imgpath` varchar(100) DEFAULT NULL,
  `prod_type` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`prod_id`, `prod_desc`, `prod_qtest`, `prod_preco`, `imgpath`, `prod_type`) VALUES
(1, 'PROCESSADOR AMD Ryzen 5 5600X 3.7GHz', 500, 1199, 'amdryzen55600x', 'CPU'),
(3, 'PLACA MAE MSI MPG X570 Gaming Plus', 500, 1199, 'msix570', 'MOBO'),
(4, 'PLACA MAE MSI A520M-A PRO', 500, 449, 'msia520m', 'MOBO'),
(5, 'PLACA MAE MSI MAG B550 Tomahawk', 500, 1199, 'msib550m', 'MOBO'),
(2, 'PROCESSADOR AMD Ryzen 5 3600 3.6GHz', 500, 629, 'amdryzen53600', 'CPU'),
(6, 'MEMORIA DDR4 XPG Spectrix D50', 500, 209, NULL, 'RAM');

-- --------------------------------------------------------

--
-- Estrutura da tabela `rams`
--

CREATE TABLE `rams` (
  `prod_id` int(5) NOT NULL,
  `prod_desc` varchar(100) NOT NULL,
  `capacidade` varchar(10) NOT NULL,
  `frequencia` varchar(10) NOT NULL,
  `tecnologia` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `rams`
--

INSERT INTO `rams` (`prod_id`, `prod_desc`, `capacidade`, `frequencia`, `tecnologia`) VALUES
(1, 'MEMORIA DDR4 XPG SPECTRIX D50', '8GB', '3200MHZ', 'DDR4'),
(2, 'MEMORIA DDR4 KINGSTON FURY BEAST RGB', '8GB', '3200MHZ', 'DDR4');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `user_id` varchar(16) NOT NULL,
  `user_pass` varchar(16) NOT NULL,
  `user_priv` int(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `armazenamento`
--
ALTER TABLE `armazenamento`
  ADD PRIMARY KEY (`prod_id`);

--
-- Índices para tabela `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`cli_id`);

--
-- Índices para tabela `cpus`
--
ALTER TABLE `cpus`
  ADD PRIMARY KEY (`prod_id`);

--
-- Índices para tabela `fontes`
--
ALTER TABLE `fontes`
  ADD PRIMARY KEY (`prod_id`);

--
-- Índices para tabela `gabinetes`
--
ALTER TABLE `gabinetes`
  ADD PRIMARY KEY (`prod_id`);

--
-- Índices para tabela `gpus`
--
ALTER TABLE `gpus`
  ADD PRIMARY KEY (`prod_id`);

--
-- Índices para tabela `it_pedidos`
--
ALTER TABLE `it_pedidos`
  ADD PRIMARY KEY (`it_num`);

--
-- Índices para tabela `mobos`
--
ALTER TABLE `mobos`
  ADD PRIMARY KEY (`prod_id`);

--
-- Índices para tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`ped_numero`);

--
-- Índices para tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`prod_id`);

--
-- Índices para tabela `rams`
--
ALTER TABLE `rams`
  ADD PRIMARY KEY (`prod_id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `armazenamento`
--
ALTER TABLE `armazenamento`
  MODIFY `prod_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `gabinetes`
--
ALTER TABLE `gabinetes`
  MODIFY `prod_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `gpus`
--
ALTER TABLE `gpus`
  MODIFY `prod_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `mobos`
--
ALTER TABLE `mobos`
  MODIFY `prod_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `prod_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `rams`
--
ALTER TABLE `rams`
  MODIFY `prod_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
