import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillspageComponent } from './skillspage.component';

describe('SkillspageComponent', () => {
  let component: SkillspageComponent;
  let fixture: ComponentFixture<SkillspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillspageComponent]
    });
    fixture = TestBed.createComponent(SkillspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
