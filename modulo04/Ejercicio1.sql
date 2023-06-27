CREATE TABLE PROFESOR
(
  nombre INT NOT NULL,
  especialidad INT NOT NULL,
  email INT NOT NULL,
  profesor_id_ INT NOT NULL,
  PRIMARY KEY (profesor_id_)
);

CREATE TABLE _ALUMNO_
(
  cod_matricula INT NOT NULL,
  nombre INT NOT NULL,
  dni_ INT NOT NULL,
  fecha_nac_ INT NOT NULL,
  email_ INT NOT NULL,
  PRIMARY KEY (cod_matricula)
);

CREATE TABLE CURSO_
(
  cod_curso INT NOT NULL,
  nombre_ INT NOT NULL,
  profesor_id_ INT NOT NULL,
  PRIMARY KEY (cod_curso),
  FOREIGN KEY (profesor_id_) REFERENCES PROFESOR(profesor_id_)
);

CREATE TABLE INSCRIPCION_
(
  cod_matricula_ INT NOT NULL,
  cod_curso_ INT NOT NULL,
  cod_matricula INT NOT NULL,
  cod_curso INT NOT NULL,
  PRIMARY KEY (cod_matricula, cod_curso),
  FOREIGN KEY (cod_matricula) REFERENCES _ALUMNO_(cod_matricula),
  FOREIGN KEY (cod_curso) REFERENCES CURSO_(cod_curso)
);