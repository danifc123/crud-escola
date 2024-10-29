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
  professor: any = {}; // Modelo para o professor

  constructor(
    private professorService: ProfessorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.idProfessor = Number(this.route.snapshot.paramMap.get('id')); // Obtém o ID da URL
    this.carregarProfessor(); // Carrega os dados do professor
  }

  carregarProfessor() {
    // Carrega os dados do professor a partir do ID
    this.professorService.getProfessores().subscribe((data) => {
      this.professor = data.find((prof: any) => prof.id === this.idProfessor); // Filtra o professor pelo ID
    });
  }

  editarProfessor() {
    if (!this.idProfessor) {
      alert('ID do professor não encontrado.');
      return; // Impede a edição se não houver ID
    }

    // Adiciona o ID ao objeto professor antes de enviar
    this.professor.id = this.idProfessor;

    this.professorService.editarProfessor(this.professor).subscribe(
      () => {
        alert('Professor editado com sucesso!');
        this.router.navigate(['/pagina-inicial']); // Redireciona para a lista de professores
      },
      (error) => {
        console.log(error);
        alert('Erro ao editar professor: ' + error.message);
      }
    );
  }
}
