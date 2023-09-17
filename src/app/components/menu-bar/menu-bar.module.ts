import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuMainComponent } from './menu-main/menu-main.component';
import { MenuHiddenComponent } from './menu-hidden/menu-hidden.component';
import { BarHiddenComponent } from './bar-hidden/bar-hidden.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    MenuMainComponent,
    MenuHiddenComponent,
    BarHiddenComponent
  ],
  exports: [
    MenuMainComponent,
    BarHiddenComponent,
    MenuHiddenComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class MenuBarModule { }
