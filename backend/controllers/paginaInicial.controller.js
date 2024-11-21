const pool = require("../models/db.js");

const getInicio = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT p.nome AS nome_professor, t.nome AS nome_turma, p.titulacao AS titulacao_professor, s.nome AS nome_sala, p.status AS status_professor FROM professores p JOIN turmas t ON t.id_professor = p.id JOIN salas s ON s.id = t.id_sala"
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar disciplinas" });
  }
};

const getProfessorByName = async (req, res) => {
  const { nome } = req.query;
  try {
    const result = await pool.query(
      "SELECT p.nome AS nome_professor, t.nome AS nome_turma, p.titulacao AS titulacao_professor, s.nome AS nome_sala, p.status AS status_professor " +
        "FROM professores p " +
        "JOIN turmas t ON t.id_professor = p.id " +
        "JOIN salas s ON s.id = t.id_sala " +
        "WHERE p.nome ILIKE $1",
      [`%${nome}%`]
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar professor" });
  }
};

module.exports = {
  getInicio,
  getProfessorByName,
};
