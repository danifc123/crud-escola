import { Component } from '@angular/core';
import { TurmaHasAlunosService } from '../editar-professor/services/turma-has-alunos.services';

@Component({
  selector: 'app-editar-turma-has-aluno',
  templateUrl: './editar-turma-has-aluno.component.html',
  styleUrl: './editar-turma-has-aluno.component.css',
})
export class EditarTurmaHasAlunoComponent {
  turmas: any[] = [];

  constructor(private turmaHasAlunosService: TurmaHasAlunosService) {}

  // editarTurmaHasAluno(id: number) {
  //   const turma_id = prompt('Digite o novo ID da turma:');
  //   const aluno_id = prompt('Digite o novo ID do aluno:');

  //   if (turma_id && aluno_id) {
  //     this.turmaHasAlunosService
  //       .editarTurmaHasAluno(id, { turma_id, aluno_id })
  //       .subscribe(
  //         () => {
  //           alert('Vínculo atualizado com sucesso!');
  //           this.carregarAlunosDaTurma();
  //         },
  //         (error) => {
  //           alert('Erro ao atualizar vínculo: ' + error.message);
  //         }
  //       );
  //   }
  // }
}
