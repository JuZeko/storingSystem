import { Component, Input } from '@angular/core';

export interface PeriodicElement {
  id: number;
  name: string;
}

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent {
  @Input() item: any;
  displayedColumns: string[] = ['id', 'name'];
  dataSource: any;
  ngOnInit(): void {
    this.dataSource = this.item;
  }

  ngOnChanges() {
    this.dataSource = this.item;
  }
}
