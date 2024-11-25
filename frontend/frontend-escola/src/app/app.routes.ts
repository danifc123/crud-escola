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
import { ReativarDisciplinaComponent } from './reativar-disciplina/reativar-disciplina.component';
import { ReativarProfessorComponent } from './reativar-professor/reativar-professor.component';
import { ReativarTurmaComponent } from './reativar-turma/reativar-turma.component';
import { ReativarSalaComponent } from './reativar-sala/reativar-sala.component';
import { AdicionarAlunoComponent } from './adicionar-aluno/adicionar-aluno.component';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';
import { ReativarAlunosComponent } from './reativar-alunos/reativar-alunos.component';
import { AdicionarTurmaHasAlunoComponent } from './adicionar-turma-has-aluno/adicionar-turma-has-aluno.component';
// import { EditarTurmaHasAlunoComponent } from './editar-turma-has-aluno/editar-turma-has-aluno.component';
import { ListaTurmaHasAlunoComponent } from './lista-turma-has-aluno/lista-turma-has-aluno.component';

const routes: Routes = [
  { path: 'pagina-inicial', component: PaginaInicialComponent },

  { path: 'professores', component: ListaProfessoresComponent },
  { path: 'disciplinas', component: ListaDisciplinasComponent },
  { path: 'turmas', component: ListaTurmasComponent },
  { path: 'salas', component: ListaSalasComponent },
  { path: 'alunos', component: ListaAlunosComponent },

  { path: 'adicionar-professor', component: AdicionarProfessorComponent },
  { path: 'adicionar-disciplina', component: AdicionarDisciplinaComponent },
  { path: 'adicionar-turma', component: AdicionarTurmaComponent },
  { path: 'adicionar-sala', component: AdicionarSalaComponent },
  { path: 'adicionar-aluno', component: AdicionarAlunoComponent },

  { path: 'editar-professor/:id', component: EditarProfessorComponent },
  { path: 'editar-disciplina/:id', component: EditarDisciplinaComponent },
  { path: 'editar-sala/:id', component: EditarSalaComponent },
  { path: 'editar-turma/:id', component: EditarTurmaComponent },
  { path: 'editar-aluno/:id', component: EditarAlunoComponent },

  { path: 'reativar-disciplina', component: ReativarDisciplinaComponent },
  { path: 'reativar-professor', component: ReativarProfessorComponent },
  { path: 'reativar-turma', component: ReativarTurmaComponent },
  { path: 'reativar-sala', component: ReativarSalaComponent },
  { path: 'reativar-aluno', component: ReativarAlunosComponent },

  { path: 'turma-has-alunos', component: ListaTurmaHasAlunoComponent },
  {
    path: 'adicionar-turma-has-aluno',
    component: AdicionarTurmaHasAlunoComponent,
  },
  // {
  //   path: 'editar-turma-has-aluno/:id',
  //   component: EditarTurmaHasAlunoComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
