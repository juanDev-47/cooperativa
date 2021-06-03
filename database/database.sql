CREATE DATABASE cooperativa;

USE cooperativa;

CREATE TABLE clientes (
  Identificacion bigint(20) NOT NULL,
  Nombre varchar(100) NOT NULL,
  Telefono varchar(13) DEFAULT NULL,
  Correo varchar(30) NOT NULL,
  PRIMARY KEY (Identificacion)
);

CREATE TABLE cuenta_ahorros (
  Numero_cuenta bigint(20) NOT NULL,
  Identificacion bigint(20) NOT NULL,
  Saldo int(11) NOT NULL,
  PRIMARY KEY (Identificacion),
  UNIQUE KEY Numero_cuenta (Numero_cuenta),
  CONSTRAINT cuenta_ahorros_ibfk_1 FOREIGN KEY (Identificacion) REFERENCES clientes (Identificacion)
  );

  CREATE TABLE tarjeta (
  Numero_tarjeta bigint(20) NOT NULL,
  Identificacion bigint(20) NOT NULL,
  Saldo int(11) NOT NULL,
  PRIMARY KEY (Identificacion),
  UNIQUE KEY Numero_tarjeta (Numero_tarjeta),
  CONSTRAINT tarjeta_ibfk_1 FOREIGN KEY (Identificacion) REFERENCES clientes (Identificacion)
);

