import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativarSalaComponent } from './reativar-sala.component';

describe('ReativarSalaComponent', () => {
  let component: ReativarSalaComponent;
  let fixture: ComponentFixture<ReativarSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReativarSalaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReativarSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
