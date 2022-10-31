import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSalidaComponent } from './formulario-salida.component';

describe('FormularioSalidaComponent', () => {
  let component: FormularioSalidaComponent;
  let fixture: ComponentFixture<FormularioSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioSalidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
