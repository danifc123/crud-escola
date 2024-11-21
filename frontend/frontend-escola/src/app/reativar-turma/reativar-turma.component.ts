import { Component, OnInit } from '@angular/core';
import { TurmaService } from '../editar-professor/services/turma.service';

@Component({
  selector: 'app-reativar-turma',
  templateUrl: './reativar-turma.component.html',
  styleUrls: ['./reativar-turma.component.css'],
})
export class ReativarTurmaComponent implements OnInit {
  turmasInativas: any[] = [];

  constructor(private turmaService: TurmaService) {}

  ngOnInit() {
    this.carregarTurmasInativas();
  }

  carregarTurmasInativas() {
    this.turmaService.getTurmas().subscribe((data) => {
      this.turmasInativas = data.filter((turma: any) => !turma.status);
    });
  }

  reativarTurma(id: number) {
    if (confirm('Você realmente deseja reativar esta turma?')) {
      this.turmaService.reativarTurma(id).subscribe(
        () => {
          alert('Turma reativada com sucesso!');
          this.carregarTurmasInativas();
        },
        (error) => {
          alert('Erro ao reativar turma: ' + error.message);
        }
      );
    }
  }
}
