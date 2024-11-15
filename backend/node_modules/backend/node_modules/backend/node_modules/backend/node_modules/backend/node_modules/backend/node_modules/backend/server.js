const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models/db"); // Certifique-se de que "db.js" está configurado corretamente

const disciplinasController = require("../backend/controllers/disciplinasController");
const professoresController = require("../backend/controllers/professor.controller");
const turmasController = require("../backend/controllers/turma.controller");
const salasController = require("../backend/controllers/sala.controller.js");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rotas para disciplinas
app.get("/disciplinas", disciplinasController.getDisciplinas);
app.post("/disciplinas", disciplinasController.createDisciplina);
app.put("/disciplinas/:id", disciplinasController.updateDisciplina);
app.delete("/disciplinas/:id", disciplinasController.deleteDisciplina);
app.put("/disciplinas/:id/reativar", disciplinasController.reativarDisciplina);
app.get("/disciplinas/search", disciplinasController.searchDisciplinas); //filtro para pesquisar os preofessores

// Rotas para professores
app.get("/professores", professoresController.getProfessores);
app.post("/professores", professoresController.createProfessor);
app.put("/professores/:id", professoresController.updateProfessor);
app.delete("/professores/:id", professoresController.deleteProfessor);
app.put("/professores/:id/reativar", professoresController.reativarProfessor); // adicionei esta rota para reativar o professor
app.get("/professores/search", professoresController.searchProfessores); //filtro para pesquisar os preofessores

// Rotas para turmas
app.get("/turmas", turmasController.getTurmas);
app.post("/turmas", turmasController.createTurma);
app.put("/turmas/:id", turmasController.updateTurma);
app.delete("/turmas/:id", turmasController.deleteTurma);
app.put("/turmas/:id/reativar", turmasController.reativarTurma);
app.get("/turmas/search", turmasController.searchTurmas);

// Rotas para salas
app.get("/salas", salasController.getSalas);
app.post("/salas", salasController.createSala);
app.put("/salas/:id", salasController.updateSala);
app.delete("/salas/:id", salasController.deleteSala);
app.put("/salas/:id/reativar", salasController.reativarSala);
app.get("/salas/search", salasController.searchSalas); //filtro para pesquisar os preofessores

// Inicializando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
