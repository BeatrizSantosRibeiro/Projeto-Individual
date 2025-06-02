create database Projeto_Individual;

use Projeto_Individual;

CREATE TABLE Usuarios (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50) unique,
	senha VARCHAR(50)
    );
  
    select*from Usuarios;
    
    create table Quiz (
    id_quiz int primary key auto_increment,
    nome varchar(50),
    qtdQuestoes int,
    ndificuldade varchar(50),
    descricao varchar(100),
    constraint ckndificuldade check(ndificuldade in('facil','Médio','Dificil'))
    );

    select*from Quiz;
    
    select date_format(data_jogada, '%y%m%d') as data, pontuacao
    from TentativaQuiz
    where fkUsuarios = 1
    and fkUsuarios != 1
    order by data_jogada desc
    limit 5;
    
    create table TentativaQuiz (
    idQuiz int auto_increment,
    fkUsuarios int,
    fkQuiz int,
    pontuacao int,
    data_jogada datetime default current_timestamp,
    constraint pkComposta primary key(idQuiz,fkUsuarios,fkQuiz),
    constraint fkUsuarioQuiz foreign key(fkUsuarios) references Usuarios(id),
    constraint fkquiztentativa foreign key(fkQuiz) references Quiz(id_quiz)
    );
    
    select*from TentativaQuiz;
    
    create table Memoria(
    idMemoria int primary key auto_increment,
    nome varchar(50),
    qtdCartas int,
    dificuldade varchar(50),
    descricao varchar(100),
    constraint ckdificuldade check(dificuldade in('facil','Médio','Dificil'))
    );
    
     create table TentativaMemoria(
    idjogoM int auto_increment,
    fkUsuarios int,
    tempo int,
	fkMemoria int,
    data_jogada datetime default current_timestamp,
    constraint pkComposta primary key(idJogoM,fkUsuarios,fkMemoria),
    constraint fkUsuariotentativa foreign key(fkUsuarios) references Usuarios(id),
    constraint fkjogotentativa foreign key(fkMemoria) references Memoria(idMemoria)
    );
    
select*from TentativaMemoria;

SELECT tempo
        FROM TentativaMemoria
        WHERE fkUsuarios != 1
        ORDER BY tempo DESC
        LIMIT 10;

insert into Quiz(nome,qtdQuestoes,ndificuldade,descricao) values
('Conhecimentos sobre o jogo',10,'médio','Quiz para testar seus conhecimentos a respeito do jogo "Zelda Breathof The wild"');

insert into Memoria(nome,qtdCartas,dificuldade,descricao) values
('Personagens',24,'médio','Jogo da memória com cards especificos de personagens de Zelda"');

select last(tempo)from TentativaMemoria 
    where fkUsuarios = 1;
    
SELECT COUNT(*) AS total FROM TentativaQuiz WHERE fkUsuarios = 1;

 SELECT pontuacao as ultimapontuacao
    FROM TentativaQuiz
    WHERE fkUsuarios = 1
    ORDER BY pontuacao DESC
    LIMIT 1;
    
    select truncate(avg(tempo),1) as tempomedio from TentativaMemoria
    where fkUsuarios = 1;