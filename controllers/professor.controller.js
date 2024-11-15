const pool = require("../models/db");

// Buscar professores por nome
const searchProfessores = async (req, res) => {
  const { nome } = req.query;

  try {
    const result = await pool.query(
      "SELECT * FROM professores WHERE ativo = TRUE AND nome ILIKE $1",
      [`%${nome}%`]
    );

    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Erro ao buscar professores" });
  }
};

// Listar todos os professores ativos
const getProfessores = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM professores WHERE ativo = TRUE");

    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Erro ao buscar professores" });
  }
};

// Criar um novo professor
const createProfessor = async (req, res) => {
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({ success: false, message: "Nome é obrigatório" });
  }

  try {
    const result = await pool.query("INSERT INTO professores (nome, ativo) VALUES ($1, TRUE)", [nome]);

    res.status(201).json({ success: true, message: "Professor criado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Erro ao criar professor" });
  }
};

// Atualizar um professor
const updateProfessor = async (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({ success: false, message: "Nome é obrigatório" });
  }

  try {
    const result = await pool.query(
      "UPDATE professores SET nome = $1 WHERE id = $2 AND ativo = TRUE",
      [nome, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ success: false, message: "Professor não encontrado" });
    }

    res.status(200).json({ success: true, message: "Professor atualizado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Erro ao atualizar professor" });
  }
};

// Exclusão lógica de um professor
const deleteProfessor = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "UPDATE professores SET ativo = FALSE WHERE id = $1",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ success: false, message: "Professor não encontrado" });
    }

    res.status(200).json({ success: true, message: "Professor excluído com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Erro ao excluir professor" });
  }
};

// Reativar um professor
const reativarProfessor = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "UPDATE professores SET ativo = TRUE WHERE id = $1",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ success: false, message: "Professor não encontrado" });
    }

    res.status(200).json({ success: true, message: "Professor reativado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Erro ao reativar professor" });
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
