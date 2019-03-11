import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { MaterialModule } from '../material';
import { CustomersRoutingModule } from './invoice-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EffectsModule } from '@ngrx/effects';
import { CustomersEffects } from './store/effects/customers.effects';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { OrdersEffects } from './store/effects/orders.effects';
import { InvoiceComponent } from './containers/invoice/invoice.component';
import { OrderItemComponent } from './components/order-item/order-item.component';

@NgModule({
  declarations: [
    InvoiceComponent,
    OrderItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CustomersRoutingModule,
    FlexLayoutModule,
    NgxDaterangepickerMd.forRoot(),
    StoreModule.forFeature('invoice', reducers),
    EffectsModule.forFeature([CustomersEffects, OrdersEffects]),
  ]
})
export class InvoiceModule { }
