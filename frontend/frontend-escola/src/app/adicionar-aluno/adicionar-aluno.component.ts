import { Component } from '@angular/core';
import { AlunosService } from '../editar-professor/services/alunos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-aluno',
  templateUrl: './adicionar-aluno.component.html',
})
export class AdicionarAlunoComponent {
  aluno = { nome: '', email: '', data_nascimento: '' };

  constructor(private alunosService: AlunosService, private router: Router) {}

  adicionarAluno() {
    if (!this.validarEmail(this.aluno.email)) {
      alert('E-mail inválido! Por favor, insira um e-mail válido.');
      return;
    }

    if (!this.validarData(this.aluno.data_nascimento)) {
      alert(
        'Data de nascimento inválida! Por favor, insira uma data no formato válido (YYYY-MM-DD).'
      );
      return;
    }

    this.alunosService.salvarAluno(this.aluno).subscribe(
      () => {
        alert('Aluno adicionado com sucesso!');
        this.router.navigate(['/pagina-inicial']);
      },
      (error) => {
        console.error('Erro ao adicionar aluno', error);
      }
    );
  }

  validarEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  validarData(data: string): boolean {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(data) && !isNaN(Date.parse(data));
  }
}
