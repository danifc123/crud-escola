import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativarDisciplinaComponent } from './reativar-disciplina.component';

describe('ReativarDisciplinaComponent', () => {
  let component: ReativarDisciplinaComponent;
  let fixture: ComponentFixture<ReativarDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReativarDisciplinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReativarDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
