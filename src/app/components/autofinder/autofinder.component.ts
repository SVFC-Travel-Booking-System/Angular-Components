import { Component } from '@angular/core';

@Component({
  selector: 'app-autofinder',
  templateUrl: './autofinder.component.html',
  styleUrl: './autofinder.component.css'
})
export class AutofinderComponent {
  searchQuery: string = ''; // User input for search query
  suggestions: string[] = []; // List of suggestions based on search
  allSuggestions: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape', 'Kiwi']; // Sample data
  selectedSuggestion: string | null = null; // Track selected suggestion

  // Method to filter suggestions based on user input
  filterSuggestions() {
    if (this.searchQuery) {
      this.suggestions = this.allSuggestions.filter(item =>
        item.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.suggestions = [];
    }
  }

  // Method to handle item selection
  selectSuggestion(suggestion: string) {
    this.searchQuery = suggestion;
    this.suggestions = [];
    this.selectedSuggestion = suggestion;
  }

  // Method to clear selected item
  clearSelection() {
    this.searchQuery = '';
    this.selectedSuggestion = null;
    this.suggestions = [];
  }
}
