CREATE DATABASE api_crud;
USE api_crud;
CREATE TABLE cliente (
 cpf VARCHAR(20)PRIMARY KEY,
nome VARCHAR(50)
);

CREATE TABLE produtos (
cod_barra VARCHAR(50) PRIMARY KEY,
descricao VARCHAR(50),
valor DECIMAL(6,2)
);

CREATE TABLE compra(
cod_compra VARCHAR(50)PRIMARY KEY,
cpf VARCHAR(20),
cod_barra VARCHAR(50),
FOREIGN KEY(cod_compra) REFERENCES cliente(cpf),
FOREIGN KEY(cod_barra) REFERENCES produtos(cod_barra)
)

use api_crud;

CREATE Table Cadastro_Programador(
    id_programador INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (100),
    linguagem_de_Programacao VARCHAR (100),
    tipo_de_programa VARCHAR (100),
    idade INT
);

ALTER TABLE Cadastro_Programador AUTO_INCREMENT = 100;

SELECT id_programador, nome, linguagem_de_Programacao, tipo_de_programa, idade FROM Cadastro_Programador;

