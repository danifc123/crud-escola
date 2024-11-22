import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTurmaHasAlunoComponent } from './editar-turma-has-aluno.component';

describe('EditarTurmaHasAlunoComponent', () => {
  let component: EditarTurmaHasAlunoComponent;
  let fixture: ComponentFixture<EditarTurmaHasAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarTurmaHasAlunoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarTurmaHasAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
