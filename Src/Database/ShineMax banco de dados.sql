create database ShineMax;
use ShineMax;

create table shinemax(
idShineMax int primary key auto_increment,
filmes varchar(45),
series varchar(45),
animes varchar(45)
);

create table conta(
idConta int primary key auto_increment,
apelido varchar(45),
email varchar(45), constraint chkEmail check (email in('@','.')),
senha varchar(45),
Tipo varchar(45),
constraint chkTipo check (Tipo in('administrador','normal')),
fkShineMax int,
constraint fkShineMax foreign key (fkShineMax) references shinemax(idShineMax)
);

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
sobrenome varchar(45),
idade int,
genero char(1), constraint chkGenero check (genero in ('m','f'))
);

alter table conta add column fkUsuario int, add constraint fkUsuario foreign key (fkUsuario) references usuario(idUsuario);

insert into shinemax values
	(null, 'Creed III', 'Peaky Blinders', ''),
	(null, 'Carros 3', 'The Last of Us', ''),
	(null, 'Avatar', 'Flash', '');
    
select * from shineMax;

insert into usuario values
	(null, 'Vivian', 'Silva', 20, 'f'),
	(null, 'Fernando', 'Brandão', 30, 'm');
    
select * from usuario;

insert into conta values
	(null, 'Vivian', 'vivian.silva@sptech.school', 'vivi123', 'administrador', 2, 1),
	(null, 'Brandão', 'fernando.brandao@sptech.school', 'brandao123', 'normal', 1, 2);

select * from conta;

select * from shinemax join conta on idShineMax = fkShineMax join usuario on fkUsuario = idUsuario;