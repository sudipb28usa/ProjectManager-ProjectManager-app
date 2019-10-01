import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTaskCreateComponent } from './parent-task-create.component';

describe('ParentTaskCreateComponent', () => {
  let component: ParentTaskCreateComponent;
  let fixture: ComponentFixture<ParentTaskCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentTaskCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTaskCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
