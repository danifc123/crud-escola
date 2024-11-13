import { Component } from '@angular/core';
import { DisciplinasService } from '../editar-professor/services/disciplinas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-disciplina',
  templateUrl: './editar-disciplina.component.html',
  styleUrl: './editar-disciplina.component.css',
})
export class EditarDisciplinaComponent {
  idDisciplina?: number;
  disciplina: any = {};
  constructor(
    private disciplinasService: DisciplinasService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.idDisciplina = Number(this.route.snapshot.paramMap.get('id')); // Obtém o ID da URL
    this.carregarDisciplina();
  }

  carregarDisciplina() {
    this.disciplinasService.getDisciplinas().subscribe((data) => {
      this.disciplina = data.find((disc: any) => disc.id === this.idDisciplina); // Filtra o professor pelo ID
    });
  }

  editarDisciplina() {
    if (!this.idDisciplina) {
      alert('ID do disciplina não encontrado.');
      return; // Impede a edição se não houver ID
    }

    this.disciplina.id = this.idDisciplina;

    this.disciplinasService.editarDisciplina(this.disciplina).subscribe(
      () => {
        alert('Disciplina editada com sucesso!');
        this.router.navigate(['/pagina-inicial']);
      },
      (error) => {
        console.log(error);
        alert('Erro ao editar disciplina: ' + error.message);
      }
    );
  }
}
