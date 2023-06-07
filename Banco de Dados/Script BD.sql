CREATE DATABASE Drumer_Land;

USE Drumer_Land;

CREATE TABLE Usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(60),
    Email VARCHAR(150),
    Telefone CHAR(11),
    Senha VARCHAR(12)
);

CREATE TABLE Bateria (
	idBateria INT PRIMARY KEY AUTO_INCREMENT,
    Modelo VARCHAR(50),
    Marca VARCHAR(50),
    Preço DOUBLE,
    Tamanho VARCHAR(10),
    Tipo VARCHAR(30),
		CONSTRAINT CHTipo CHECK 
			(Tipo IN('Eletrica', 'Acústica')),
	FKUsuario INT,
		CONSTRAINT FKUsuario_Bateria FOREIGN KEY (FKUsuario)
			REFERENCES Usuario(idUsuario)
);

CREATE TABLE Rudimentos (
	idRudimentos INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50),
    Dificuldade VARCHAR(50),
		CONSTRAINT CHDificuldade CHECK
			(Dificuldade IN('Muito Fácil', 'Fácil', 'Moderado', 'Dificil', 'Muito Dificil')),
	FKUsuario INT,
		CONSTRAINT FKUsuario_Rudimento FOREIGN KEY (FKUsuario)
			REFERENCES Usuario(idUsuario)
);

SELECT * FROM Usuario;

SELECT * FROM Bateria;	
                        
SELECT * FROM Rudimentos;
                        