import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  addProfessor(professor: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/professores`, professor);
  }

  addDisciplina(disciplina: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/disciplinas`, disciplina);
  }

  addSala(sala: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/salas`, sala);
  }

  addTurma(turma: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/turmas`, turma);
  }
}
