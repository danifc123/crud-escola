import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarDisciplinaComponent } from './adicionar-disciplina.component';

describe('AdicionarDisciplinaComponent', () => {
  let component: AdicionarDisciplinaComponent;
  let fixture: ComponentFixture<AdicionarDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarDisciplinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdicionarDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
