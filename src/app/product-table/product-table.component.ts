import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductTypeService } from '../shared/services/product.service';

export interface Product {
  id: number;
  name: string;
}

@Component({
  selector: 'app-product-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  removeProduct(productId: string) {
    this.productTypeService
      .deleteProduct(productId)
      .subscribe(() => (this.dataSource = this.item));
  }
}
