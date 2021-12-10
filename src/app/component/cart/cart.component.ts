import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(private _cartService : CartService) { }

  ngOnInit(): void {
    this._cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this._cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this._cartService.removeCartItem(item);
  }
  emptycart(){
    this._cartService.removeAllCart();
  }

}
