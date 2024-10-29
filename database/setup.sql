-- Criar o banco de dados
CREATE DATABASE escola;

-- Conectar ao banco de dados (caso esteja no pgAdmin, pule esta etapa)
\c escola;

-- Tabela de Disciplinas
CREATE TABLE disciplinas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    ativo BOOLEAN DEFAULT TRUE
);

-- Tabela de Professores
CREATE TABLE professores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    ativo BOOLEAN DEFAULT TRUE
);

-- Tabela de Salas
CREATE TABLE salas (
    id SERIAL PRIMARY KEY,
    numero VARCHAR(10) NOT NULL,
    ativo BOOLEAN DEFAULT TRUE
);

-- Tabela de Turmas
CREATE TABLE turmas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    id_disciplina INT REFERENCES disciplinas(id),
    id_professor INT REFERENCES professores(id),
    id_sala INT REFERENCES salas(id),
    ativo BOOLEAN DEFAULT TRUE
);
