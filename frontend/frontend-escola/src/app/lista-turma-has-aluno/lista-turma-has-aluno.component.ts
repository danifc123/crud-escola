import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TurmaHasAlunosService } from '../editar-professor/services/turma-has-alunos.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-turma-has-aluno',
  templateUrl: './lista-turma-has-aluno.component.html',
  styleUrls: ['./lista-turma-has-aluno.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ListaTurmaHasAlunoComponent {
  alunos: any[] = [];
  alunosDisponiveis: any[] = [];
  termoPesquisa: string = '';

  constructor(
    private router: Router,
    private turmaHasAlunosService: TurmaHasAlunosService
  ) {}

  ngOnInit(): void {
    this.carregarAlunosDaTurma();
  }

  carregarAlunosDaTurma() {
    this.turmaHasAlunosService.getAlunosDaTurma().subscribe((data) => {
      console.log('Dados retornados da API:', data); // Verifique a estrutura aqui
      this.alunos = data;
    });
  }
  deleteTurmaHasAluno(id: number) {
    if (confirm('Você realmente deseja excluir este vinculo?')) {
      this.turmaHasAlunosService.deleteTurmaHasAluno(id).subscribe(
        () => {
          alert(' Vinculo excluída com sucesso!');
          this.carregarAlunosDaTurma();
        },
        (error) => {
          alert('Erro ao excluir vinculo: ' + error.message);
        }
      );
    }
  }
  editarTurmaHasAluno(id: number) {
    this.router.navigate(['/editar-turma-has-aluno', id]);
  }
  pesquisarAluno() {
    if (this.termoPesquisa.trim() === '') {
      this.carregarAlunosDaTurma();
    } else {
      this.turmaHasAlunosService
        .searchTurmasHasAlunos(this.termoPesquisa)
        .subscribe(
          (data) => {
            this.alunos = data;
          },
          (error) => {
            alert('Erro ao buscar vinculos: ' + error.message);
          }
        );
    }
  }
}
