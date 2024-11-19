import { Component } from '@angular/core';
import { PaginaInicialService } from './editar-professor/services/pagina-inicial.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mostrarTabela: boolean = true;
  constructor(
    private paginaInicial: PaginaInicialService,
    private router: Router
  ) {}
  ngOnInit() {
    this.carregarInicio();

    // Monitora a navegação para esconder ou mostrar a tabela
    this.router.events.subscribe(() => {
      const rotasOcultarTabela = [
        '/pagina-inicial',
        '/adicionar-professor',
        '/adicionar-disciplina',
        '/adicionar-turma',
        '/adicionar-sala',
        '/professores',
        '/turmas',
        '/disciplinas',
        '/salas',
        '/editar-professor/:id',
        '/editar-disciplina/:id',
        '/editar-sala/:id',
        '/editar-turma/:id',
        '/pesquisar-professor',
        '/pesquisar-disciplina',
        '/pesquisar-turma',
        '/pesquisar-sala',
      ]; // Adicione aqui as rotas que devem esconder a tabela
      this.mostrarTabela = !rotasOcultarTabela.includes(this.router.url);
    });
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
  ngOnDestroy(): void {
    this.displayedColumns = []; // Limpa os dados da tabela
  }
}
