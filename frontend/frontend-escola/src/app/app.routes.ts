import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProfessoresComponent } from './lista-professores/lista-professores.component';
import { AdicionarProfessorComponent } from './adicionar-professor/adicionar-professor.component';
import { ListaDisciplinasComponent } from './lista-disciplinas/lista-disciplinas.component';
import { AdicionarDisciplinaComponent } from './adicionar-disciplina/adicionar-disciplina.component';
import { ListaTurmasComponent } from './lista-turmas/lista-turmas.component';
import { AdicionarTurmaComponent } from './adicionar-turma/adicionar-turma.component';
import { ListaSalasComponent } from './lista-salas/lista-salas.component';
import { AdicionarSalaComponent } from './adicionar-sala/adicionar-sala.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { EditarProfessorComponent } from './editar-professor/editar-professor.component';
import { EditarDisciplinaComponent } from './editar-disciplina/editar-disciplina.component';
import { EditarSalaComponent } from './editar-sala/editar-sala.component';
import { EditarTurmaComponent } from './editar-turma/editar-turma.component';

const routes: Routes = [
  { path: 'pagina-inicial', component: PaginaInicialComponent },

  { path: 'professores', component: ListaProfessoresComponent },
  { path: 'disciplinas', component: ListaDisciplinasComponent },
  { path: 'turmas', component: ListaTurmasComponent },
  { path: 'salas', component: ListaSalasComponent },

  { path: 'adicionar-professor', component: AdicionarProfessorComponent },
  { path: 'adicionar-disciplina', component: AdicionarDisciplinaComponent },
  { path: 'adicionar-turma', component: AdicionarTurmaComponent },
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
