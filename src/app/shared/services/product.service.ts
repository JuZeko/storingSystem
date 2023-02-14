import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgOption } from '@ng-select/ng-select';
import {
  Observable,
  throwError as observableThrowError,
  throwError,
} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from 'src/app/product-table/product-table.component';

import { ProductType } from '../models/ProductType';

@Injectable()
export class ProductTypeService {
  private storeSystem = 'app/productTypes';
  private food = 'app/food';
  private drinks = 'app/drinks';
  private electronics = 'app/electronics';
  // URL to web api

  constructor(private http: HttpClient) {}

  getProductTypes() {
    return this.http.get<ProductType[]>(this.storeSystem).pipe(
      map((data) => data),
      catchError(this.handleError)
    );
  }

  getFood() {
    return this.http.get<NgOption[]>(this.food).pipe(
      map((data) => data),
      catchError(this.handleError)
    );
  }

  getDrinks() {
    return this.http.get<NgOption[]>(this.drinks).pipe(
      map((data) => data),
      catchError(this.handleError)
    );
  }

  getElectronics() {
    return this.http.get<NgOption[]>(this.electronics).pipe(
      map((data) => data),
      catchError(this.handleError)
    );
  }

  createProduct(product: any): Observable<any> {
    return this.http.post<any>(this.food, product).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.food + id);
  }
}
