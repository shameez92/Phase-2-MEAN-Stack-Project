import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineExamComponent } from './online-exam.component';

describe('OnlineExamComponent', () => {
  let component: OnlineExamComponent;
  let fixture: ComponentFixture<OnlineExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
