import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DisciplinasService {
  private baseUrl = 'http://localhost:3000/disciplinas';

  constructor(private http: HttpClient) {}

  getDisciplinas(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  editarDisciplina(disciplina: any): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${disciplina.id}`, disciplina); // Corrigido para incluir '/professores/'
  }

  excluirDisciplina(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  reativarDisciplina(id: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}/reativar`, {});
  }
  pesquisarDisciplinas(nome: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/search`, { params: { nome } });
  }
}
