import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../editar-professor/services/alunos.service';

@Component({
  selector: 'app-reativar-alunos',
  templateUrl: './reativar-alunos.component.html',
  styleUrls: ['./reativar-alunos.component.css'],
})
export class ReativarAlunosComponent implements OnInit {
  alunosInativos: any[] = [];

  constructor(private alunoService: AlunosService) {}

  ngOnInit() {
    this.carregarAlunosInativos();
  }

  carregarAlunosInativos() {
    this.alunoService.getAluno().subscribe(
      (data) => {
        this.alunosInativos = data.filter((aluno: any) => !aluno.status);
      },
      (error) => {
        console.error('Erro ao carregar alunos inativos:', error);
      }
    );
  }

  reativarAluno(id: number) {
    if (confirm('Deseja realmente reativar este aluno?')) {
      this.alunoService.reativarAluno(id).subscribe(
        () => {
          alert('Aluno reativado com sucesso!');
          this.carregarAlunosInativos();
        },
        (error) => {
          alert('Erro ao reativar aluno: ' + error.message);
        }
      );
    }
  }
}
