import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSoftwareComponent } from './crud-software.component';

describe('CrudSoftwareComponent', () => {
  let component: CrudSoftwareComponent;
  let fixture: ComponentFixture<CrudSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudSoftwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
