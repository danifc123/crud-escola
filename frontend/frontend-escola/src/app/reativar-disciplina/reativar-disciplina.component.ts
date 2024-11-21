import { Component, OnInit } from '@angular/core';
import { DisciplinasService } from '../editar-professor/services/disciplinas.service';

@Component({
  selector: 'app-reativar-disciplina',
  templateUrl: './reativar-disciplina.component.html',
  styleUrls: ['./reativar-disciplina.component.css'],
})
export class ReativarDisciplinaComponent implements OnInit {
  disciplinasInativas: any[] = [];

  constructor(private disciplinasService: DisciplinasService) {}

  ngOnInit() {
    this.carregarDisciplinasInativas();
  }

  carregarDisciplinasInativas() {
    this.disciplinasService.getDisciplinas().subscribe((data) => {
      this.disciplinasInativas = data.filter(
        (disciplina: any) => !disciplina.status
      ); // Filtra apenas as disciplinas inativas
    });
  }

  reativarDisciplina(id: number) {
    if (confirm('Você realmente deseja reativar esta disciplina?')) {
      this.disciplinasService.reativarDisciplina(id).subscribe(
        () => {
          alert('Disciplina reativada com sucesso!');
          this.carregarDisciplinasInativas(); // Recarrega a lista de disciplinas inativas
        },
        (error) => {
          alert('Erro ao reativar disciplina: ' + error.message);
        }
      );
    }
  }
}
