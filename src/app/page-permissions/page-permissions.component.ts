import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page-permissions',
  templateUrl: './page-permissions.component.html',
  styleUrls: ['./page-permissions.component.scss'],
})
export class PagePermissionsComponent {
  isUserAdmin: boolean = false;
  @Output() permission = new EventEmitter();

  onSwitcTohUser() {
    this.isUserAdmin = false;
    this.permission.emit(this.isUserAdmin);
  }

  onSwitchToAdmin() {
    this.isUserAdmin = true;
    this.permission.emit(this.isUserAdmin);
  }
}
