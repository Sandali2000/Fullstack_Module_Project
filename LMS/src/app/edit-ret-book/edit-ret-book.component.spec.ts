import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRetBookComponent } from './edit-ret-book.component';

describe('EditRetBookComponent', () => {
  let component: EditRetBookComponent;
  let fixture: ComponentFixture<EditRetBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRetBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRetBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
