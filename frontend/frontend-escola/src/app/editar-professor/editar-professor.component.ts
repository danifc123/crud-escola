import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorService } from './services/professor.service';

@Component({
  selector: 'app-editar-professor',
  templateUrl: './editar-professor.component.html',
  styleUrls: ['./editar-professor.component.css'],
})
export class EditarProfessorComponent implements OnInit {
  idProfessor?: number;
  professor: any = {};

  constructor(
    private professorService: ProfessorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.idProfessor = Number(this.route.snapshot.paramMap.get('id'));
    this.carregarProfessor();
  }

  carregarProfessor() {
    this.professorService.getProfessores().subscribe((data) => {
      this.professor = data.find((prof: any) => prof.id === this.idProfessor);
    });
  }

  editarProfessor() {
    if (!this.idProfessor) {
      alert('ID do professor não encontrado.');
      return;
    }

    this.professor.id = this.idProfessor;

    this.professorService.editarProfessor(this.professor).subscribe(
      () => {
        alert('Professor editado com sucesso!');
        this.router.navigate(['/pagina-inicial']);
      },
      (error) => {
        console.log(error);
        alert('Erro ao editar professor: ' + error.message);
      }
    );
  }
}
