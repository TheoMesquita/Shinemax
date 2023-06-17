drop database ShineMax;
create database ShineMax;
use ShineMax;

create table shinemax(
idShineMax int primary key auto_increment,
filmes varchar(45),
series varchar(45),
animes varchar(45)
);

create table voto(
idVoto int primary key auto_increment,
nota varchar(45),
constraint chkNota check (nota = 'gostei' or nota = 'naoGostei' or nota = 'aindaNaoSei'),
fkVotoShineMax int,
constraint fkVotoShineMax foreign key (fkVotoShineMax) references shinemax(idShineMax)
);

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
Sobrenome varchar(45),
apelido varchar(45),
idade date,
nacionalidade varchar(45),
genero char(10), constraint chkGenero check (genero in ('Masculino','Feminino')),
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
constraint chkTipo check (Tipo in('administrador','normal')),
fkVoto int,
constraint fkVoto foreign key (fkVoto) references voto(idVoto)
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

insert into usuario values
	(null, 'Shine', 'Max', 'ShineMax', '2003-09-29', 'Brasil', null, 'shinemax@shine.max', 'S4in3M@x', 'administrador', null);

select * from usuario;

    
insert into voto values
	(null, 'gostei', null),
	(null, 'NaoGostei', null),
	(null, 'aindaNaoSei', null);

select * from voto;

select nota, count(nota) from voto group by nota order by nota;