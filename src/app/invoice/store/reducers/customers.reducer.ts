import { CustomersActions } from '../actions';
import { Customer } from '../../models/customer';

export interface State {
  items: Customer[];
  error: string;
}

const initialState: State = {
  items: [],
  error: ''
};

export function reducer(
        state = initialState,
        action:
            | CustomersActions.CustomersActionsUnion
        ): State {
    switch (action.type) {
        case CustomersActions.CustomersActionTypes.LoadCustomers: {
            return {
                ...state,
                items: action.payload
            };
        }
        case CustomersActions.CustomersActionTypes.LoadCustomersSuccess: {
            return {
                ...state,
                items: action.payload
            };
        }
        case CustomersActions.CustomersActionTypes.LoadCustomersFailure: {
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

export const getItems = (state: State) => state.items;
export const getError = (state: State) => state.error;
