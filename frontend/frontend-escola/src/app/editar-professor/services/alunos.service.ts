import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  private baseUrl = 'http://localhost:3000/alunos';

  constructor(private http: HttpClient) {}

  getAluno(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
  salvarAluno(aluno: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, aluno);
  }

  alterarAluno(aluno: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${aluno.id}`, aluno);
  }

  excluirAluno(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  pesquisarAlunos(nome: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/search`, {
      params: { nome },
    });
  }
}
