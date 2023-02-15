import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgOption } from '@ng-select/ng-select';
import { Product } from '../product-table/product-table.component';
import { ProductTypeService } from '../shared/services/product.service';

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
  currentItem!: NgOption[];
  ngOnInit(): void {
    this.productTypeService
      .getProductTypes()
      .subscribe((productTypes) => (this.productTypes = productTypes));
  }

  public changeProductType(): void {
    console.log(this.selectedProductTypeId);
    switch (this.selectedProductTypeId) {
      case 1:
        this.productTypeService
          .getProducts('food')
          .subscribe((productTypes) => (this.currentItem = productTypes));
        break;
      case 2:
        this.productTypeService
          .getProducts('drinks')
          .subscribe((productTypes) => (this.currentItem = productTypes));
        break;
      case 3:
        this.productTypeService
          .getProducts('electronics')
          .subscribe((productTypes) => (this.currentItem = productTypes));
        break;
    }
  }

  ngOnChanges() {
    console.log('132123');
  }
}
