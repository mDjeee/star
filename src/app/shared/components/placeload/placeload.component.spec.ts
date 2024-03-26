import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceloadComponent } from './placeload.component';

describe('PlaceloadComponent', () => {
  let component: PlaceloadComponent;
  let fixture: ComponentFixture<PlaceloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceloadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaceloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
