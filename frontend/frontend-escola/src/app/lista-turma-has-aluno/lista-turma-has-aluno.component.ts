import { Component, OnInit } from '@angular/core';
import { TurmaHasAlunosService } from '../editar-professor/services/turma-has-alunos.services';

@Component({
  selector: 'app-lista-turma-has-aluno',
  templateUrl: './lista-turma-has-aluno.component.html',
})
export class ListaTurmaHasAlunoComponent implements OnInit {
  alunosNaTurma: any[] = [];
  alunosDisponiveis: any[] = [];
  constructor(private turmaHasAlunosService: TurmaHasAlunosService) {}

  ngOnInit(): void {
    this.carregarAlunosDaTurma();
  }

  carregarAlunosDaTurma(): void {
    this.turmaHasAlunosService.getAlunosDaTurma().subscribe(
      (data) => {
        this.alunosNaTurma = data;
      },
      (error) => {
        console.error('Erro ao carregar alunos da turma:', error);
      }
    );
  }
}
