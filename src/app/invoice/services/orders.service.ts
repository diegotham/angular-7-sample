import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { OrdersFilter, Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  // private API_PATH = 'http://polls.apiblueprint.org';
  private API_PATH = './assets/orders.json';

  constructor(private http: HttpClient) {}

  getOrders(filter: OrdersFilter = null): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.API_PATH}`);
  }
}
