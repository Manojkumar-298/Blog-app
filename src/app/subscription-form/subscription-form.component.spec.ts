import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubscriptionFormComponent } from './subscription-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SubscriptionFormComponent', () => {
  let component: SubscriptionFormComponent;
  let fixture: ComponentFixture<SubscriptionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [SubscriptionFormComponent]
    })
    .compileComponents();});
    beforeEach(()=>{
    fixture = TestBed.createComponent(SubscriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('form invalid when empty',()=>{
  //   expect(component.form.valid).toBeFalsy();
  // });
});