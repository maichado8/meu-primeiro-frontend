import { product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: product = {
    name:' Produto de teste ',
    price: 125.98
  }
  constructor(private ProductService: ProductService, 
    private router: Router) { }

  ngOnInit(): void {

  }

  createproduct():void{
    this.ProductService.create(this.product).subscribe(() => {
      this.ProductService.showMenssage('Operação executada com sucesso ')
      this.router.navigate(['/products'])

    })
  }
  cancel():void{
    this.router.navigate(['/products'])

}
}
