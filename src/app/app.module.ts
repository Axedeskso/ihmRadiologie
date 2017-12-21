import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { ModaliteComponent } from './modalite/modalite.component';

const appRoutes: Routes = [
  { path: 'prescription', component: PrescriptionComponent },
  { path: 'modalites', component: ModaliteComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    PrescriptionComponent,
    ModaliteComponent
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
