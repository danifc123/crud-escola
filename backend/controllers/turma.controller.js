const pool = require("../models/db");

const getTurmas = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM turmas");
    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao buscar turmas:", error);
    res.status(500).json({ error: "Erro ao buscar turmas" });
  }
};

const createTurma = async (req, res) => {
  const { nome } = req.body;
  try {
    await pool.query("INSERT INTO turmas (nome) VALUES ($1)", [nome]);
    res.status(201);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar turma" });
  }
};

const updateTurma = async (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  try {
    await pool.query("UPDATE turmas SET nome = $1 WHERE id = $2", [nome, id]);
    res.status(200);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar turma" });
  }
};

const deleteTurma = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "UPDATE turmas SET ativo = FALSE WHERE id = $1",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Turmas não encontrado" });
    }

    res.status(200).json({ message: "Turmas excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir turmas" });
  }
};

const reativarTurma = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "UPDATE turmas SET ativo = TRUE WHERE id = $1",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "turma não encontrada" });
    }

    res.json("Turma reativada com sucesso");
  } catch (error) {
    res.status(500).json({ error: "Erro ao reativar turma" });
  }
};

const searchTurmas = async (req, res) => {
  const { nome } = req.query; // Obtém o nome da query string

  try {
    const result = await pool.query(
      "SELECT * FROM turmas WHERE nome ILIKE $1",
      [`%${nome}%`] // Usando ILIKE para busca case-insensitive e operador de similaridade
    );

    res.json(result.rows); // Retorna os professores que correspondem ao nome pesquisado
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar professores" });
  }
};

module.exports = {
  getTurmas,
  createTurma,
  updateTurma,
  deleteTurma,
  searchTurmas,
  reativarTurma,
};
