import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../editar-professor/services/alunos.service';

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
})
export class EditarAlunoComponent implements OnInit {
  idAluno?: number;
  aluno: any = {};
  emailValido: boolean = true;
  dataValida: boolean = true;

  constructor(
    private alunosService: AlunosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.idAluno = Number(this.route.snapshot.paramMap.get('id'));
    this.carregarAluno();
  }

  carregarAluno() {
    this.alunosService.getAluno().subscribe((data) => {
      this.aluno = data.find((aluno: any) => aluno.id === this.idAluno);
    });
  }

  editarAluno() {
    if (!this.idAluno) {
      alert('ID do aluno não encontrado.');
      return;
    }
    if (!this.validarEmail(this.aluno.email)) {
      this.emailValido = false;
      alert('E-mail inválido. Verifique o valor e tente novamente.');
      return;
    }

    if (!this.validarData(this.aluno.data_nascimento)) {
      this.dataValida = false;
      alert(
        'Data de nascimento inválida. Verifique o valor e tente novamente.'
      );
      return;
    }

    this.aluno.id = this.idAluno;

    this.alunosService.editarAluno(this.aluno).subscribe(
      () => {
        alert('Aluno editado com sucesso!');
        this.router.navigate(['/pagina-inicial']);
      },
      (error) => {
        console.error('Erro ao editar aluno:', error);
        alert('Erro ao editar aluno: ' + error.message);
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
