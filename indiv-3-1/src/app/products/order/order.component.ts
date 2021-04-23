import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Product';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  products!: Producto[];
  quantity: number[];
  total: number = 0;

  constructor() {
    this.products = [
      new Producto('123', 'Arroz', 1350, ''),
      new Producto('125', 'Huevos', 880, ''),
      new Producto('125', 'Fideos', 720, ''),
      new Producto('22', 'Huevos', 880, ''),
      new Producto('120', 'Jalea', 100, ''),
      new Producto('125', 'Cereal', 3500, ''),];
    this.quantity = [0, 0, 0, 0, 0, 0];
  }

  ngOnInit(): void {
  }

  add(id: number) {
    this.quantity[id]++;
    this.total += this.products[id].price;
  }

  substract(id: number) {
    if (this.quantity[id] > 0) {
      this.quantity[id]--;
      this.total -= this.products[id].price;
    }
  }

}
