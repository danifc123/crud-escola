import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativarAlunosComponent } from './reativar-alunos.component';

describe('ReativarAlunosComponent', () => {
  let component: ReativarAlunosComponent;
  let fixture: ComponentFixture<ReativarAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReativarAlunosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReativarAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
