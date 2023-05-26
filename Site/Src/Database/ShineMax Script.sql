create database ShineMax;
use ShineMax;

create table shinemax(
idShineMax int primary key auto_increment,
filmes varchar(45),
series varchar(45),
animes varchar(45)
);

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
Sobrenome varchar(45),
apelido varchar(45),
idade date,
nacionalidade varchar(45),
genero char(1), constraint chkGenero check (genero in ('Masculino','Feminino')),
email varchar(45), 
constraint chkEmail check (
	email LIKE '%@%' AND email LIKE '%.%' -- valida se tem ponto e arroba
    AND email NOT LIKE '%.@%' AND email NOT LIKE '%@.%' -- Não deixa ponto pos arroba ou arroba pos ponto
    AND email NOT LIKE '%@@%' and email NOT LIKE '%..%' -- Não deixa repetir ponto e arroba
    AND email NOT LIKE '%.' AND email NOT LIKE '.%' AND email NOT LIKE '@%' AND email NOT LIKE '%@' -- Não deixa começar nem terminar com . ou @
    and email NOT LIKE '%[^a-z0-9@._-]%' -- Não deixa caracteres diferentes desses
),
senha varchar(45),
Tipo varchar(45),
constraint chkTipo check (Tipo in('administrador','normal'))
);

create table historico(
idHistorico int auto_increment,
dtHora datetime,
fkShineMax int,
constraint fkShineMax foreign key (fkShineMax) references shinemax(idShineMax),
fkUsuario int,
constraint fkUsuario foreign key (fkUsuario) references usuario(idUsuario),
pkComposta int, 
constraint pkComposta primary key (idHistorico, fkShineMax, fkUsuario)
);

create table grafico(
idGrafico int primary key auto_increment,
gostei DECIMAL,
naoGostei DECIMAL,
aindaNaoSei DECIMAL,
momento DATETIME
);

insert into usuario values
	(null, 'Shine', 'Max', 'ShineMax', '2023-05-22', 'Brasil', null, 'shinemax@shine.max', 'S4in3M@x', 'administrador');

insert into grafico values
	(null, 1, 0, 1, now());

select * from usuario;
select * from grafico;

create table acesso(
idAcesso int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45)
);

create table voto(
idVoto int primary key auto_increment,
nota varchar(45),
constraint chkNota check (nota = 'gostei' or nota = 'naoGostei' or nota = 'aindaNaoSei'),
fkAcesso int,
constraint fkAcesso foreign key (fkAcesso) references acesso(idAcesso)
);

insert into acesso values
	(null,'vivian','vivian.silva@sptech.school','vivian123'),
	(null,'lucas','lucas@gmail.com','1234'),
	(null,'matheus','matheus@gmail.com','1234'),
	(null,'edu','edu@gmail.com','1234');
    
insert into voto values
	(null, 'gostei', 1),
	(null, 'naoGostei', 2),
	(null, 'aindaNaoSei', 3),
	(null, 'gostei', 4);
    
select * from acesso;
select * from voto;

select nota, count(fkAcesso) from voto group by nota;