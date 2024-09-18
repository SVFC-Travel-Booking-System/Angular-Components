import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryviewerComponent } from './galleryviewer.component';

describe('GalleryviewerComponent', () => {
  let component: GalleryviewerComponent;
  let fixture: ComponentFixture<GalleryviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryviewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
