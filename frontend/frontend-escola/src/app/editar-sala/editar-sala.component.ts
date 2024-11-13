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
  sala: any = {}; // Modelo para o professor

  constructor(
    private salaService: salaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.idSala = Number(this.route.snapshot.paramMap.get('id')); // Obtém o ID da URL
    this.carregarSala();
  }

  carregarSala() {
    this.salaService.getSalas().subscribe((data) => {
      this.sala = data.find((disc: any) => disc.id === this.idSala); // Filtra o professor pelo ID
    });
  }

  editarSala() {
    if (!this.idSala) {
      alert('ID do sala não encontrado.');
      return; // Impede a edição se não houver ID
    }

    this.sala.id = this.idSala;

    this.salaService.editarSala(this.sala).subscribe(
      () => {
        alert('Sala editado com sucesso!');
        this.router.navigate(['/pagina-inicial']); // Redireciona para a lista de sala
      },
      (error) => {
        console.log(error);
        alert('Erro ao editar sala: ' + error.message);
      }
    );
  }
}
