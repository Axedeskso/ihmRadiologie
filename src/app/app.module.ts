import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ModaliteComponent } from './modalite/modalite.component';
import { AdmissionComponent } from './admission/admission.component';
import { CcamComponent } from './ccam/ccam.component';

const appRoutes: Routes = [
  { path: 'admission', component: AdmissionComponent },
  { path: 'ccam', component: CcamComponent },
  { path: 'modalites', component: ModaliteComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ModaliteComponent,
    AdmissionComponent,
    CcamComponent
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
