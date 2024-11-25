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
const adicionarTurmaHasAluno = async (req, res) => {
  try {
    // Desestrutura os valores de turma_id e aluno_id a partir do corpo da requisição
    const { turma_id, aluno_id } = req.body;

    // Verificar se os parâmetros foram passados corretamente
    if (!turma_id || !aluno_id) {
      return res
        .status(400)
        .json({ error: "Faltando parâmetros: turma_id ou aluno_id" });
    }

    // Verifica se a turma existe no banco de dados
    const turmaResult = await pool.query("SELECT * FROM turmas WHERE id = $1", [
      turma_id,
    ]);
    if (turmaResult.rows.length === 0) {
      return res.status(404).json({ error: "Turma não encontrada" });
    }

    // Verifica se o aluno existe no banco de dados
    const alunoResult = await pool.query("SELECT * FROM alunos WHERE id = $1", [
      aluno_id,
    ]);
    if (alunoResult.rows.length === 0) {
      return res.status(404).json({ error: "Aluno não encontrado" });
    }

    // Se ambos existem, realiza a inserção na tabela turmas_has_alunos
    await pool.query(
      "INSERT INTO turmas_has_alunos (turma_id, aluno_id) VALUES ($1, $2)",
      [turma_id, aluno_id]
    );

    res.status(200).json({ message: "Vínculo criado com sucesso!" });
  } catch (error) {
    // Logando o erro detalhado no servidor
    console.error("Erro ao vincular turma e alunos:", error);
    res
      .status(500)
      .json({
        error: "Erro ao vincular turma e alunos",
        details: error.message,
      });
  }
};

module.exports = {
  getTurmaHasAluno,
  adicionarTurmaHasAluno,
};
