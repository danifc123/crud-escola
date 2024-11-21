import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativarTurmaComponent } from './reativar-turma.component';

describe('ReativarTurmaComponent', () => {
  let component: ReativarTurmaComponent;
  let fixture: ComponentFixture<ReativarTurmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReativarTurmaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReativarTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
