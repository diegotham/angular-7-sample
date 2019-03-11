import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from '@ngrx/store';
import * as fromCustomers from './customers.reducer';
import * as fromOrders from './orders.reducer';
import * as fromRoot from 'src/app/reducers';
import * as moment from 'moment';

export interface InvoiceState {
    customers: fromCustomers.State;
    orders: fromOrders.State;
}

export interface State extends fromRoot.State {
    invoice: InvoiceState;
}

export const reducers: ActionReducerMap<InvoiceState, any> = {
    customers: fromCustomers.reducer,
    orders: fromOrders.reducer
};

export const getInvoiceState = createFeatureSelector<State, InvoiceState>('invoice');

export const getCustomersState = createSelector(getInvoiceState, state => state.customers);
export const getCustomerList = createSelector(getCustomersState, fromCustomers.getItems);

export const getOrdersState = createSelector(getInvoiceState, state => state.orders);
export const getOrdersList = createSelector(getOrdersState, fromOrders.getItems);
export const getOrdersFilter = createSelector(getOrdersState, fromOrders.getFilter);

export const isDateRangeSelected = createSelector(
    getOrdersFilter,
    (filter) => filter.endDate !== null && filter.startDate !== null
);

export const getDaysRangeFilter = createSelector(
    getOrdersFilter,
    (filter) => {
    return moment(filter.endDate).diff(filter.startDate, 'days');
});

export const getTotalOrders = createSelector(
    getOrdersList,
    (orders) => orders.length
);
export const getTotalOrdersAmount = createSelector(
    getOrdersList,
    (orders) => orders.reduce((a, b) => a + +b.charge_customer.total_price, 0)
);

