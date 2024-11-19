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
  private inicioUrl = 'http://localhost:3000/pagina-inicial';
  constructor(private http: HttpClient) {}

  getInicio(): Observable<any[]> {
    return this.http.get<any[]>(this.inicioUrl);
  }
  pesquisarProfessor(nome: string): Observable<any[]> {
    return this.http.get<any[]>(
      `http://localhost:3000/pagina-inicial/professor`,
      { params: { nome } }
    );
  }
}
