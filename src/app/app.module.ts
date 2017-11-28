import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { StockComponent } from './stock/stock.component';

const appRoutes: Routes = [
  { path: 'prescription', component: PrescriptionComponent },
  { path: 'stock', component: StockComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    PrescriptionComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
