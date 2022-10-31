-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-10-2022 a las 09:10:28
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_estacionamiento`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cat_vehiculo`
--

CREATE TABLE `cat_vehiculo` (
  `id_cat` int(11) NOT NULL,
  `categoria` varchar(50) NOT NULL,
  `valor_min` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cat_vehiculo`
--

INSERT INTO `cat_vehiculo` (`id_cat`, `categoria`, `valor_min`) VALUES
(1, 'Bicicleta', 5),
(2, 'Moto', 20),
(3, 'Automóvil', 40),
(4, 'Vehículo pesado', 50),
(5, 'Del estado o priv', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro_vehiculos`
--

CREATE TABLE `registro_vehiculos` (
  `id` int(11) NOT NULL,
  `placa` varchar(8) NOT NULL,
  `tipo_vehiculo` int(15) NOT NULL,
  `ingreso` varchar(22) NOT NULL,
  `estado` varchar(20) NOT NULL,
  `salida` varchar(22) NOT NULL,
  `tiempo_parqueo` int(10) NOT NULL,
  `cobro_servicio` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `registro_vehiculos`
--

INSERT INTO `registro_vehiculos` (`id`, `placa`, `tipo_vehiculo`, `ingreso`, `estado`, `salida`, `tiempo_parqueo`, `cobro_servicio`) VALUES
(11, 'SDC655', 3, '0:39:35', 'Salio del parqueo', '1:48:11', 69, '2760'),
(12, 'SDC678', 2, '1:41:52', 'Salio del parqueo', '1:49:24', 8, '160'),
(13, 'FFF111', 1, '1:51:18', 'En parqueo', '', 0, ''),
(14, 'SDC678', 5, '1:52:47', 'Salio del parqueo', '2:03:36', 11, '0'),
(15, 'RTY655', 4, '2:03:21', 'En parqueo', '', 0, '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cat_vehiculo`
--
ALTER TABLE `cat_vehiculo`
  ADD PRIMARY KEY (`id_cat`);

--
-- Indices de la tabla `registro_vehiculos`
--
ALTER TABLE `registro_vehiculos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoria_vehiculos` (`tipo_vehiculo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cat_vehiculo`
--
ALTER TABLE `cat_vehiculo`
  MODIFY `id_cat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `registro_vehiculos`
--
ALTER TABLE `registro_vehiculos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `registro_vehiculos`
--
ALTER TABLE `registro_vehiculos`
  ADD CONSTRAINT `categoria_vehiculos` FOREIGN KEY (`tipo_vehiculo`) REFERENCES `cat_vehiculo` (`id_cat`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
