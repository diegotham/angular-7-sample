import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../models/order';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  @Input() order: Order;
  totalPrice: number;
  constructor() { }

  ngOnInit() {
    this.totalPrice = this.order.items.reduce((a, b) => a + (+b.total_price.amount || 0), 0);
  }

}
