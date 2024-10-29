import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorService } from '../editar-professor/services/professor.service';

@Component({
  selector: 'app-lista-professores',
  templateUrl: './lista-professores.component.html',
  styleUrls: ['./lista-professores.component.css'],
})
export class ListaProfessoresComponent implements OnInit {
  professores: any[] = [];

  constructor(
    private router: Router,
    private professorService: ProfessorService // Injeção do serviço de professores
  ) {}

  // lista-professores.component.ts
  ngOnInit() {
    this.carregarProfessores();
  }
  carregarProfessores() {
    this.professorService.getProfessores().subscribe((data) => {
      this.professores = data;
    });
  }
  editarProfessor(id: number) {
    this.router.navigate(['/editar-professor', id]);
  }

  excluirProfessor(id: number) {
    if (confirm('Você realmente deseja excluir este professor?')) {
      this.professorService.excluirProfessor(id).subscribe(
        () => {
          alert('Professor excluído com sucesso!');
          this.carregarProfessores(); // Atualiza a lista de professores após a exclusão
        },
        (error) => {
          alert('Erro ao excluir professor: ' + error.message);
        }
      );
    }
  }
  reativarProfessor(id: number) {
    this.professorService.reativarProfessor(id).subscribe(
      () => {
        alert('Professor reativado com sucesso!');
        this.carregarProfessores(); // Recarrega a lista de professores
      },
      (error) => {
        alert('Erro ao reativar professor: ' + error.message);
      }
    );
  }

  nomePesquisa: string = ''; // Campo para armazenar o termo de pesquisa
  pesquisarProfessores() {
    if (this.nomePesquisa.trim() === '') {
      this.carregarProfessores(); // Se o campo estiver vazio, carregue todos os professores
    } else {
      this.professorService.pesquisarProfessores(this.nomePesquisa).subscribe(
        (data) => {
          this.professores = data;
        },
        (error) => {
          alert('Erro ao buscar professores: ' + error.message);
        }
      );
    }
  }
}
