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
  erroCodigo = ''; // Para armazenar mensagens de erro
  constructor(private dataService: DataService, private router: Router) {}

  verificarCodigo() {
    if (this.disciplina.codigo.length === 10) {
      alert('Você atingiu o limite máximo de 10 caracteres para o código!');
    }
  }

  adicionarDisciplina() {
    // Validação do limite de caracteres
    if (this.disciplina.codigo.length > 10) {
      this.erroCodigo = 'O código não pode ter mais de 10 caracteres.';
      return;
    } else {
      this.erroCodigo = '';
    }
    this.dataService.addDisciplina(this.disciplina).subscribe(
      () => {
        alert('Disciplina adicionada com sucesso!');
        this.router.navigate(['/pagina-inicial']); // Redirecionar para a lista de disciplinas
      },
      (error) => {
        console.error('Erro ao adicionar disciplina', error);
      }
    );
  }
}
