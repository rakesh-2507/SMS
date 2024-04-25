import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedetailComponent } from './managedetail.component';

describe('ManagedetailComponent', () => {
  let component: ManagedetailComponent;
  let fixture: ComponentFixture<ManagedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagedetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
