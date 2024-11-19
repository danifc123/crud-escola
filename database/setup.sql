-- Criar o banco de dados
CREATE DATABASE escola;

-- Conectar ao banco de dados
\c escola;

-- Tabela de Disciplinas
CREATE TABLE disciplinas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    codigo VARCHAR(10) NOT NULL,      -- Novo campo: código com letras
    periodo VARCHAR(50) NOT NULL,     -- Novo campo: período
    status BOOLEAN DEFAULT TRUE       -- Campo atualizado para "status"
);

-- Tabela de Professores
CREATE TABLE professores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,  -- Novo campo: CPF com valor único
    titulacao VARCHAR(50) NOT NULL,   -- Novo campo: titulação
    status BOOLEAN DEFAULT TRUE       -- Campo atualizado para "status"
);

-- Tabela de Salas
CREATE TABLE salas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    local VARCHAR(100) NOT NULL,      -- Novo campo: local
    capacidade INT NOT NULL,          -- Novo campo: capacidade
    status BOOLEAN DEFAULT TRUE       -- Campo atualizado para "status"
);

-- Tabela de Turmas
CREATE TABLE turmas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    id_disciplina INT REFERENCES disciplinas(id),
    id_professor INT REFERENCES professores(id),
    id_sala INT REFERENCES salas(id),
    dia_semana VARCHAR(20) NOT NULL,         -- Novo campo: dia da semana
    horario_inicio TIME NOT NULL,            -- Novo campo: horário de início
    horario_termino TIME NOT NULL,           -- Novo campo: horário de término
    status BOOLEAN DEFAULT TRUE              -- Campo atualizado para "status"
);
