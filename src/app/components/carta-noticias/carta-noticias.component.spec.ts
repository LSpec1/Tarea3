import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaNoticiasComponent } from './carta-noticias.component';

describe('CartaNoticiasComponent', () => {
  let component: CartaNoticiasComponent;
  let fixture: ComponentFixture<CartaNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaNoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
