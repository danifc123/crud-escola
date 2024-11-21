-- Criar o banco de dados
CREATE DATABASE escola;

-- Conectar ao banco de dados
\c escola;

-- Tabela de Disciplinas
CREATE TABLE disciplinas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    codigo VARCHAR(10) NOT NULL,     
    periodo VARCHAR(50) NOT NULL,    
    status BOOLEAN DEFAULT TRUE       
);

-- Tabela de Professores
CREATE TABLE professores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,  
    titulacao VARCHAR(50) NOT NULL,   
    status BOOLEAN DEFAULT TRUE      
);

-- Tabela de Salas
CREATE TABLE salas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    local VARCHAR(100) NOT NULL,   
    capacidade VARCHAR(100) NOT NULL,        
    status BOOLEAN DEFAULT TRUE       
);

-- Tabela de Turmas
CREATE TABLE turmas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    id_disciplina INT REFERENCES disciplinas(id),
    id_professor INT REFERENCES professores(id),
    id_sala INT REFERENCES salas(id),
    dia_semana VARCHAR(20) NOT NULL,        
    horario_inicio TIME NOT NULL,            
    horario_termino TIME NOT NULL,      
    status BOOLEAN DEFAULT TRUE            
);
CREATE TABLE alunos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    data_nascimento DATE NOT NULL,
    status BOOLEAN DEFAULT TRUE
);
