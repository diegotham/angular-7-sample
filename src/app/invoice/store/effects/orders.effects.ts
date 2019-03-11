import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  catchError,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';

import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { OrdersActionTypes } from '../actions/orders';
import { OrdersActions } from '../actions';
import { Order } from '../../models/order';
import { OrdersService } from '../../services/orders.service';

@Injectable()
export class OrdersEffects {
  @Effect()
  loadOrdersFromUpdate$ = this.actions$
      .pipe(ofType(OrdersActionTypes.UpdateFilters),
      switchMap(() => {
        return this.ordersService.getOrders().pipe(
          map((items: Order[]) => new OrdersActions.LoadOrdersSuccessAction(items)),
          catchError(err => of(new OrdersActions.LoadOrdersFailureAction(err)))
        );
      })
  );
  @Effect({ dispatch: false })
  loadOrdersError$ = this.actions$.pipe(
    ofType(OrdersActionTypes.LoadOrdersFailure),
    tap(() => this.snackBar.open('There was an error loading Orders', 'Ok', {duration: 6000}))
  );
  constructor(
    private actions$: Actions,
    private ordersService: OrdersService,
    private snackBar: MatSnackBar
  ) {}
}
