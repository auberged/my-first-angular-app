import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationContainerComponent } from './destination-container.component';

describe('DestinationContainerComponent', () => {
  let component: DestinationContainerComponent;
  let fixture: ComponentFixture<DestinationContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DestinationContainerComponent]
    });
    fixture = TestBed.createComponent(DestinationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
