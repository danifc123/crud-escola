const pool = require("../models/db.js");

const searchDisciplinas = async (req, res) => {
  const { nome } = req.query;

  try {
    const result = await pool.query(
      "SELECT * FROM disciplinas WHERE nome ILIKE $1",
      [`%${nome}%`]
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar disciplinas" });
  }
};
const getDisciplinas = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM disciplinas ");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar disciplinas" });
  }
};

const createDisciplina = async (req, res) => {
  const { nome, codigo, periodo, status } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO disciplinas (nome, codigo, periodo, status) 
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [nome, codigo, periodo, status]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao criar disciplina:", error);
    res.status(500).json({ message: "Erro ao criar disciplina" });
  }
};

const updateDisciplina = async (req, res) => {
  const { id } = req.params;
  const { nome, codigo, periodo, status } = req.body;

  try {
    const result = await pool.query(
      "UPDATE disciplinas SET nome = $1, codigo = $2, periodo = $3, status = $4 WHERE id = $5 RETURNING *",
      [nome, codigo, periodo, status, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Disciplina não encontrada" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao atualizar disciplina:", error);
    res.status(500).json({ error: "Erro ao atualizar disciplina" });
  }
};

const deleteDisciplina = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "UPDATE disciplinas SET status = FALSE WHERE id = $1",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Professor não encontrado" });
    }

    res.status(200).json({ message: "Professor excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir professor" });
  }
};
const reativarDisciplina = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "UPDATE disciplinas SET status = TRUE WHERE id = $1",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Professor não encontrado" });
    }

    res.json("Professor reativado com sucesso");
  } catch (error) {
    res.status(500).json({ error: "Erro ao reativar professor" });
  }
};

module.exports = {
  getDisciplinas,
  createDisciplina,
  updateDisciplina,
  deleteDisciplina,
  reativarDisciplina,
  searchDisciplinas,
};
