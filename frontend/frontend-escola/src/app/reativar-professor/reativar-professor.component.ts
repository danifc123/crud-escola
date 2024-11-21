import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../editar-professor/services/professor.service';

@Component({
  selector: 'app-reativar-professor',
  templateUrl: './reativar-professor.component.html',
  styleUrls: ['./reativar-professor.component.css'],
})
export class ReativarProfessorComponent implements OnInit {
  professoresInativos: any[] = [];

  constructor(private professorService: ProfessorService) {}

  ngOnInit() {
    this.carregarProfessoresInativos();
  }

  carregarProfessoresInativos() {
    this.professorService.getProfessores().subscribe((data) => {
      this.professoresInativos = data.filter(
        (professor: any) => !professor.status
      );
    });
  }

  reativarProfessor(id: number) {
    if (confirm('Você realmente deseja reativar este professor?')) {
      this.professorService.reativarProfessor(id).subscribe(
        () => {
          alert('Professor reativado com sucesso!');
          this.carregarProfessoresInativos();
        },
        (error) => {
          alert('Erro ao reativar professor: ' + error.message);
        }
      );
    }
  }
}
