import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutofinderComponent } from './autofinder.component';

describe('AutofinderComponent', () => {
  let component: AutofinderComponent;
  let fixture: ComponentFixture<AutofinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutofinderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutofinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
