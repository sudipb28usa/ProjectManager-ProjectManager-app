import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTaskUpdateComponent } from './parent-task-update.component';

describe('ParentTaskUpdateComponent', () => {
  let component: ParentTaskUpdateComponent;
  let fixture: ComponentFixture<ParentTaskUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentTaskUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTaskUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
