import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TurmaHasAlunosService {
  private baseUrl = 'http://localhost:3000/turmas-has-alunos';

  constructor(private http: HttpClient) {}

  getAlunosDaTurma(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  deleteTurmaHasAluno(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  adicionarTurmaHasAluno(relacao: any): Observable<any> {
    console.log('Requisição enviada:', relacao);

    return this.http.post(`${this.baseUrl}/vinculo-aluno-turma`, relacao);
  }
  editarTurmaHasAluno(id: number, relacao: any): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, relacao);
  }
  searchTurmasHasAlunos(nome: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/search`, { params: { nome } });
  }
}
