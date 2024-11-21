import { Component, OnInit } from '@angular/core';
import { salaService } from '../editar-professor/services/salas.services';
@Component({
  selector: 'app-reativar-sala',
  templateUrl: './reativar-sala.component.html',
  styleUrls: ['./reativar-sala.component.css'],
})
export class ReativarSalaComponent implements OnInit {
  salasInativas: any[] = [];

  constructor(private salaService: salaService) {}

  ngOnInit() {
    this.carregarSalasInativas();
  }

  carregarSalasInativas() {
    this.salaService.getSalas().subscribe((data) => {
      this.salasInativas = data.filter((sala: any) => !sala.status);
    });
  }

  reativarSala(id: number) {
    if (confirm('Você realmente deseja reativar esta sala?')) {
      this.salaService.reativarSala(id).subscribe(
        () => {
          alert('Sala reativada com sucesso!');
          this.carregarSalasInativas();
        },
        (error) => {
          alert('Erro ao reativar sala: ' + error.message);
        }
      );
    }
  }
}
