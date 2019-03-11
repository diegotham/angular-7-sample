import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {
  catchError,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';

import { CustomersActions } from '../actions';
import { CustomersActionTypes } from '../actions/customers';
import { CustomersService } from '../../services/customers.service';
import { defer, of, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { Customer } from '../../models/customer';

@Injectable()
export class CustomersEffects {
  @Effect()
  loadCustomers$ = this.actions$
      .pipe(ofType(CustomersActionTypes.LoadCustomers),
      switchMap(() => {
        return this.customersService.getAllCustomers().pipe(
          map((items: Customer[]) => new CustomersActions.LoadCustomersSuccessAction(items)),
          catchError(err => of(new CustomersActions.LoadCustomersFailureAction(err)))
        );
      })
  );
  @Effect({ dispatch: false })
  loadCustomersError$ = this.actions$.pipe(
    ofType(CustomersActionTypes.LoadCustomersFailure),
    tap(() => this.snackBar.open('There was an error loading customers', 'Ok', {duration: 6000}))
  );
  @Effect()
  init(): Observable<Action> {
      return defer(() => of(new CustomersActions.LoadCustomersAction()));
  }
  constructor(
    private actions$: Actions,
    private customersService: CustomersService,
    private snackBar: MatSnackBar
  ) {}
}
