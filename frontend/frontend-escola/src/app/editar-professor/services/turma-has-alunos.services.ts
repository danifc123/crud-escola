import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TurmaHasAlunosService {
  private baseUrl = 'http://localhost:3000/api/turmas-has-alunos';

  constructor(private http: HttpClient) {}

  addAlunoToTurma(relacao: {
    id_turma: string;
    id_aluno: string;
  }): Observable<any> {
    return this.http.post(`${this.baseUrl}`, relacao);
  }

  getAlunosByTurma(id_turma: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/turma/${id_turma}`);
  }

  removeAlunoFromTurma(id_turma: string, id_aluno: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id_turma}/aluno/${id_aluno}`);
  }
  editarRelacao(id: number, relacao: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, relacao);
  }

  getRelacaoById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
