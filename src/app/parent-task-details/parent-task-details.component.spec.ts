import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTaskDetailsComponent } from './parent-task-details.component';

describe('ParentTaskDetailsComponent', () => {
  let component: ParentTaskDetailsComponent;
  let fixture: ComponentFixture<ParentTaskDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentTaskDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
