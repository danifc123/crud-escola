const pool = require("../models/db.js");

const getTurmaHasAluno = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM turmas_has_alunos ");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Erro ao buscar alunos" });
  }
};

module.exports = {
  getTurmaHasAluno,
};
