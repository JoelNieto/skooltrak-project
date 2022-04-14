import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyplansComponent } from './studyplans.component';

describe('StudyplansComponent', () => {
  let component: StudyplansComponent;
  let fixture: ComponentFixture<StudyplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
