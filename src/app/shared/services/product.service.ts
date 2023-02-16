import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgOption } from '@ng-select/ng-select';
import {
  map,
  Observable,
  throwError as observableThrowError,
  throwError,
} from 'rxjs';
import { Product } from '../models/product';

import { ProductType } from '../models/ProductType';
import { environment } from '../../environments/environment';

@Injectable()
export class ProductTypeService {
  constructor(private http: HttpClient) {}

  headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  public getProductTypes(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(
      'https://localhost:7250/ProductType/getAll'
    );
  }

  public getProducts(foodType: string) {
    return this.http.get<NgOption[]>(
      'https://localhost:7250/Product/getAll/' + encodeURIComponent(foodType)
    );
  }

  public refreshProducts(productType: string): Observable<Product[]> {
    return this.http
      .get<Product[]>(
        'https://localhost:7250/Product/getAll/' +
          encodeURIComponent(productType)
      )
      .pipe(
        map((product) =>
          product.filter(
            (returnProduct) => returnProduct.productType == productType
          )
        )
      );
  }

  public deleteProduct(
    productId: string,
    productType: string
  ): Observable<Product[]> {
    return this.http
      .delete<Product[]>(
        environment.baseUrl + 'Product/delete/' + encodeURIComponent(productId)
      )
      .pipe(
        map((product) =>
          product.filter(
            (returnProduct) => returnProduct.productType == productType
          )
        )
      );
  }

  public createProduct(product: Product): Observable<Product[]> {
    var productType = product.productType;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers: headers };

    return this.http
      .post<Product[]>(
        environment.baseUrl + 'Product/create',
        JSON.stringify(product),
        options
      )
      .pipe(
        map((product) =>
          product.filter(
            (returnProduct) => returnProduct.productType == productType
          )
        )
      );
  }

  public updateProduct(product: Product): Observable<Product[]> {
    var productType = product.productType;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    let options = { headers: headers };
    return this.http
      .put<Product[]>(
        environment.baseUrl + 'Product/update',
        JSON.stringify(product),
        options
      )
      .pipe(
        map((product) =>
          product.filter(
            (returnProduct) => returnProduct.productType == productType
          )
        )
      );
  }
}
