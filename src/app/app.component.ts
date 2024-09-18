import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Components';


  message: string = '';
  name: string = '';     // To store the user's input
  displayName: string = '';  // To store the name to display

  showMessage() {
    this.message = 'Hello World';

  }
  showName() {
      this.displayName = this.name;



  }
}
