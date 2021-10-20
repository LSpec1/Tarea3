import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaNoticiasOtroComponent } from './carta-noticias-otro.component';

describe('CartaNoticiasOtroComponent', () => {
  let component: CartaNoticiasOtroComponent;
  let fixture: ComponentFixture<CartaNoticiasOtroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaNoticiasOtroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaNoticiasOtroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
