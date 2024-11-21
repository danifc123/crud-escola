const pool = require("../models/db");

const getTurmas = async (req, res) => {
  try {
    const query = `SELECT * from turmas`;
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao buscar turmas:", error);
    res.status(500).json({ error: "Erro ao buscar turmas" });
  }
};

const createTurma = async (req, res) => {
  const {
    nome,
    id_disciplina,
    id_professor,
    id_sala,
    dia_semana,
    horario_inicio,
    horario_termino,
  } = req.body;

  if (
    !nome ||
    !id_disciplina ||
    !id_professor ||
    !id_sala ||
    !dia_semana ||
    !horario_inicio ||
    !horario_termino
  ) {
    return res.status(400).json({
      success: false,
      message:
        "Nome, id_disciplina, id_professor, id_sala, dia_semana, horario_inicio e horario_termino são obrigatórios",
    });
  }

  try {
    const result = await pool.query(
      "INSERT INTO turmas (nome, id_disciplina, id_professor, id_sala, dia_semana, horario_inicio, horario_termino) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        nome,
        id_disciplina,
        id_professor,
        id_sala,
        dia_semana,
        horario_inicio,
        horario_termino,
      ]
    );

    res.status(201).json({
      success: true,
      message: "Turma criada com sucesso",
      data: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Erro ao criar turma" });
  }
};

const updateTurma = async (req, res) => {
  const { id } = req.params;
  const {
    nome,
    id_disciplina,
    id_professor,
    id_sala,
    dia_semana,
    horario_inicio,
    horario_termino,
  } = req.body;

  if (
    !nome ||
    !id_disciplina ||
    !id_professor ||
    !id_sala ||
    !dia_semana ||
    !horario_inicio ||
    !horario_termino
  ) {
    return res.status(400).json({
      success: false,
      message: "Todos os campos são obrigatórios para atualização.",
    });
  }

  try {
    const result = await pool.query(
      `UPDATE turmas
       SET nome = $1, id_disciplina = $2, id_professor = $3, id_sala = $4, 
           dia_semana = $5, horario_inicio = $6, horario_termino = $7
       WHERE id = $8`,
      [
        nome,
        id_disciplina,
        id_professor,
        id_sala,
        dia_semana,
        horario_inicio,
        horario_termino,
        id,
      ]
    );

    if (result.rowCount === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Turma não encontrada." });
    }

    res
      .status(200)
      .json({ success: true, message: "Turma atualizada com sucesso." });
  } catch (error) {
    console.error("Erro ao atualizar turma:", error);
    res
      .status(500)
      .json({ success: false, message: "Erro ao atualizar turma." });
  }
};

const deleteTurma = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "UPDATE turmas SET status = FALSE WHERE id = $1",
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
      "UPDATE turmas SET status = TRUE WHERE id = $1",
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
  const { nome } = req.query;

  try {
    const result = await pool.query(
      "SELECT * FROM turmas WHERE nome ILIKE $1",
      [`%${nome}%`]
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar turmas" });
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
