import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Adicionando Router para redirecionamento
import { TurmaService } from '../editar-professor/services/turma.service';
import { AlunosService } from '../editar-professor/services/alunos.service';
import { TurmaHasAlunosService } from '../editar-professor/services/turma-has-alunos.services';

@Component({
  selector: 'app-editar-turma-has-aluno',
  templateUrl: './editar-turma-has-aluno.component.html',
  styleUrls: ['./editar-turma-has-aluno.component.css'],
})
export class EditarTurmaHasAlunoComponent implements OnInit {
  idVinculo: number | null = null; // ID do vínculo que vamos editar
  turmas: any[] = [];
  alunos: any[] = [];
  selectedAlunoId: number | null = null;
  selectedTurmaId: number | null = null;

  constructor(
    private turmaService: TurmaService,
    private alunosService: AlunosService,
    private turmaHasAlunosService: TurmaHasAlunosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Recupera o ID do vínculo da URL
    this.idVinculo = Number(this.route.snapshot.paramMap.get('id'));

    // Carregar turmas, alunos e o vínculo atual
    this.carregarTurmas();
    this.carregarAlunos();
    this.carregarVinculo();
  }

  carregarTurmas(): void {
    this.turmaService.getTurmas().subscribe(
      (data) => {
        this.turmas = data;
      },
      (error) => {
        console.error('Erro ao carregar turmas:', error);
      }
    );
  }

  carregarAlunos(): void {
    this.alunosService.getAluno().subscribe(
      (data) => {
        this.alunos = data;
      },
      (error) => {
        console.error('Erro ao carregar alunos:', error);
      }
    );
  }

  carregarVinculo(): void {
    // Se o ID do vínculo não for nulo, carregamos os dados desse vínculo
    if (this.idVinculo) {
      this.turmaHasAlunosService.getAlunosDaTurma().subscribe((data) => {
        const vinculo = data.find(
          (item: any) => item.vinculo_id === this.idVinculo
        );
        if (vinculo) {
          this.selectedAlunoId = vinculo.aluno_id;
          this.selectedTurmaId = vinculo.turma_id;
        }
      });
    }
  }

  atualizarVinculo(): void {
    if (this.selectedAlunoId && this.selectedTurmaId && this.idVinculo) {
      const relacao = {
        aluno_id: this.selectedAlunoId,
        turma_id: this.selectedTurmaId,
      };

      this.turmaHasAlunosService
        .updateTurmaHasAlunos(this.idVinculo, relacao)
        .subscribe(
          () => {
            alert('Vínculo atualizado com sucesso!');
            this.router.navigate(['turma-has-alunos']); // Redireciona para a lista de vínculos após a atualização
          },
          (error) => {
            console.error('Erro ao atualizar vínculo:', error);
            alert('Erro ao atualizar vínculo.');
          }
        );
    } else {
      alert('Por favor, selecione um aluno e uma turma.');
    }
  }
}
