import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  notifications = 4;
  userName = 'John Doe';

  onSearch(query: string) {
    console.log('Search query:', query);
  }

  logout() {
    console.log('User logged out');
  }
}
