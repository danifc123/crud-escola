import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Para fazer requisições HTTP
import { FormsModule } from '@angular/forms'; // Para trabalhar com formulários
import { AppComponent } from './app.component'; // Componente principal
import { AppRoutingModule } from './app.routes'; // Importação das rotas

import { AdicionarProfessorComponent } from './adicionar-professor/adicionar-professor.component'; // Componente para adicionar professor
import { AdicionarDisciplinaComponent } from './adicionar-disciplina/adicionar-disciplina.component'; // Componente para adicionar disciplina
import { AdicionarTurmaComponent } from './adicionar-turma/adicionar-turma.component'; // Componente para adicionar turma
import { AdicionarSalaComponent } from './adicionar-sala/adicionar-sala.component'; // Componente para adicionar sala

import { ListaProfessoresComponent } from './lista-professores/lista-professores.component'; // Componente para lista de professores
import { ListaDisciplinasComponent } from './lista-disciplinas/lista-disciplinas.component'; // Componente para lista de disciplinas
import { ListaTurmasComponent } from './lista-turmas/lista-turmas.component'; // Componente para lista de turmas
import { ListaSalasComponent } from './lista-salas/lista-salas.component'; // Componente para lista de salas

import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';

import { EditarProfessorComponent } from './editar-professor/editar-professor.component';
import { EditarDisciplinaComponent } from './editar-disciplina/editar-disciplina.component';
import { EditarSalaComponent } from './editar-sala/editar-sala.component';
import { EditarTurmaComponent } from './editar-turma/editar-turma.component';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule, // Configuração das rotas
  ],
  providers: [],
  bootstrap: [AppComponent], // Componente raiz da aplicação
})
export class AppModule {}
