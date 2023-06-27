CREATE TABLE CLIENTE_
(
  cliente_id_ INT NOT NULL,
  dni_ INT NOT NULL,
  nombre_ INT NOT NULL,
  direccion_ INT NOT NULL,
  telefono_ INT NOT NULL,
  PRIMARY KEY (cliente_id_)
);

CREATE TABLE RESERVA_
(
  reserva_id_ INT NOT NULL,
  fecha_inicio_ INT NOT NULL,
  fecha_final_ INT NOT NULL,
  precio_total_ INT NOT NULL,
  cliente_id_ INT NOT NULL,
  cliente_id_ INT NOT NULL,
  PRIMARY KEY (reserva_id_),
  FOREIGN KEY (cliente_id_) REFERENCES CLIENTE_(cliente_id_)
);

CREATE TABLE COCHE_
(
  matricula_ INT NOT NULL,
  modelo_ INT NOT NULL,
  color_ INT NOT NULL,
  marca_ INT NOT NULL,
  precio_hora_ INT NOT NULL,
  PRIMARY KEY (matricula_)
);

CREATE TABLE de
(
  reserva_id_ INT NOT NULL,
  matricula_ INT NOT NULL,
  litros_gasolina_ INT NOT NULL,
  reserva_id_ INT NOT NULL,
  matricula_ INT NOT NULL,
  PRIMARY KEY (reserva_id_, matricula_),
  FOREIGN KEY (reserva_id_) REFERENCES RESERVA_(reserva_id_),
  FOREIGN KEY (matricula_) REFERENCES COCHE_(matricula_)
);