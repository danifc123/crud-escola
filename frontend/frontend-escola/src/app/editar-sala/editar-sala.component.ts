import { Component } from '@angular/core';
import { salaService } from '../editar-professor/services/salas.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-sala',
  templateUrl: './editar-sala.component.html',
  styleUrl: './editar-sala.component.css',
})
export class EditarSalaComponent {
  idSala?: number;
  sala: any = {};

  constructor(
    private salaService: salaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.idSala = Number(this.route.snapshot.paramMap.get('id'));
    this.carregarSala();
  }

  carregarSala() {
    this.salaService.getSalas().subscribe((data) => {
      this.sala = data.find((disc: any) => disc.id === this.idSala);
    });
  }

  editarSala() {
    if (!this.idSala) {
      alert('ID do sala não encontrado.');
      return;
    }

    this.sala.id = this.idSala;

    this.salaService.editarSala(this.sala).subscribe(
      () => {
        alert('Sala editado com sucesso!');
        this.router.navigate(['/pagina-inicial']);
      },
      (error) => {
        console.log(error);
        alert('Erro ao editar sala: ' + error.message);
      }
    );
  }
}
