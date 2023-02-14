import { Component } from '@angular/core';

@Component({
  selector: 'app-page-permissions',
  templateUrl: './page-permissions.component.html',
  styleUrls: ['./page-permissions.component.scss'],
})
export class PagePermissionsComponent {
  isUserAdmin: boolean | undefined;

  onSwitcTohUser() {
    this.isUserAdmin = false;
  }

  onSwitchToAdmin() {
    this.isUserAdmin = true;
  }
}
