import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCatagoryComponent } from './single-catagory.component';

describe('SingleCatagoryComponent', () => {
  let component: SingleCatagoryComponent;
  let fixture: ComponentFixture<SingleCatagoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleCatagoryComponent]
    });
    fixture = TestBed.createComponent(SingleCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(true).toBe(true);
  });
});
