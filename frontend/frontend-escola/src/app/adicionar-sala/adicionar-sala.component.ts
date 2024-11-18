import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-sala',
  templateUrl: './adicionar-sala.component.html',
})
export class AdicionarSalaComponent {
  sala = { nome: '', local: '', capacidade: '', status: true };

  constructor(private dataService: DataService, private router: Router) {}

  adicionarSala() {
    this.dataService.addSala(this.sala).subscribe(
      () => {
        alert('Sala adicionada com sucesso!');
        this.router.navigate(['/pagina-inicial']);
      },
      (error) => {
        console.error('Erro ao adicionar sala', error);
      }
    );
  }
}
