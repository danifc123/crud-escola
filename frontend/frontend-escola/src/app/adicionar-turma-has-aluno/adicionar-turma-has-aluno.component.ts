import { Component } from '@angular/core';
import { TurmaService } from '../editar-professor/services/turma.service';
import { AlunosService } from '../editar-professor/services/alunos.service';
import { TurmaHasAlunosService } from '../editar-professor/services/turma-has-alunos.services';

@Component({
  selector: 'app-adicionar-turma-has-aluno',
  templateUrl: './adicionar-turma-has-aluno.component.html',
  styleUrls: ['./adicionar-turma-has-aluno.component.css'],
})
export class AdicionarTurmaHasAlunoComponent {
  alunos: any[] = [];
  turmas: any[] = [];
  alunosNaTurma: any[] = [];
  turmaSelecionada: number = 0; // Guarda o id da turma selecionada
  relacao = {
    id_turma: null,
    id_aluno: null,
  };

  constructor(
    private turmaService: TurmaService,
    private alunosService: AlunosService,
    private turmaHasAlunosService: TurmaHasAlunosService
  ) {}

  ngOnInit(): void {
    this.carregarAlunos();
    this.carregarTurma();
  }

  carregarAlunos() {
    this.alunosService.getAluno().subscribe((data) => {
      this.alunos = data;
    });
  }

  carregarTurma() {
    this.turmaService.getTurmas().subscribe((data) => {
      this.turmas = data;
    });
  }

  carregarAlunosPorTurma() {
    if (this.turmaSelecionada) {
      // Supondo que você tenha um método para buscar os alunos por turma
      this.turmaHasAlunosService.getAlunosDaTurma().subscribe((data) => {
        this.alunosNaTurma = data;
      });
    }
  }

  adicionarTurmaHasAluno() {
    console.log('ID Turma:', this.relacao.id_turma); // Verifique se está preenchido
    console.log('ID Aluno:', this.relacao.id_aluno);

    const payload = {
      turma_id: this.relacao.id_turma, // Altere o nome da chave
      aluno_id: this.relacao.id_aluno, // Altere o nome da chave
    };

    if (payload.turma_id && payload.aluno_id) {
      this.turmaHasAlunosService.adicionarTurmaHasAluno(payload).subscribe(
        (response) => {
          console.log('Vínculo criado com sucesso:', response);
          this.carregarAlunosPorTurma(); // Atualiza a lista de alunos da turma
        },
        (error) => {
          console.error('Erro ao vincular aluno à turma:', error);
        }
      );
    } else {
      console.log('Faltando valores de turma_id ou aluno_id');
    }
  }
}
