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
  cpfValido: boolean = true;

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
    if (!this.validarCPF(this.professor.cpf)) {
      this.cpfValido = false;
      alert('CPF inválido. Verifique o valor e tente novamente.');
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
