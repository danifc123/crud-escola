import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-professor',
  templateUrl: './adicionar-professor.component.html',
})
export class AdicionarProfessorComponent {
  professor = { nome: '', cpf: '', titulacao: '', status: true };

  constructor(private dataService: DataService, private router: Router) {}

  adicionarProfessor() {
    if (!this.validarCPF(this.professor.cpf)) {
      alert(
        'CPF inválido! Por favor, insira um CPF válido no formato xxx.xxx.xxx-xx.'
      );
      return;
    }

    this.dataService.addProfessor(this.professor).subscribe(
      () => {
        alert('Professor adicionado com sucesso!');
        this.router.navigate(['/pagina-inicial']);
      },
      (error) => {
        console.error('Erro ao adicionar professor', error);
      }
    );
  }

  validarCPF(cpf: string): boolean {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!regex.test(cpf)) {
      return false;
    }

    const cpfLimpo = cpf.replace(/[^\d]+/g, '');
    if (cpfLimpo.length !== 11 || /^(\d)\1{10}$/.test(cpfLimpo)) {
      return false;
    }

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpfLimpo.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpfLimpo.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpfLimpo.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpfLimpo.substring(10, 11))) return false;

    return true;
  }
}
