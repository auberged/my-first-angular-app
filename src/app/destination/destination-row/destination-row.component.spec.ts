import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationRowComponent } from './destination-row.component';

describe('DestinationRowComponent', () => {
  let component: DestinationRowComponent;
  let fixture: ComponentFixture<DestinationRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DestinationRowComponent]
    });
    fixture = TestBed.createComponent(DestinationRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
