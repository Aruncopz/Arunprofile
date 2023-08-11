import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowprojectComponent } from './showproject.component';

describe('ShowprojectComponent', () => {
  let component: ShowprojectComponent;
  let fixture: ComponentFixture<ShowprojectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowprojectComponent]
    });
    fixture = TestBed.createComponent(ShowprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
