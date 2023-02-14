import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductTypeService } from '../shared/services/product.service';

export interface Product {
  id: number;
  name: string;
}

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent {
  @Input() item: any;
  form = new FormGroup({
    product: new FormControl(''),
  });
  constructor(private productTypeService: ProductTypeService) {}

  displayedColumns: string[] = ['id', 'name'];
  dataSource: any;
  ngOnInit(): void {
    this.dataSource = this.item;
  }

  ngOnChanges() {
    this.dataSource = this.item;
  }

  AddProduct() {
    this.productTypeService.createProduct(this.form.value.product);
    this.dataSource = this.item;
  }

  removeProduct(product: Product) {
    const id = product.id;
    console.log(product);
    this.productTypeService
      .deleteProduct(id)
      .subscribe((product) => console.log(product));
    this.dataSource = this.item;
  }
}
