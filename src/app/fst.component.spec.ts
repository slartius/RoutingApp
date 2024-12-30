import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FstComponent } from './fst.component';

describe('FstComponent', () => {
  let component: FstComponent;
  let fixture: ComponentFixture<FstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
