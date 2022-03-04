import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPlatilloComponent } from './crud-platillo.component';

describe('CrudPlatilloComponent', () => {
  let component: CrudPlatilloComponent;
  let fixture: ComponentFixture<CrudPlatilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudPlatilloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPlatilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
