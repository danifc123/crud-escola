import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDisciplinaComponent } from './editar-disciplina.component';

describe('EditarDisciplinaComponent', () => {
  let component: EditarDisciplinaComponent;
  let fixture: ComponentFixture<EditarDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarDisciplinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
