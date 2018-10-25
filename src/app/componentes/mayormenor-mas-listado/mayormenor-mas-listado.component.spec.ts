import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayormenorMasListadoComponent } from './mayormenor-mas-listado.component';

describe('MayormenorMasListadoComponent', () => {
  let component: MayormenorMasListadoComponent;
  let fixture: ComponentFixture<MayormenorMasListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayormenorMasListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayormenorMasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
