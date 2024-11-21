import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { salaService } from '../editar-professor/services/salas.services';

@Component({
  selector: 'app-lista-salas',
  templateUrl: './lista-salas.component.html',
  styleUrl: './lista-salas.component.css',
})
export class ListaSalasComponent {
  salas: any[] = [];

  constructor(private router: Router, private salaService: salaService) {}

  ngOnInit() {
    this.carregarSalas();
  }
  carregarSalas() {
    this.salaService.getSalas().subscribe((data) => {
      this.salas = data;
    });
  }
  editarSala(id: number) {
    this.router.navigate(['/editar-sala', id]);
  }

  excluirSala(id: number) {
    if (confirm('Você realmente deseja excluir esta sala?')) {
      this.salaService.excluirSala(id).subscribe(
        (response) => {
          console.log(response);
          alert('Sala excluído com sucesso!');
          this.carregarSalas();
        },
        (error) => {
          alert('Erro ao excluir professor: ' + error.message);
        }
      );
    }
  }
  reativarSala(id: number) {
    this.salaService.reativarSala(id).subscribe(
      () => {
        alert('Sala reativado com sucesso!');
        this.carregarSalas();
      },
      (error) => {
        console.error(error);

        alert('Erro ao reativar professor: ' + error.message);
      }
    );
  }

  nomePesquisa: string = '';
  pesquisarSalas() {
    if (this.nomePesquisa.trim() === '') {
      this.carregarSalas();
    } else {
      this.salaService.pesquisarSalas(this.nomePesquisa).subscribe(
        (data) => {
          this.salas = data;
        },
        (error) => {
          alert('Erro ao buscar salas: ' + error.message);
        }
      );
    }
  }
}
