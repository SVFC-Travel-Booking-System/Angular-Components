import { Component } from '@angular/core';

@Component({
  selector: 'app-bmisolver',
  templateUrl: './bmisolver.component.html',
  styleUrl: './bmisolver.component.css'
})
export class BmisolverComponent {
  height: number | null = null; // User's height in cm
  weight: number | null = null; // User's weight in kg
  bmi: number | null = null; // Calculated BMI

  // Method to calculate BMI
  calculateBMI() {
    if (this.height && this.weight) {
      const heightInMeters = this.height / 100; // Convert cm to meters
      this.bmi = this.weight / (heightInMeters * heightInMeters);
    }
  }

}
