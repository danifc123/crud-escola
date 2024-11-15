import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'http://localhost:3000'; // URL do seu backend

  constructor(private http: HttpClient) {}

  // Métodos para gerenciar Professores
  addProfessor(professor: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/professores`, professor);
  }

  // Métodos para gerenciar Disciplinas
  addDisciplina(disciplina: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/disciplinas`, disciplina);
  }

  // Métodos para gerenciar Salas
  addSala(sala: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/salas`, sala);
  }

  // Métodos para gerenciar Turmas
  addTurma(turma: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/turmas`, turma);
  }
}
