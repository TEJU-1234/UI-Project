// import { Component, HostListener, HostBinding } from '@angular/core';

// @Component({
//   selector: 'app-sidebar',
//   templateUrl: './sidebar.component.html',
//   styleUrls: ['./sidebar.component.css']
// })
// export class SidebarComponent {
//   collapsed: boolean = false; // toggle state
//   screenWidth: number = window.innerWidth;

//   @HostBinding('class.collapsed')
//   get isCollapsed() {
//     return this.collapsed;
//   }

//   constructor() {
//     this.checkScreenWidth();
//   }

//   toggleSidebar() {
//     this.collapsed = !this.collapsed;
//   }

//   @HostListener('window:resize', ['$event'])
//   onResize() {
//     this.checkScreenWidth();
//   }

//   private checkScreenWidth() {
//     this.screenWidth = window.innerWidth;
//     if (this.screenWidth < 768) {
//       this.collapsed = true; // collapse automatically on small screens
//     } else {
//       this.collapsed = false;
//     }
//   }
// }











import { Component, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isCollapsed: boolean = false;
  isMobileOpen: boolean = false;

  @Output() collapsedChange = new EventEmitter<boolean>();

  screenWidth: number = window.innerWidth;

  constructor() {
    this.checkScreenWidth();
  }

  toggleSidebar() {
    if (this.screenWidth < 768) {
      this.isMobileOpen = !this.isMobileOpen;
    } else {
      this.isCollapsed = !this.isCollapsed;
      this.collapsedChange.emit(this.isCollapsed);
    }
  }

  closeMobile() {
    if (this.screenWidth < 768) this.isMobileOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenWidth();
  }

  private checkScreenWidth() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 768) {
      this.isCollapsed = false;
    }
  }
}
