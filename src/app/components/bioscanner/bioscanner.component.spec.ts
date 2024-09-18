import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioscannerComponent } from './bioscanner.component';

describe('BioscannerComponent', () => {
  let component: BioscannerComponent;
  let fixture: ComponentFixture<BioscannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BioscannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioscannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
