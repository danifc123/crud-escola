import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarTurmaComponent } from './adicionar-turma.component';

describe('AdicionarTurmaComponent', () => {
  let component: AdicionarTurmaComponent;
  let fixture: ComponentFixture<AdicionarTurmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarTurmaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdicionarTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
