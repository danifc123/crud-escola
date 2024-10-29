import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class salaService {
  private baseUrl = 'http://localhost:3000/salas'; // Corrigido para incluir '/Salas'

  constructor(private http: HttpClient) {}

  // Obter todos os Salas
  getSalas() {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  // Editar Sala
  editarSala(sala: any): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${sala.id}`, sala); // Corrigido para incluir '/Salas/'
  }

  // Excluir Sala
  excluirSala(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Reativar Sala
  reativarSala(id: number): Observable<any> {
    return this.http.put<void>(`${this.baseUrl}/${id}/reativar`, {});
  }

  // Pesquisar Salas
  pesquisarSalas(nome: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/search`, { params: { nome } });
  }
}
