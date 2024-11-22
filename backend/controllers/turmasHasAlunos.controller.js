const pool = require("../models/db");

// Adicionar um aluno a uma turma
const addAlunoToTurma = async (req, res) => {
  const { id_turma, id_aluno } = req.body;

  if (!id_turma || !id_aluno) {
    return res
      .status(400)
      .json({
        success: false,
        message: "id_turma e id_aluno são obrigatórios",
      });
  }

  try {
    const query = `INSERT INTO turmas_has_alunos (id_turma, id_aluno) VALUES ($1, $2) RETURNING *`;
    const result = await pool.query(query, [id_turma, id_aluno]);

    res.status(201).json({
      success: true,
      message: "Aluno adicionado à turma com sucesso",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Erro ao adicionar aluno à turma:", error);
    res
      .status(500)
      .json({ success: false, message: "Erro ao adicionar aluno à turma" });
  }
};

// Listar alunos de uma turma
const getAlunosByTurma = async (req, res) => {
  const { id_turma } = req.params;

  try {
    const query = `
      SELECT a.id, a.nome, a.email, tha.data_matricula
      FROM turmas_has_alunos tha
      JOIN alunos a ON tha.id_aluno = a.id
      WHERE tha.id_turma = $1
    `;
    const result = await pool.query(query, [id_turma]);

    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao listar alunos da turma:", error);
    res
      .status(500)
      .json({ success: false, message: "Erro ao listar alunos da turma" });
  }
};

// Remover um aluno de uma turma
const removeAlunoFromTurma = async (req, res) => {
  const { id_turma, id_aluno } = req.params;

  try {
    const query = `DELETE FROM turmas_has_alunos WHERE id_turma = $1 AND id_aluno = $2`;
    const result = await pool.query(query, [id_turma, id_aluno]);

    if (result.rowCount === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Associação não encontrada" });
    }

    res.status(200).json({
      success: true,
      message: "Aluno removido da turma com sucesso",
    });
  } catch (error) {
    console.error("Erro ao remover aluno da turma:", error);
    res
      .status(500)
      .json({ success: false, message: "Erro ao remover aluno da turma" });
  }
};

// Listar turmas de um aluno
const getTurmasByAluno = async (req, res) => {
  const { id_aluno } = req.params;

  try {
    const query = `
      SELECT t.id, t.nome, t.dia_semana, t.horario_inicio, t.horario_termino
      FROM turmas_has_alunos tha
      JOIN turmas t ON tha.id_turma = t.id
      WHERE tha.id_aluno = $1
    `;
    const result = await pool.query(query, [id_aluno]);

    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao listar turmas do aluno:", error);
    res
      .status(500)
      .json({ success: false, message: "Erro ao listar turmas do aluno" });
  }
};

module.exports = {
  addAlunoToTurma,
  getAlunosByTurma,
  removeAlunoFromTurma,
  getTurmasByAluno,
};
