import { Component } from '@angular/core';
import { PaginaInicialService } from '../editar-professor/services/pagina-inicial.services';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css'],
})
export class PaginaInicialComponent {
  displayedColumns: string[] = ['nome', 'turma', 'professor', 'sala', 'status'];
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

          // Mapear entidades para uma estrutura comum que inclua os vínculos
          this.pesquisaResultados = disciplinas.map((disciplina: any) => {
            const turmaVinculada = turmas.find((turma: any) => turma.id === disciplina.turmaId) || {};
            const professorVinculado = professores.find((prof: any) => prof.id === disciplina.professorId) || {};
            const salaVinculada = salas.find((sala: any) => sala.id === disciplina.salaId) || {};

            return {
              nome: disciplina.nome,
              turma: turmaVinculada.nome || 'Não vinculada',
              professor: professorVinculado.nome || 'Não vinculado',
              sala: salaVinculada.nome || 'Não vinculada',
              status: disciplina.status ? 'Ativo' : 'Inativo',
            };
          });

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
