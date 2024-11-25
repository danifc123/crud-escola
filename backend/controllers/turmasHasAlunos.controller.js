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
    const { turma_id, aluno_id } = req.body;

    if (!turma_id || !aluno_id) {
      return res
        .status(400)
        .json({ error: "Faltando parâmetros: turma_id ou aluno_id" });
    }

    const turmaResult = await pool.query("SELECT * FROM turmas WHERE id = $1", [
      turma_id,
    ]);
    if (turmaResult.rows.length === 0) {
      return res.status(404).json({ error: "Turma não encontrada" });
    }

    const alunoResult = await pool.query("SELECT * FROM alunos WHERE id = $1", [
      aluno_id,
    ]);
    if (alunoResult.rows.length === 0) {
      return res.status(404).json({ error: "Aluno não encontrado" });
    }

    await pool.query(
      "INSERT INTO turmas_has_alunos (turma_id, aluno_id) VALUES ($1, $2)",
      [turma_id, aluno_id]
    );

    res.status(200).json({ message: "Vínculo criado com sucesso!" });
  } catch (error) {
    console.error("Erro ao vincular turma e alunos:", error);
    res.status(500).json({
      error: "Erro ao vincular turma e alunos",
      details: error.message,
    });
  }
};

const deleteTurmaHasAluno = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM turmas_has_alunos WHERE id = $1",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "vinculo não encontrado" });
    }

    res.status(200).json({ message: "vinculo excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir vinculo" });
  }
};
const atualizarTurmaHasAluno = async (req, res) => {
  try {
    const { id } = req.params; // ID do vínculo
    const { turma_id, aluno_id } = req.body; // Novos valores

    if (!turma_id || !aluno_id) {
      return res
        .status(400)
        .json({ error: "Faltando parâmetros: turma_id ou aluno_id" });
    }

    const result = await pool.query(
      "UPDATE turmas_has_alunos SET turma_id = $1, aluno_id = $2 WHERE id = $3",
      [turma_id, aluno_id, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Vínculo não encontrado" });
    }

    res.status(200).json({ message: "Vínculo atualizado com sucesso!" });
  } catch (error) {
    console.error("Erro ao atualizar vínculo:", error);
    res.status(500).json({ error: "Erro ao atualizar vínculo" });
  }
};

module.exports = {
  getTurmaHasAluno,
  adicionarTurmaHasAluno,
  deleteTurmaHasAluno,
  atualizarTurmaHasAluno,
};
