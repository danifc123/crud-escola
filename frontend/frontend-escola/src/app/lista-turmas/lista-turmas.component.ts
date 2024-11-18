import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TurmaService } from '../editar-professor/services/turma.service';
import { DisciplinasService } from '../editar-professor/services/disciplinas.service';
import { ProfessorService } from '../editar-professor/services/professor.service';
import { salaService } from '../editar-professor/services/salas.services';

@Component({
  selector: 'app-lista-turmas',
  templateUrl: './lista-turmas.component.html',
  styleUrl: './lista-turmas.component.css',
})
export class ListaTurmasComponent {
  turmas: any[] = [];
  nomePesquisa: string = '';

  constructor(private router: Router, private turmaService: TurmaService) {}
  ngOnInit() {
    this.carregarTurma();
  }
  carregarTurma() {
    this.turmaService.getTurmas().subscribe((data) => {
      this.turmas = data;
    });
  }
  editarTurma(id: number) {
    this.router.navigate(['/editar-turma', id]);
  }
  excluirTurma(id: number) {
    if (confirm('Você realmente deseja excluir esta turma?')) {
      this.turmaService.excluirTurma(id).subscribe(
        () => {
          alert(' Turma excluída com sucesso!');
          this.carregarTurma(); // Atualiza a lista de professores após a exclusão
        },
        (error) => {
          alert('Erro ao excluir turma: ' + error.message);
        }
      );
    }
  }
  reativarTurma(id: number) {
    this.turmaService.reativarTurma(id).subscribe(
      () => {
        alert('Turma reativada com sucesso!');
        this.carregarTurma();
      },
      (error) => {
        alert('Erro ao reativar turma: ' + error.message);
      }
    );
  }

  // Campo para armazenar o termo de pesquisa
  pesquisarTurma() {
    if (this.nomePesquisa.trim() === '') {
      this.carregarTurma();
      // Se o campo estiver vazio, carregue todos os professores
    } else {
      this.turmaService.pesquisarTurmas(this.nomePesquisa).subscribe(
        (data) => {
          this.turmas = data;
        },
        (error) => {
          alert('Erro ao buscar turmas: ' + error.message);
        }
      );
    }
  }
}
