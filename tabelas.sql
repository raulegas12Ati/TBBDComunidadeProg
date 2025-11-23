
use api_crud;

CREATE Table CadastroProgramador(
    id_programador INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (100),
    linguagemDeProgramacao VARCHAR (100),
    areaDeAtuacao VARCHAR (100),
    idade INT
);

ALTER TABLE CadastroProgramador AUTO_INCREMENT = 100;

SELECT id_programador, nome, linguagemDeProgramacao, areaDeAtuacao, idade FROM CadastroProgramador;

ALTER TABLE CadastroProgramador
ADD senha int;


