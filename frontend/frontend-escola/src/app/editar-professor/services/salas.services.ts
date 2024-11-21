import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class salaService {
  private baseUrl = 'http://localhost:3000/salas';

  constructor(private http: HttpClient) {}

  getSalas(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  editarSala(sala: any): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${sala.id}`, sala);
  }

  excluirSala(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  reativarSala(id: number): Observable<any> {
    return this.http.put<void>(`${this.baseUrl}/${id}/reativar`, {});
  }

  pesquisarSalas(nome: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/search`, { params: { nome } });
  }
}
