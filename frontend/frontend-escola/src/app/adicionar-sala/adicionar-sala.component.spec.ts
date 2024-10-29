import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarSalaComponent } from './adicionar-sala.component';

describe('AdicionarSalaComponent', () => {
  let component: AdicionarSalaComponent;
  let fixture: ComponentFixture<AdicionarSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarSalaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdicionarSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
