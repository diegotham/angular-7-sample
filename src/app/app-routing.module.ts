import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './core/containers/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/invoice', pathMatch: 'full' },
  {
    path: 'invoice',
    loadChildren: './invoice/invoice.module#InvoiceModule'
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
