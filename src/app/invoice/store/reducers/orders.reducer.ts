import { OrdersActions } from '../actions';
import { OrdersFilter, Order } from '../../models/order';

export interface State {
  filter: OrdersFilter;
  items: Order[];
  error: string;
}

const initialState: State = {
  filter: {
      customerId: null,
      startDate: null,
      endDate: null
  },
  items: [],
  error: ''
};

export function reducer(
        state = initialState,
        action:
            | OrdersActions.OrdersActionsUnion
        ): State {
    switch (action.type) {
        case OrdersActions.OrdersActionTypes.UpdateFilters: {
            return {
                ...state,
                filter: {
                    ...state.filter,
                    ...action.payload
                }
            };
        }
        case OrdersActions.OrdersActionTypes.LoadOrdersSuccess: {
            return {
                ...state,
                items: action.payload
            };
        }
        case OrdersActions.OrdersActionTypes.LoadOrdersFailure: {
            return {
                ...state,
                error: action.payload
            };
        }
        default: return {
            ...state
        };
    }
}

export const getFilter = (state: State) => state.filter;
export const getItems = (state: State) => state.items;
