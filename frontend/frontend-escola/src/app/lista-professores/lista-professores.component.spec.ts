import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProfessoresComponent } from './lista-professores.component';

describe('ListaProfessoresComponent', () => {
  let component: ListaProfessoresComponent;
  let fixture: ComponentFixture<ListaProfessoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaProfessoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
