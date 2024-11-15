const pool = require("../models/db");

const getTurmas = async (req, res) => {
  try {
    const query = `
      SELECT 
        turmas.id,
        turmas.nome,
        disciplinas.nome AS disciplina_nome,
        professores.nome AS professor_nome,
        salas.nome AS sala_nome,
        turmas.ativo
      FROM 
        turmas
      LEFT JOIN 
        disciplinas ON turmas.id_disciplina = disciplinas.id
      LEFT JOIN 
        professores ON turmas.id_professor = professores.id
      LEFT JOIN 
        salas ON turmas.id_sala = salas.id;
    `;
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao buscar turmas:", error);
    res.status(500).json({ error: "Erro ao buscar turmas" });
  }
};

const createTurma = async (req, res) => {
  const { nome, id_disciplina, id_professor, id_sala } = req.body;

  // Verificar se todos os dados necessários foram fornecidos
  if (!id_disciplina || !id_professor || !id_sala) {
    return res.status(400).json({
      error:
        "Por favor, forneça todos os campos obrigatórios (disciplina, professor, sala).",
    });
  }

  try {
    // Inserir a turma
    const result = await pool.query(
      "INSERT INTO turmas (nome, id_disciplina, id_professor, id_sala) VALUES ($1, $2, $3, $4) RETURNING id",
      [nome, id_disciplina, id_professor, id_sala]
    );

    // Retornar o ID da turma criada
    const turmaId = result.rows[0].id;
    res.status(201).json({ message: "Turma criada com sucesso!", turmaId });
  } catch (error) {
    console.error("Erro ao criar turma:", error);
    res.status(500).json({ error: "Erro ao criar turma" });
  }
};

const updateTurma = async (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  try {
    await pool.query("UPDATE turmas SET nome = $1 WHERE id = $2", [nome, id]);
    res.status(200);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar turma" });
  }
};

const deleteTurma = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "UPDATE turmas SET ativo = FALSE WHERE id = $1",
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
      "UPDATE turmas SET ativo = TRUE WHERE id = $1",
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
  const { nome } = req.query; // Obtém o nome da query string

  try {
    const result = await pool.query(
      "SELECT * FROM turmas WHERE nome ILIKE $1",
      [`%${nome}%`] // Usando ILIKE para busca case-insensitive e operador de similaridade
    );

    res.json(result.rows); // Retorna os professores que correspondem ao nome pesquisado
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar professores" });
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
