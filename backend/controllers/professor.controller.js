const pool = require("../models/db");

const searchProfessores = async (req, res) => {
  const { nome } = req.query; // Obtém o nome da query string

  try {
    const result = await pool.query(
      "SELECT * FROM professores WHERE nome ILIKE $1",
      [`%${nome}%`] // Usando ILIKE para busca case-insensitive e operador de similaridade
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar professores" });
  }
};
const getProfessores = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM professores");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar professores" });
  }
};

const createProfessor = async (req, res) => {
  const { nome } = req.body;
  try {
    await pool.query("INSERT INTO professores (nome) VALUES ($1)", [nome]);
    res.status(201);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar professor" });
  }
};

const updateProfessor = async (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;

  try {
    await pool.query("UPDATE professores SET nome = $1 WHERE id = $2", [
      nome,
      id,
    ]);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const deleteProfessor = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "UPDATE professores SET ativo = FALSE WHERE id = $1",
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
const reativarProfessor = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "UPDATE professores SET ativo = TRUE WHERE id = $1",
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
  getProfessores,
  createProfessor,
  updateProfessor,
  deleteProfessor,
  reativarProfessor,
  searchProfessores,
};
