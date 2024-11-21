import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { TurmaService } from '../editar-professor/services/turma.service';
import { ProfessorService } from '../editar-professor/services/professor.service';
import { Observable } from 'rxjs';
import { DisciplinasService } from '../editar-professor/services/disciplinas.service';
import { salaService } from '../editar-professor/services/salas.services';

@Component({
  selector: 'app-adicionar-turma',
  templateUrl: './adicionar-turma.component.html',
})
export class AdicionarTurmaComponent implements OnInit {
  turma = {
    nome: '',
    id_disciplina: '',
    id_professor: '',
    id_sala: '',
    dia_semana: '',
    horario_inicio: '',
    horario_termino: '',
    status: true,
  };
  disciplinas: any[] = [];
  professores: any[] = [];
  salas: any[] = [];
  diasSemana = [
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
    'Domingo',
  ];

  constructor(
    private turmaService: TurmaService,
    private router: Router,
    private disciplinasService: DisciplinasService,
    private professorService: ProfessorService,
    private salaService: salaService
  ) {}

  ngOnInit(): void {
    this.carregarDisciplinas();
    this.carregarProfessores();
    this.carregarSalas();
  }

  carregarDisciplinas() {
    this.disciplinasService.getDisciplinas().subscribe((data) => {
      this.disciplinas = data;
    });
  }

  carregarProfessores() {
    this.professorService.getProfessores().subscribe((data) => {
      this.professores = data;
    });
  }

  carregarSalas() {
    this.salaService.getSalas().subscribe((data) => {
      this.salas = data;
    });
  }

  adicionarTurma() {
    console.log(this.turma);
    if (
      !this.turma.nome ||
      !this.turma.id_disciplina ||
      !this.turma.id_professor ||
      !this.turma.id_sala ||
      !this.turma.dia_semana ||
      !this.turma.horario_inicio ||
      !this.turma.horario_termino
    ) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    this.turmaService.adicionarTurma(this.turma).subscribe(
      () => {
        alert('Turma adicionada com sucesso!');
        this.router.navigate(['/pagina-inicial']);
      },
      (error) => {
        alert('Erro ao adicionar turma!');
        console.error(error);
      }
    );
  }
}
