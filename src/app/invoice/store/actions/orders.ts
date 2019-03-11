import { Action } from '@ngrx/store';

export enum OrdersActionTypes {
  UpdateFilters = '[Orders] Update Filter',
  LoadOrdersSuccess = '[Orders] Load Orders Success',
  LoadOrdersFailure = '[Orders] Load Orders Failure',
}

export class LoadOrdersSuccessAction implements Action {
  readonly type = OrdersActionTypes.LoadOrdersSuccess;
  constructor(public payload?: any) {}
}
export class LoadOrdersFailureAction implements Action {
  readonly type = OrdersActionTypes.LoadOrdersFailure;
  constructor(public payload?: any) {}
}

export class UpdateFiltersAction implements Action {
  readonly type = OrdersActionTypes.UpdateFilters;
  constructor(public payload?: any) {}
}

export type OrdersActionsUnion =
    | LoadOrdersSuccessAction
    | LoadOrdersFailureAction
    | UpdateFiltersAction
    ;
