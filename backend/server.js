const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models/db");

const disciplinasController = require("../backend/controllers/disciplinasController");
const professoresController = require("../backend/controllers/professor.controller");
const turmasController = require("../backend/controllers/turma.controller");
const salasController = require("../backend/controllers/sala.controller.js");
const paginainIcialController = require("../backend/controllers/paginaInicial.controller.js");
const alunosController = require("./controllers/alunos.controller");
const turmasHasAlunosController = require("./controllers/turmasHasAlunos.controller");
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/pagina-inicial", paginainIcialController.getInicio);
app.get(
  "/pagina-inicial/professor",
  paginainIcialController.getProfessorByName
);

app.get("/alunos", alunosController.getAlunos);
app.post("/alunos", alunosController.createAluno);
app.put("/alunos/:id", alunosController.updateAluno);
app.delete("/alunos/:id", alunosController.deleteAluno);
app.put("/alunos/:id/reativar", alunosController.reativarAluno);
app.get("/alunos/search", alunosController.searchAlunos);

app.get("/disciplinas", disciplinasController.getDisciplinas);
app.post("/disciplinas", disciplinasController.createDisciplina);
app.put("/disciplinas/:id", disciplinasController.updateDisciplina);
app.delete("/disciplinas/:id", disciplinasController.deleteDisciplina);
app.put("/disciplinas/:id/reativar", disciplinasController.reativarDisciplina);
app.get("/disciplinas/search", disciplinasController.searchDisciplinas);

app.get("/professores", professoresController.getProfessores);
app.post("/professores", professoresController.createProfessor);
app.put("/professores/:id", professoresController.updateProfessor);
app.delete("/professores/:id", professoresController.deleteProfessor);
app.put("/professores/:id/reativar", professoresController.reativarProfessor);
app.get("/professores/search", professoresController.searchProfessores);

app.get("/turmas", turmasController.getTurmas);
app.post("/turmas", turmasController.createTurma);
app.put("/turmas/:id", turmasController.updateTurma);
app.delete("/turmas/:id", turmasController.deleteTurma);
app.put("/turmas/:id/reativar", turmasController.reativarTurma);
app.get("/turmas/search", turmasController.searchTurmas);

app.get("/salas", salasController.getSalas);
app.post("/salas", salasController.createSala);
app.put("/salas/:id", salasController.updateSala);
app.delete("/salas/:id", salasController.deleteSala);
app.put("/salas/:id/reativar", salasController.reativarSala);
app.get("/salas/search", salasController.searchSalas);

app.get("/turmas-has-alunos", turmasHasAlunosController.getTurmaHasAluno);
app.post(
  "/turmas-has-alunos/vinculo-aluno-turma",
  turmasHasAlunosController.adicionarTurmaHasAluno
);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
