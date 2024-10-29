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
  const { numero } = req.body;
  try {
    await pool.query("INSERT INTO salas (numero) VALUES ($1)", [numero]);
    res.status(201);
  } catch (error) {
    console.error("Erro ao criar sala:", error);
    res.status(500);
  }
};

const updateSala = async (req, res) => {
  const { id } = req.params;
  const { numero } = req.body;
  try {
    await pool.query("UPDATE salas SET numero = $1 WHERE id = $2", [
      numero,
      id,
    ]);
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
  const { nome } = req.query; // Obtém o numero da query string

  try {
    const result = await pool.query(
      "SELECT * FROM salas WHERE numero ILIKE $1",
      [`%${nome}%`]
    );

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
