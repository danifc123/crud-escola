import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-adicionar-disciplina',
  templateUrl: './adicionar-disciplina.component.html',
})
export class AdicionarDisciplinaComponent {
  disciplina = { nome: '', codigo: '', periodo: '', status: true };

  constructor(private dataService: DataService, private router: Router) {}

  adicionarDisciplina() {
    this.dataService.addDisciplina(this.disciplina).subscribe(
      () => {
        alert('disciplina adicionada com sucesso!');
        this.router.navigate(['/pagina-inicial']); // Redirecionar para a lista de disciplinas
      },
      (error) => {
        console.error('Erro ao adicionar disciplina', error);
      }
    );
  }
}
