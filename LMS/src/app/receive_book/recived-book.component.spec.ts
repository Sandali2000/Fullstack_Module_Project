import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecivedBookComponent } from './recived-book.component';

describe('RecivedBookComponent', () => {
  let component: RecivedBookComponent;
  let fixture: ComponentFixture<RecivedBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecivedBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecivedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
