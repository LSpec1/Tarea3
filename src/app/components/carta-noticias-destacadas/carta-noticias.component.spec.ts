import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaNoticiasDestacadasComponent } from './carta-noticias.component';

describe('CartaNoticiasComponent', () => {
  let component: CartaNoticiasDestacadasComponent;
  let fixture: ComponentFixture<CartaNoticiasDestacadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaNoticiasDestacadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaNoticiasDestacadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
