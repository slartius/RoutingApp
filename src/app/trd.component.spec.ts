import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrdComponent } from './trd.component';

describe('TrdComponent', () => {
  let component: TrdComponent;
  let fixture: ComponentFixture<TrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
