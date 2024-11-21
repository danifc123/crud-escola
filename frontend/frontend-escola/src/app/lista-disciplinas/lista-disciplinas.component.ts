import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DisciplinasService } from '../editar-professor/services/disciplinas.service';

@Component({
  selector: 'app-lista-disciplinas',
  templateUrl: './lista-disciplinas.component.html',
  styleUrl: './lista-disciplinas.component.css',
})
export class ListaDisciplinasComponent {
  disciplinas: any[] = [];

  constructor(
    private router: Router,
    private disciplinasService: DisciplinasService
  ) {}

  ngOnInit() {
    this.carregarDisciplinas();
  }
  carregarDisciplinas() {
    this.disciplinasService.getDisciplinas().subscribe((data) => {
      this.disciplinas = data;
    });
  }
  editarDisciplina(id: number) {
    this.router.navigate(['/editar-disciplina', id]);
  }

  excluirDisciplina(id: number) {
    if (confirm('Você realmente deseja excluir esta disciplina?')) {
      this.disciplinasService.excluirDisciplina(id).subscribe(
        () => {
          alert('Disciplina excluído com sucesso!');
          this.carregarDisciplinas();
        },
        (error) => {
          alert('Erro ao excluir disciplina: ' + error.message);
        }
      );
    }
  }
  reativarDisciplina(id: number) {
    this.disciplinasService.reativarDisciplina(id).subscribe(
      () => {
        alert('Disciplina reativado com sucesso!');
        this.carregarDisciplinas();
      },
      (error) => {
        alert('Erro ao reativar Disciplina: ' + error.message);
      }
    );
  }

  nomePesquisa: string = '';
  pesquisarDisciplinas() {
    if (this.nomePesquisa.trim() === '') {
      this.pesquisarDisciplinas();
    } else {
      this.disciplinasService.pesquisarDisciplinas(this.nomePesquisa).subscribe(
        (data) => {
          this.disciplinas = data;
        },
        (error) => {
          alert('Erro ao buscar professores: ' + error.message);
        }
      );
    }
  }
}
