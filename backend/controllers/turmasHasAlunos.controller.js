const pool = require("../models/db.js");

const getTurmaHasAluno = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT tha.id AS vinculo_id,t.nome AS turma_nome,a.id AS aluno_id, a.nome AS aluno_nome FROM  turmas_has_alunos tha JOIN  turmas t ON tha.turma_id = t.id JOIN  alunos a ON tha.aluno_id = a.id"
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Erro ao buscar alunos" });
  }
};

module.exports = {
  getTurmaHasAluno,
};
