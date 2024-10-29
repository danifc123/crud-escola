import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-turma',
  templateUrl: './adicionar-turma.component.html',
})
export class AdicionarTurmaComponent {
  turma = { nome: '', periodo: '' };

  constructor(private dataService: DataService, private router: Router) {}

  adicionarTurma() {
    this.dataService.addTurma(this.turma).subscribe(
      () => {
        alert('Turma adicionada com sucesso!');
        this.router.navigate(['/turmas']); // Redirecionar para a lista de turmas
      },
      (error) => {
        console.error('Erro ao adicionar turma', error);
      }
    );
  }
}
