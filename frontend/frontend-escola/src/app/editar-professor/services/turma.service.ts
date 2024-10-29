import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TurmaService {
  private baseUrl = 'http://localhost:3000/turmas';

  constructor(private http: HttpClient) {}

  getTurmas(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  editarTurma(turma: any): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${turma.id}`, turma);
  }

  excluirTurma(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  reativarTurma(id: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}/reativar`, {});
  }
  pesquisarTurmas(nome: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/search`, { params: { nome } });
  }
}
