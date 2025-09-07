import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-project';
  isSidebarCollapsed: boolean = false;

  // toggleSidebar() {
  //   this.isSidebarCollapsed = !this.isSidebarCollapsed;
  // }
}
