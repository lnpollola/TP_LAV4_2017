import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PptMasListadoComponent } from './ppt-mas-listado.component';

describe('PptMasListadoComponent', () => {
  let component: PptMasListadoComponent;
  let fixture: ComponentFixture<PptMasListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PptMasListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PptMasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
