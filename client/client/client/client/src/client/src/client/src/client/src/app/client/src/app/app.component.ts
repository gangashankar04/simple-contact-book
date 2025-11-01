import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Contact Book</h1>
      <app-contact-form (contactAdded)="onContactAdded()"></app-contact-form>
      <app-contact-list #contactList></app-contact-list>
    </div>
  `
})
export class AppComponent {
  onContactAdded() {
    // Refresh contact list when new contact is added
  }
}
