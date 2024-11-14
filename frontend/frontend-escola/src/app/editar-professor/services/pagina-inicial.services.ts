import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaginaInicialService {
  private turmaUrl = 'http://localhost:3000/turmas';
  private disciplinaUrl = 'http://localhost:3000/disciplinas';
  private professorUrl = 'http://localhost:3000/professores';
  private salaUrl = 'http://localhost:3000/salas';

  constructor(private http: HttpClient) {}

  // Função para buscar todas as entidades com o termo de pesquisa
  // pagina-inicial.services.ts
  pesquisarInicial(nome: string): Observable<any[]> {
    const turmas = this.http.get<any[]>(`${this.turmaUrl}/search`, {
      params: { nome },
    });
    const disciplinas = this.http.get<any[]>(`${this.disciplinaUrl}/search`, {
      params: { nome },
    });
    const professores = this.http.get<any[]>(`${this.professorUrl}/search`, {
      params: { nome },
    });
    const salas = this.http.get<any[]>(`${this.salaUrl}/search`, {
      params: { nome },
    });

    return forkJoin([turmas, disciplinas, professores, salas]);
  }
}
