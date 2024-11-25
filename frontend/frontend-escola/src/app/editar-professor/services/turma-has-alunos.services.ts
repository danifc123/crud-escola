import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TurmaHasAlunosService {
  private baseUrl = 'http://localhost:3000/turmas-has-alunos';

  constructor(private http: HttpClient) {}

  //----------------------------------- CODIGOS QUE EU TENHO CERTEZA Q ESTAO SENDO UTILIZADOS---------------------------------------
  getAlunosDaTurma(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
  removerAluno(turmaId: number, alunoId: number) {
    return this.http.delete(`${this.baseUrl}/${turmaId}/${alunoId}`);
  }
  adicionarTurmaHasAluno(relacao: any): Observable<any> {
    console.log('Requisição enviada:', relacao); // Verifique o conteúdo da requisição

    return this.http.post(`${this.baseUrl}/vinculo-aluno-turma`, relacao);
  }
}
