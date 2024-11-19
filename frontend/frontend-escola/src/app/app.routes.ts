import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProfessoresComponent } from './lista-professores/lista-professores.component'; // Lista de professores
import { AdicionarProfessorComponent } from './adicionar-professor/adicionar-professor.component'; // Adicionar professor
import { ListaDisciplinasComponent } from './lista-disciplinas/lista-disciplinas.component'; // Lista de disciplinas
import { AdicionarDisciplinaComponent } from './adicionar-disciplina/adicionar-disciplina.component'; // Adicionar disciplina
import { ListaTurmasComponent } from './lista-turmas/lista-turmas.component'; // Lista de turmas
import { AdicionarTurmaComponent } from './adicionar-turma/adicionar-turma.component'; // Adicionar turma
import { ListaSalasComponent } from './lista-salas/lista-salas.component'; // Lista de salas
import { AdicionarSalaComponent } from './adicionar-sala/adicionar-sala.component'; // Adicionar sala
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { EditarProfessorComponent } from './editar-professor/editar-professor.component';
import { EditarDisciplinaComponent } from './editar-disciplina/editar-disciplina.component';
import { EditarSalaComponent } from './editar-sala/editar-sala.component';
import { EditarTurmaComponent } from './editar-turma/editar-turma.component';

const routes: Routes = [
  { path: 'pagina-inicial', component: PaginaInicialComponent },

  { path: 'professores', component: ListaProfessoresComponent }, // Rota para lista de professores
  { path: 'disciplinas', component: ListaDisciplinasComponent }, // Rota para lista de disciplinas
  { path: 'turmas', component: ListaTurmasComponent }, // Rota para lista de turmas
  { path: 'salas', component: ListaSalasComponent }, // Rota para adicionar sala

  { path: 'adicionar-professor', component: AdicionarProfessorComponent }, // Rota para adicionar professor
  { path: 'adicionar-disciplina', component: AdicionarDisciplinaComponent }, // Rota para adicionar disciplina
  { path: 'adicionar-turma', component: AdicionarTurmaComponent }, // Rota para adicionar turma
  { path: 'adicionar-sala', component: AdicionarSalaComponent },

  { path: 'editar-professor/:id', component: EditarProfessorComponent },
  { path: 'editar-disciplina/:id', component: EditarDisciplinaComponent },
  { path: 'editar-sala/:id', component: EditarSalaComponent },
  { path: 'editar-turma/:id', component: EditarTurmaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
