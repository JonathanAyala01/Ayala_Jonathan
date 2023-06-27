
CREATE TABLE PAIS (
  pais_id INT PRIMARY KEY,
  nombre_pais VARCHAR(100) UNIQUE
);


CREATE TABLE PROVINCIA (
  provincia_id INT PRIMARY KEY,
  nombre_provincia VARCHAR(100),
  pais_id INT,
  FOREIGN KEY (pais_id) REFERENCES PAIS(pais_id)
);


CREATE TABLE LOCALIDAD (
  codigo_localidad INT PRIMARY KEY,
  nombre VARCHAR(100),
  codigo_postal VARCHAR(10),
  provincia_id INT,
  FOREIGN KEY (provincia_id) REFERENCES PROVINCIA(provincia_id)
);


CREATE TABLE EMPLEADO (
  empleado_id INT PRIMARY KEY,
  dni VARCHAR(20),
  nombre VARCHAR(100),
  telefono VARCHAR(20),
  email VARCHAR(100),
  fecha_alta DATE,
  localidad_id INT,
  FOREIGN KEY (localidad_id) REFERENCES LOCALIDAD(codigo_localidad)
);
