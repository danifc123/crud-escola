import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlunosService } from '../editar-professor/services/alunos.service';
@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css'],
})
export class ListaAlunosComponent implements OnInit {
  alunos: any[] = [];
  nomePesquisa: string = '';

  constructor(private router: Router, private alunoService: AlunosService) {}

  ngOnInit() {
    this.carregarAlunos();
  }

  carregarAlunos() {
    this.alunoService.getAluno().subscribe((data) => {
      console.log('Dados recebidos:', data);
      this.alunos = data;
    });
  }

  editarAluno(id: number) {
    this.router.navigate(['/editar-aluno', id]);
  }

  excluirAluno(id: number) {
    if (confirm('Você realmente deseja excluir este aluno?')) {
      this.alunoService.excluirAluno(id).subscribe(
        () => {
          alert('Aluno excluído com sucesso!');
          this.carregarAlunos();
        },
        (error) => {
          alert('Erro ao excluir aluno: ' + error.message);
        }
      );
    }
  }

  reativarAluno(id: number) {
    this.alunoService.reativarAluno(id).subscribe(
      () => {
        alert('Aluno reativado com sucesso!');
        this.carregarAlunos();
      },
      (error) => {
        alert('Erro ao reativar aluno: ' + error.message);
      }
    );
  }

  pesquisarAlunos() {
    if (this.nomePesquisa.trim() === '') {
      this.carregarAlunos();
    } else {
      this.alunoService.pesquisarAlunos(this.nomePesquisa).subscribe(
        (data) => {
          this.alunos = data;
        },
        (error) => {
          alert('Erro ao buscar alunos: ' + error.message);
        }
      );
    }
  }
}
