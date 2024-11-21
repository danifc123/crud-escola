import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativarProfessorComponent } from './reativar-professor.component';

describe('ReativarProfessorComponent', () => {
  let component: ReativarProfessorComponent;
  let fixture: ComponentFixture<ReativarProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReativarProfessorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReativarProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
