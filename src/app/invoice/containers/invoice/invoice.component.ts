import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromInvoice from '../../store/reducers';
import { Moment } from 'moment';
import { Observable } from 'rxjs';
import { Customer } from '../../models/customer';
import { OrdersActions } from '../../store/actions';
import { Order, OrdersFilter } from '../../models/order';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  customers$: Observable<Customer[]>;
  orders$: Observable<Order[]>;

  totalOrders$: Observable<number>;
  totalOrdersAmount$: Observable<number>;
  ordersFilter$: Observable<OrdersFilter>;
  daysRangeFilter$: Observable<number>;
  isDateRangeSelected$: Observable<boolean>;
  constructor(private store: Store<fromInvoice.State>) { }

  ngOnInit() {
    this.customers$ = this.store.select(fromInvoice.getCustomerList);
    this.orders$ = this.store.select(fromInvoice.getOrdersList);
    this.totalOrders$ = this.store.select(fromInvoice.getTotalOrders);
    this.totalOrdersAmount$ = this.store.select(fromInvoice.getTotalOrdersAmount);
    this.ordersFilter$ = this.store.select(fromInvoice.getOrdersFilter);
    this.daysRangeFilter$ = this.store.select(fromInvoice.getDaysRangeFilter);
    this.isDateRangeSelected$ = this.store.select(fromInvoice.isDateRangeSelected);
  }
  changeDate(period: {startDate: Moment, endDate: Moment}) {
    this.store.dispatch(new OrdersActions.UpdateFiltersAction(period));
  }
  changeCustomer(customerId: string) {
    this.store.dispatch(new OrdersActions.UpdateFiltersAction({customerId}));
  }
}
