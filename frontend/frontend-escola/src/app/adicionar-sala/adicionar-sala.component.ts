import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-sala',
  templateUrl: './adicionar-sala.component.html',
})
export class AdicionarSalaComponent {
  sala = { numero: '' };

  constructor(private dataService: DataService, private router: Router) {}

  adicionarSala() {
    this.dataService.addSala(this.sala).subscribe(
      () => {
        alert('Sala adicionada com sucesso!');
        this.router.navigate(['/salas']); // Redirecionar para a lista de salas
      },
      (error) => {
        console.error('Erro ao adicionar sala', error);
      }
    );
  }
}
