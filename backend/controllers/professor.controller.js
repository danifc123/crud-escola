const pool = require("../models/db");

// Buscar professores por nome
const searchProfessores = async (req, res) => {
  const { nome } = req.query;

  try {
    const result = await pool.query(
      "SELECT * FROM professores WHERE status = TRUE AND nome ILIKE $1",
      [`%${nome}%`]
    );

    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Erro ao buscar professores" });
  }
};

// Listar todos os professores statuss
const getProfessores = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM professores ");

    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Erro ao buscar professores" });
  }
};

// Criar um novo professor
const createProfessor = async (req, res) => {
  const { nome, cpf, titulacao, status } = req.body;

  // Validação básica
  if (!nome || !cpf || !titulacao) {
    return res.status(400).json({
      success: false,
      message: "Nome, CPF e titulação são obrigatórios",
    });
  }

  try {
    const result = await pool.query(
      "INSERT INTO professores (nome, cpf, titulacao, status) VALUES ($1, $2, $3, $4) RETURNING *",
      [nome, cpf, titulacao, status]
    );

    res.status(201).json({
      success: true,
      message: "Professor criado com sucesso",
      data: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Erro ao criar professor" });
  }
};

// Atualizar um professor
const updateProfessor = async (req, res) => {
  const { id } = req.params;
  const { nome, cpf, titulacao, status } = req.body;

  if (!nome || !cpf || !titulacao) {
    return res.status(400).json({
      success: false,
      message: "Nome, CPF e Titulação são obrigatórios para atualização.",
    });
  }

  try {
    const result = await pool.query(
      `UPDATE professores
       SET nome = $1, cpf = $2, titulacao = $3, status = $4
       WHERE id = $5`,
      [nome, cpf, titulacao, status, id]
    );

    if (result.rowCount === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Professor não encontrado." });
    }

    res
      .status(200)
      .json({ success: true, message: "Professor atualizado com sucesso." });
  } catch (error) {
    console.error("Erro ao atualizar professor:", error);
    res
      .status(500)
      .json({ success: false, message: "Erro ao atualizar professor." });
  }
};

// Exclusão lógica de um professor
const deleteProfessor = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "UPDATE professores SET status = FALSE WHERE id = $1",
      [id]
    );

    if (result.rowCount === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Professor não encontrado" });
    }

    res
      .status(200)
      .json({ success: true, message: "Professor excluído com sucesso" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Erro ao excluir professor" });
  }
};

// Reativar um professor
const reativarProfessor = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "UPDATE professores SET status = TRUE WHERE id = $1",
      [id]
    );

    if (result.rowCount === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Professor não encontrado" });
    }

    res
      .status(200)
      .json({ success: true, message: "Professor reativado com sucesso" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Erro ao reativar professor" });
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
