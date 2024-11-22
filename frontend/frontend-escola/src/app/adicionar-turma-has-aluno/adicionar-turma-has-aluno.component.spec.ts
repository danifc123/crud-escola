import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarTurmaHasAlunoComponent } from './adicionar-turma-has-aluno.component';

describe('AdicionarTurmaHasAlunoComponent', () => {
  let component: AdicionarTurmaHasAlunoComponent;
  let fixture: ComponentFixture<AdicionarTurmaHasAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarTurmaHasAlunoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdicionarTurmaHasAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
