const pool = require("../models/db.js"); // Importar a conexão com o banco de dados

const searchDisciplinas = async (req, res) => {
  const { nome } = req.query; // Obtém o nome da query string

  try {
    const result = await pool.query(
      "SELECT * FROM disciplinas WHERE nome ILIKE $1",
      [`%${nome}%`] // Usando ILIKE para busca case-insensitive e operador de similaridade
    );

    res.json(result.rows); // Retorna os professores que correspondem ao nome pesquisado
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar professores" });
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
  const { nome } = req.body;
  try {
    await pool.query("INSERT INTO disciplinas (nome) VALUES ($1)", [nome]);
    res.status(201);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar disciplina" });
  }
};

const updateDisciplina = async (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  try {
    await pool.query("UPDATE disciplinas SET nome = $1 WHERE id = $2", [
      nome,
      id,
    ]);
    res.status(200);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar disciplina" });
  }
};

const deleteDisciplina = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "UPDATE disciplinas SET ativo = FALSE WHERE id = $1",
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
      "UPDATE disciplinas SET ativo = TRUE WHERE id = $1",
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
