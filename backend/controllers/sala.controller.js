const pool = require("../models/db");

const getSalas = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM salas");
    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao buscar salas:", error);
    res.status(500).json({ error: "Erro ao buscar salas" });
  }
};

const createSala = async (req, res) => {
  const { nome, local, capacidade, status } = req.body;

  if (!nome || !local || !capacidade) {
    return res.status(400).json({
      success: false,
      message: "Nome, Local e Capacidade são obrigatórios",
    });
  }

  try {
    const result = await pool.query(
      "INSERT INTO salas (nome, local, capacidade, status) VALUES ($1, $2, $3, $4) RETURNING *",
      [nome, local, capacidade, status]
    );
    res.status(201).json({
      success: true,
      message: "Sala criado com sucesso",
      data: result.rows[0],
    });

    // Respondendo com a nova sala criada
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Erro ao criar salas" });
  }
};

const updateSala = async (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  try {
    await pool.query("UPDATE salas SET nome = $1 WHERE id = $2", [nome, id]);
    res.status(200).json({ message: "Sala atualizada com sucesso" }); // Retorno como JSON
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar sala" });
  }
};

const deleteSala = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("UPDATE salas SET ativo = FALSE WHERE id = $1", [id]);
    res.status(200).json({ message: "Sala excluída com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir sala" });
  }
};

const reativarSala = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("UPDATE salas SET ativo = TRUE WHERE id = $1", [id]);
    res.status(200).json({ message: "Sala reativada com sucesso" });
  } catch (error) {
    console.error("Erro ao reativar sala:", error);
    res.status(500).json({ error: "Erro ao reativar sala" });
  }
};

const searchSalas = async (req, res) => {
  const { nome } = req.query;
  try {
    const result = await pool.query("SELECT * FROM salas WHERE nome ILIKE $1", [
      `%${nome}%`,
    ]);

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar salas" });
  }
};

module.exports = {
  getSalas,
  createSala,
  updateSala,
  deleteSala,
  reativarSala,
  searchSalas,
};
