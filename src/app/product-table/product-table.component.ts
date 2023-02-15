import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../shared/models/product';
import { ProductTypeService } from '../shared/services/product.service';

@Component({
  selector: 'app-product-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent {
  @Input() item: any;
  @Input() isPermissionAdmin: boolean | undefined;
  @Input() currentProductType: any;

  editProducts: boolean = false;
  form = new FormGroup({
    product: new FormControl(''),
  });

  updateProducts: boolean = false;
  updateForm = new FormGroup({
    productId: new FormControl(''),
    productName: new FormControl(''),
  });

  constructor(private productTypeService: ProductTypeService) {}

  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource = new MatTableDataSource<Product>();

  ngOnInit(): void {
    this.dataSource = this.item;
  }

  ngOnChanges() {
    this.dataSource = this.item;
  }

  public AddProduct(): void {
    const product: Product = {
      id: undefined,
      name: this.form.value.product?.toString(),
      productType: this.currentProductType,
    };

    this.productTypeService
      .createProduct(product)
      .subscribe((data: Product[]) => {
        this.dataSource.data = data;
      });
    this.dataSource = new MatTableDataSource<Product>();
  }

  public removeProduct(productId: string, productType: string): void {
    this.productTypeService
      .deleteProduct(productId, productType)
      .subscribe((data: Product[]) => {
        this.dataSource.data = data;
      });
    this.dataSource = new MatTableDataSource<Product>();
  }

  public updateProduct(): void {
    const product: Product = {
      id: this.updateForm.value.productId?.toString(),
      name: this.updateForm.value.productName?.toString(),
      productType: this.currentProductType,
    };

    this.productTypeService
      .updateProduct(product)
      .subscribe((data: Product[]) => {
        this.dataSource.data = data;
      });
  }
}
