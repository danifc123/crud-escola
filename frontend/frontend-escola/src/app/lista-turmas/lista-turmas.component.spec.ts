import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTurmasComponent } from './lista-turmas.component';

describe('ListaTurmasComponent', () => {
  let component: ListaTurmasComponent;
  let fixture: ComponentFixture<ListaTurmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTurmasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaTurmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
