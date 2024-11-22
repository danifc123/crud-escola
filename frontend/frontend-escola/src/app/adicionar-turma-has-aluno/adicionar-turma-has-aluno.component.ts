// import { Component } from '@angular/core';
// import { TurmaService } from '../editar-professor/services/turma.service';
// import { AlunosService } from '../editar-professor/services/alunos.service';
// import { TurmaHasAlunosService } from '../editar-professor/services/turma-has-alunos.services';

// @Component({
//   selector: 'app-adicionar-turma-has-aluno',
//   templateUrl: './adicionar-turma-has-aluno.component.html',
//   styleUrl: './adicionar-turma-has-aluno.component.css',
// })
// export class AdicionarTurmaHasAlunoComponent {
//   turmas: any[] = [];
//   alunos: any[] = [];
//   alunosNaTurma: any[] = [];
//   turmaSelecionada: string = '';
//   relacao = { id_turma: '', id_aluno: '' };

//   constructor(
//     private turmaService: TurmaService,
//     private alunosService: AlunosService,
//     private turmaHasAlunosService: TurmaHasAlunosService
//   ) {}

//   ngOnInit(): void {
//     this.carregarTurmas();
//     this.carregarAlunos();
//   }

//   carregarTurmas() {
//     this.turmaService.getTurmas().subscribe((data) => {
//       this.turmas = data;
//     });
//   }

//   carregarAlunos() {
//     this.alunosService.getAluno().subscribe((data) => {
//       this.alunos = data;
//     });
//   }

//   carregarAlunosPorTurma() {
//     if (!this.turmaSelecionada) return;
//     this.turmaHasAlunosService
//       .getAlunosByTurma(this.turmaSelecionada)
//       .subscribe((data) => {
//         this.alunosNaTurma = data;
//       });
//   }

//   adicionarAluno() {
//     if (!this.relacao.id_turma || !this.relacao.id_aluno) {
//       alert('Por favor, selecione uma turma e um aluno.');
//       return;
//     }

//     this.turmaHasAlunosService.addAlunoToTurma(this.relacao).subscribe(
//       () => {
//         alert('Aluno adicionado à turma com sucesso!');
//         this.carregarAlunosPorTurma();
//       },
//       (error) => {
//         console.error(error);
//         alert('Erro ao adicionar aluno à turma.');
//       }
//     );
//   }

//   removerAluno(id_aluno: string) {
//     this.turmaHasAlunosService
//       .removeAlunoFromTurma(this.turmaSelecionada, id_aluno)
//       .subscribe(
//         () => {
//           alert('Aluno removido da turma com sucesso!');
//           this.carregarAlunosPorTurma();
//         },
//         (error) => {
//           console.error(error);
//           alert('Erro ao remover aluno da turma.');
//         }
//       );
//   }
