import { Component } from '@angular/core';
import { PaginaInicialService } from '../editar-professor/services/pagina-inicial.services';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css'],
})
export class PaginaInicialComponent {
  displayedColumns: string[] = [
    'nome',
    'sala',
    'professor',
    'disciplina',
    'status',
  ];
  pesquisaResultados: any[] = []; // Resultados da pesquisa geral
  nomePesquisa: string = ''; // Termo de pesquisa

  constructor(private paginaInicial: PaginaInicialService) {}

  pesquisaGeral() {
    if (this.nomePesquisa.trim() === '') {
      this.pesquisaResultados = [];
    } else {
      this.paginaInicial.pesquisarInicial(this.nomePesquisa).subscribe(
        (resultados) => {
          // Limpar o array de resultados
          this.pesquisaResultados = [];

          // Extraindo dados dos resultados
          const [turmas, disciplinas, professores, salas] = resultados;

          console.log('Turmas:', turmas);
          console.log('Disciplinas:', disciplinas);
          console.log('Professores:', professores);
          console.log('Salas:', salas);

          // Mapear as entidades para uma estrutura comum
          this.pesquisaResultados = [
            ...turmas.map((item: any) => ({
              entidade: 'Turma',
              nome: item.nome,
              status: item.status ? 'Ativo' : 'Inativo',
            })),
            ...disciplinas.map((item: any) => ({
              entidade: 'Disciplina',
              nome: item.nome,
              status: item.status ? 'Ativo' : 'Inativo',
            })),
            ...professores.map((item: any) => ({
              entidade: 'Professor',
              nome: item.nome,
              status: item.status ? 'Ativo' : 'Inativo',
            })),
            ...salas.map((item: any) => ({
              entidade: 'Sala',
              nome: item.nome,
              status: item.status ? 'Ativo' : 'Inativo',
            })),
          ];

          console.log('Resultados da Pesquisa:', this.pesquisaResultados);
        },
        (error) => {
          alert('Erro ao realizar busca: ' + error.message);
          console.log(error);
        }
      );
    }
  }
}
