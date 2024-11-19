import { Component } from '@angular/core';
import { PaginaInicialService } from '../editar-professor/services/pagina-inicial.services';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css'],
})
export class PaginaInicialComponent {
  constructor(private paginaInicial: PaginaInicialService) {}
  ngOnInit() {
    this.carregarInicio();
  }
  displayedColumns: string[] = [
    'professor',
    'turma',
    'titulacao',
    'sala',
    'status',
  ];
  pesquisaResultados: any[] = []; // Resultados da pesquisa geral
  nomePesquisa: string = ''; // Termo de pesquisa

  carregarInicio() {
    this.paginaInicial.getInicio().subscribe((data) => {
      console.log('Dados recebidos:', data); // Verifique o formato
      this.pesquisaResultados = data; // Popula a tabela
    });
  }
  pesquisarProfessor() {
    if (this.nomePesquisa.trim() === '') {
      alert('Por favor, insira o nome do professor para pesquisar.');
      return;
    }

    this.paginaInicial.pesquisarProfessor(this.nomePesquisa).subscribe(
      (resultados) => {
        console.log('Resultados da pesquisa:', resultados);
        this.pesquisaResultados = resultados; // Atualiza a tabela com os dados do professor
      },
      (error) => {
        alert('Erro ao buscar professor: ' + error.message);
      }
    );
  }
}
