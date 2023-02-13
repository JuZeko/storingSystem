import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ProductType } from '../models/ProductType';

@Injectable()
export class ProductTypeService {
  private storeSystem = 'app/productTypes'; // URL to web api

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<ProductType[]>(this.storeSystem).pipe(
      map((data) => data),
      catchError(this.handleError)
    );
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
