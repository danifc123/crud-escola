import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TurmaService } from '../editar-professor/services/turma.service';

@Component({
  selector: 'app-editar-turma',
  templateUrl: './editar-turma.component.html',
  styleUrl: './editar-turma.component.css',
})
export class EditarTurmaComponent implements OnInit {
  idTurma?: number;
  turma: any = {};
  constructor(
    private turmaService: TurmaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.idTurma = Number(this.route.snapshot.paramMap.get('id')); // Obtém o ID da URL
    this.carregarTurma();
  }
  carregarTurma() {
    this.turmaService.getTurmas().subscribe((data) => {
      this.turma = data.find((turm: any) => turm.id === this.idTurma); // Filtra o professor pelo ID
    });
  }

  editarTurma() {
    if (!this.idTurma) {
      alert('ID do turma não encontrado.');
      return;
    }
    this.turma.id = this.idTurma;

    this.turmaService.editarTurma(this.turma).subscribe(
      () => {
        alert('Turma editada com sucesso!');
        console.log('Turma editada com sucesso!');
        this.router.navigate(['/turmas']); // Ajuste o caminho conforme necessário
      },
      (error) => {
        console.log(error);
        alert('Erro ao editar turma: ' + error.message);
      }
    );
  }
}
