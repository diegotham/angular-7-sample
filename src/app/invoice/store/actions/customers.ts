import { Action } from '@ngrx/store';

export enum CustomersActionTypes {
  LoadCustomers = '[Customers] Load Customers',
  LoadCustomersSuccess = '[Customers] Load Customers Success',
  LoadCustomersFailure = '[Customers] Load Customers Failure',
}

export class LoadCustomersAction implements Action {
  readonly type = CustomersActionTypes.LoadCustomers;
  constructor(public payload?: any) {}
}

export class LoadCustomersSuccessAction implements Action {
  readonly type = CustomersActionTypes.LoadCustomersSuccess;
  constructor(public payload?: any) {}
}

export class LoadCustomersFailureAction implements Action {
  readonly type = CustomersActionTypes.LoadCustomersFailure;
  constructor(public payload?: any) {}
}

export type CustomersActionsUnion =
    LoadCustomersAction
    | LoadCustomersSuccessAction
    | LoadCustomersFailureAction;
