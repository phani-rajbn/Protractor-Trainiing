/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EmpRepositoryComponent } from './emp-repository.component';

describe('EmpRepositoryComponent', () => {
  let component: EmpRepositoryComponent;
  let fixture: ComponentFixture<EmpRepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpRepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
