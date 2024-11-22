import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTurmaHasAlunoComponent } from './lista-turma-has-aluno.component';

describe('ListaTurmaHasAlunoComponent', () => {
  let component: ListaTurmaHasAlunoComponent;
  let fixture: ComponentFixture<ListaTurmaHasAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTurmaHasAlunoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaTurmaHasAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
