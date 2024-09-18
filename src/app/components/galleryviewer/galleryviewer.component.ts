import { Component } from '@angular/core';

@Component({
  selector: 'app-galleryviewer',
  templateUrl: './galleryviewer.component.html',
  styleUrl: './galleryviewer.component.css'
})
export class GalleryviewerComponent {
   // Array of image URLs for the gallery
   images: string[] = [
    'https://via.placeholder.com/300x200?text=Image+1',
    'https://via.placeholder.com/300x200?text=Image+2',
    'https://via.placeholder.com/300x200?text=Image+3'
  ];

  // Variable to track the current image being displayed
  currentIndex: number = 0;

  // Function to navigate to the previous image
  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  // Function to navigate to the next image
  nextImage() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    }
  }

}
