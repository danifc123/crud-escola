import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-professor',
  templateUrl: './adicionar-professor.component.html',
})
export class AdicionarProfessorComponent {
  professor = { nome: '', disciplina: '', cpf: '', titulacao: '', status: true };

  constructor(private dataService: DataService, private router: Router) {}

  adicionarProfessor() {
    this.dataService.addProfessor(this.professor).subscribe(
      () => {
        alert('Professor adicionado com sucesso!');
        this.router.navigate(['/pagina-inicial']); // Redirecionar para a lista de professores
      },
      (error) => {
        console.error('Erro ao adicionar professor', error);
      }
    );
  }
}
