import { Component, OnInit } from '@angular/core';
import { TurmaHasAlunosService } from '../editar-professor/services/turma-has-alunos.services';

@Component({
  selector: 'app-lista-turma-has-aluno',
  templateUrl: './lista-turma-has-aluno.component.html',
})
export class ListaTurmaHasAlunoComponent {
  alunosNaTurma: any[] = [];
  alunosDisponiveis: any[] = [];
  constructor(private turmaHasAlunosService: TurmaHasAlunosService) {}

  ngOnInit(): void {
    this.carregarAlunosDaTurma();
  }

  carregarAlunosDaTurma() {
    this.turmaHasAlunosService.getAlunosDaTurma().subscribe((data) => {
      console.log('Dados retornados da API:', data); // Verifique a estrutura aqui
      this.alunosNaTurma = data;
    });
  }
}
