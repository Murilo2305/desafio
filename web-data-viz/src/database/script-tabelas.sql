


/* Madeira: Qualquer tipo */
/* Um sensor por galpao */
/* Cliente pode definir a faixa ideal de umidade nos galpoes */

CREATE DATABASE woodtech;

USE woodtech;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj CHAR(14),
	codigo_ativacao VARCHAR(50)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table galpao (
/* em nossa regra de negócio, um galpao tem apenas um sensor */
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300),
	fk_empresa INT,
	umidade_minideal DECIMAL(5,2),
	umidade_maxideal DECIMAL(5,2), 
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dht11_umidade DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_galpao INT,
	FOREIGN KEY (fk_galpao) REFERENCES galpao(id)
);

insert into empresa (razao_social, codigo_ativacao) values ('Empresa 1', 'ED145B');
insert into empresa (razao_social, codigo_ativacao) values ('Empresa 2', 'A1B2C3');
insert into galpao (descricao, fk_empresa) values ('Galpao de Eucalipto', 1);
insert into galpao (descricao, fk_empresa) values ('Galpao de Carvalho', 2);