CREATE DATABASE Drumer_Land;

USE Drumer_Land;

CREATE TABLE Usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(60),
    Email VARCHAR(150),
    Telefone CHAR(9),
    Senha CHAR(8)
);

CREATE TABLE Bateria (
	idBateria INT PRIMARY KEY AUTO_INCREMENT,
    Modelo VARCHAR(50),
    Marca VARCHAR(50),
    Preço DOUBLE,
    Tamanho FLOAT,
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
			(Dificuldade IN('Muito Fácil', 'Fácil', 'Moderado', 'Dificil', 'Muito Dificil'))
);

CREATE TABLE Treino (
	idTreino INT AUTO_INCREMENT,
    FKUsuario INT,
    FKRudimentos INT,
    Hora_Inicio TIME,
    Hora_Final TIME,
		CONSTRAINT FKUsuario_Treino FOREIGN KEY (FKusuario)
			REFERENCES Usuario(idUsuario),
		CONSTRAINT FKRudimento_Treino FOREIGN KEY (FKRudimentos)
			REFERENCES Rudimentos(idRudimentos),
		CONSTRAINT PKComposta_Rudimento_Usuario_Treino PRIMARY KEY (idTreino, FKUsuario, FKRudimentos)
);

