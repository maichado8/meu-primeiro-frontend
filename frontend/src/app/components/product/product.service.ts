import { product } from './product.model';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl= "http://localhost:3001/products"

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }
  
  showMenssage( msg: string ): void {
    this.snackbar.open(msg, 'Fechar', {
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })

  }

  create(product:product): Observable<product>{
    return this.http.post<product>(this.baseUrl, product)
  }

}
