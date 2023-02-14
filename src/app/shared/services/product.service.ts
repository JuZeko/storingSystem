import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgOption } from '@ng-select/ng-select';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

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

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
