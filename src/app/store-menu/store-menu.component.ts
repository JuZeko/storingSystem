import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgOption } from '@ng-select/ng-select';
import { PeriodicElement } from '../product-table/product-table.component';
import { ProductTypeService } from '../shared/services/product.service';

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Julius', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-store-menu',
  templateUrl: './store-menu.component.html',
  styleUrls: ['./store-menu.component.scss'],
})
export class StoreMenuComponent {
  productTypes: NgOption[] = [];
  selectedProductTypeId: any;

  dataSource: any;

  constructor(private productTypeService: ProductTypeService) {}
  currentItem = ELEMENT_DATA;
  ngOnInit(): void {
    this.productTypeService
      .getProducts()
      .subscribe((productTypes) => (this.productTypes = productTypes));
  }
}
