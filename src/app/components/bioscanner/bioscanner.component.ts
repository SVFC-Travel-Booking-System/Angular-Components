import { Component } from '@angular/core';

@Component({
  selector: 'app-bioscanner',
  templateUrl: './bioscanner.component.html',
  styleUrl: './bioscanner.component.css'
})
export class BioscannerComponent {
  name: string = ''; // User's name
  age: number | null = null; // User's age
  scannedData: string = ''; // Data to display

  // Method to process and display scanned data
  scanData() {
    if (this.name.trim().length > 0 && this.age !== null) {
      this.scannedData = `Name: ${this.name}, Age: ${this.age}`;
    } else {
      this.scannedData = 'Please enter both name and age.';
    }
  }

}
