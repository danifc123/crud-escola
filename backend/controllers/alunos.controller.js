const pool = require("../models/db.js");

const getAlunos = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM alunos ");
    res.status(200).json(result.rows); // Retorna os dados obtidos
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Erro ao buscar alunos" });
  }
};
// 1. Salvar aluno
const createAluno = async (req, res) => {
  const { nome, email, data_nascimento } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO alunos (nome, email, data_nascimento) VALUES ($1, $2, $3) RETURNING *",
      [nome, email, data_nascimento]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao salvar aluno:", error);
    res.status(500).json({ error: "Erro ao salvar aluno" });
  }
};

// 2. Alterar aluno
const updateAluno = async (req, res) => {
  const { id } = req.params;
  const { nome, email, data_nascimento } = req.body;

  try {
    const result = await pool.query(
      "UPDATE alunos SET nome = $1, email = $2, data_nascimento = $3 WHERE id = $4 RETURNING *",
      [nome, email, data_nascimento, id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Aluno não encontrado" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao alterar aluno:", error);
    res.status(500).json({ error: "Erro ao alterar aluno" });
  }
};

// 3. Excluir aluno (soft delete)
const deleteAluno = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "UPDATE alunos SET status = FALSE WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Aluno não encontrado" });
    }
    res.json({ message: "Aluno excluído com sucesso" });
  } catch (error) {
    console.error("Erro ao excluir aluno:", error);
    res.status(500).json({ error: "Erro ao excluir aluno" });
  }
};

// 4. Pesquisar aluno por nome
const searchAlunos = async (req, res) => {
  const { nome } = req.query;

  try {
    const result = await pool.query(
      "SELECT * FROM alunos WHERE nome ILIKE $1 AND status = TRUE",
      [`%${nome}%`]
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao pesquisar aluno:", error);
    res.status(500).json({ error: "Erro ao pesquisar aluno" });
  }
};

const reativarAluno = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "UPDATE alunos SET status = TRUE WHERE id = $1",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "alunos não encontrado" });
    }

    res.json("alunos reativado com sucesso");
  } catch (error) {
    res.status(500).json({ error: "Erro ao reativar alunos" });
  }
};

module.exports = {
  createAluno,
  updateAluno,
  deleteAluno,
  searchAlunos,
  getAlunos,
  reativarAluno,
};
