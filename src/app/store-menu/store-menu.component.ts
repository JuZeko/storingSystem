import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgOption } from '@ng-select/ng-select';
import { ProductTypeService } from '../shared/services/product.service';

@Component({
  selector: 'app-store-menu',
  templateUrl: './store-menu.component.html',
  styleUrls: ['./store-menu.component.scss'],
})
export class StoreMenuComponent {
  productTypes: NgOption[] = [];
  selectedProductTypeId: any;
  currentProductType: string | undefined;
  dataSource: any;

  constructor(private productTypeService: ProductTypeService) {}
  currentItem!: NgOption[];
  isPermissionAdmin: boolean | undefined;
  ngOnInit(): void {
    this.productTypeService
      .getProductTypes()
      .subscribe((productTypes) => (this.productTypes = productTypes));
  }

  public changeProductType(): void {
    switch (this.selectedProductTypeId) {
      case 1:
        this.productTypeService
          .getProducts('food')
          .subscribe((productTypes) => (this.currentItem = productTypes));
        this.currentProductType = 'food';
        break;
      case 2:
        this.productTypeService
          .getProducts('drinks')
          .subscribe((productTypes) => (this.currentItem = productTypes));
        this.currentProductType = 'drinks';
        break;
      case 3:
        this.productTypeService
          .getProducts('electronics')
          .subscribe((productTypes) => (this.currentItem = productTypes));
        this.currentProductType = 'electronics';
        break;
    }
  }

  public isAdmin(isPermissionAdmin: boolean): void {
    this.isPermissionAdmin = isPermissionAdmin;
  }
}
