import { Component, OnInit } from '@angular/core';
import{Router } from '@angular/router'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //atributoLegal = "qualquer"

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  ;//FazerAlgo(): void{
    //console.log('FAZENDO ALGO')
  //}

  navigateToProductCreate(): void{
    this.router.navigate(['/products/create'])

  }

}
