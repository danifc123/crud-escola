import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfessorService {
  private baseUrl = 'http://localhost:3000/professores';

  constructor(private http: HttpClient) {}

  getProfessores(): Observable<any[]> {
    return this.http
      .get<any>(this.baseUrl)
      .pipe(map((response: any) => response.data));
  }
  editarProfessor(professor: any): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${professor.id}`, professor);
  }

  excluirProfessor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  reativarProfessor(id: number): Observable<any> {
    return this.http.put<void>(`${this.baseUrl}/${id}/reativar`, {});
  }

  pesquisarProfessores(nome: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/search`, { params: { nome } });
  }
}
