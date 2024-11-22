import { Component } from '@angular/core';
import { TurmaService } from '../editar-professor/services/turma.service';
import { AlunosService } from '../editar-professor/services/alunos.service';
import { TurmaHasAlunosService } from '../editar-professor/services/turma-has-alunos.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-turma-has-aluno',
  templateUrl: './editar-turma-has-aluno.component.html',
  styleUrl: './editar-turma-has-aluno.component.css',
})
export class EditarTurmaHasAlunoComponent {
  turmas: any[] = [];
  alunos: any[] = [];
  relacao: any = { id_turma: '', id_aluno: '', data_matricula: '' };
  idTurmaAluno?: number;

  constructor(
    private turmaService: TurmaService,
    private alunosService: AlunosService,
    private turmaHasAlunosService: TurmaHasAlunosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.idTurmaAluno = Number(this.route.snapshot.paramMap.get('id'));
    this.carregarDados();
  }

  carregarDados() {
    this.turmaService.getTurmas().subscribe((data) => (this.turmas = data));
    this.alunosService.getAluno().subscribe((data) => (this.alunos = data));
    this.carregarRelacao();
  }

  carregarRelacao() {
    if (!this.idTurmaAluno) return;
    this.turmaHasAlunosService
      .getRelacaoById(this.idTurmaAluno)
      .subscribe((data) => {
        this.relacao = data;
      });
  }

  editarAlunoNaTurma() {
    if (!this.idTurmaAluno) {
      alert('Relação não encontrada.');
      return;
    }

    this.turmaHasAlunosService
      .editarRelacao(this.idTurmaAluno, this.relacao)
      .subscribe(
        () => {
          alert('Associação editada com sucesso!');
          this.router.navigate(['/turmas-alunos']);
        },
        (error) => {
          console.error('Erro ao editar associação:', error);
          alert('Erro ao editar a associação.');
        }
      );
  }
}
