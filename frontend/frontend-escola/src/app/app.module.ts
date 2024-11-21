import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';

import { AdicionarProfessorComponent } from './adicionar-professor/adicionar-professor.component';
import { AdicionarDisciplinaComponent } from './adicionar-disciplina/adicionar-disciplina.component';
import { AdicionarTurmaComponent } from './adicionar-turma/adicionar-turma.component';
import { AdicionarSalaComponent } from './adicionar-sala/adicionar-sala.component';

import { ListaProfessoresComponent } from './lista-professores/lista-professores.component';
import { ListaDisciplinasComponent } from './lista-disciplinas/lista-disciplinas.component';
import { ListaTurmasComponent } from './lista-turmas/lista-turmas.component';
import { ListaSalasComponent } from './lista-salas/lista-salas.component';

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

@NgModule({
  declarations: [
    AppComponent,

    AdicionarDisciplinaComponent,
    AdicionarTurmaComponent,
    AdicionarProfessorComponent,
    AdicionarSalaComponent,

    PaginaInicialComponent,

    ListaSalasComponent,
    ListaProfessoresComponent,
    ListaDisciplinasComponent,
    ListaTurmasComponent,

    EditarProfessorComponent,
    EditarDisciplinaComponent,
    EditarSalaComponent,
    EditarTurmaComponent,

    ReativarDisciplinaComponent,
    ReativarProfessorComponent,
    ReativarDisciplinaComponent,
    ReativarTurmaComponent,
    ReativarSalaComponent,

    AdicionarAlunoComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
