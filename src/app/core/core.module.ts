import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from 'src/app/core/containers/app.component';
import { NotFoundPageComponent } from 'src/app/core/containers/not-found-page.component';
import { LayoutComponent } from 'src/app/core/components/layout.component';
import { NavItemComponent } from 'src/app/core/components/nav-item.component';
import { SidenavComponent } from 'src/app/core/components/sidenav.component';
import { ToolbarComponent } from 'src/app/core/components/toolbar.component';
import { MaterialModule } from 'src/app/material';

export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent,
  LayoutComponent,
  NavItemComponent,
  SidenavComponent,
  ToolbarComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {}
