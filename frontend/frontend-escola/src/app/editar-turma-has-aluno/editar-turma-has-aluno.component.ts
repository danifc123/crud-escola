import { Component, OnInit } from '@angular/core';
import { TurmaHasAlunosService } from '../editar-professor/services/turma-has-alunos.services';

@Component({
  selector: 'app-editar-turma-has-aluno',
  templateUrl: './editar-turma-has-aluno.component.html',
  styleUrls: ['./editar-turma-has-aluno.component.css'], // Corrigido o nome do decorator
})
export class EditarTurmaHasAlunoComponent implements OnInit {
  turmas: any[] = [];
  alunos: any[] = [];
  selectedAlunoId: number | null = null; // ID do aluno selecionado
  selectedTurmaId: number | null = null; // ID da turma selecionada

  constructor(private turmaHasAlunosService: TurmaHasAlunosService) {}

  ngOnInit(): void {
    this.carregarAlunosDaTurma();
  }

  carregarAlunosDaTurma(): void {
    this.turmaHasAlunosService.getAlunosDaTurma().subscribe(
      (data) => {
        console.log('Dados retornados da API:', data);
        this.alunos = data;
      },
      (error) => {
        console.error('Erro ao carregar alunos:', error);
        alert('Erro ao carregar a lista de alunos.');
      }
    );
  }

  updateTurmaHasAlunos(): void {
    if (this.selectedAlunoId && this.selectedTurmaId) {
      const relacao = {
        turma_id: this.selectedTurmaId,
        aluno_id: this.selectedAlunoId,
      };

      this.turmaHasAlunosService
        .updateTurmaHasAlunos(this.selectedAlunoId, this.selectedTurmaId)
        .subscribe(
          () => {
            alert('Vínculo atualizado com sucesso!');
            this.carregarAlunosDaTurma();
          },
          (error) => {
            console.error('Erro ao atualizar vínculo:', error);
            alert('Erro ao atualizar vínculo.');
          }
        );
    } else {
      alert('Por favor, selecione uma turma e um aluno.');
    }
  }
}
