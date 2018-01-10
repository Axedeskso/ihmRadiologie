import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

import { ModaliteComponent } from './modalite/modalite.component';
import { ModaliteService } from './modalite/modalite.service';

import { AdmissionComponent } from './admission/admission.component';
import { AdmissionService } from './admission/admission.service';

import { CcamComponent } from './ccam/ccam.component';
import { CcamService } from './ccam/ccam.service';

import { VenueComponent } from './venue/venue.component';
import { VenueService } from './venue/venue.service';

import { ActeComponent } from './acte/acte.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddModaliteComponent } from './modalite/add-modalite/add-modalite.component';
import { AddCcamComponent } from './ccam/add-ccam/add-ccam.component';
import { AddActeComponent } from './acte/add-acte/add-acte.component';


const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'admission', component: AdmissionComponent },
 // { path: 'admission/:id/venues', component: VenueComponent },
  { path: 'admission/venues/:id', component: ActeComponent },
  { path: 'ccam', component: CcamComponent },
  { path: 'modalites', component: ModaliteComponent },
  { path: 'venues', component: VenueComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ModaliteComponent,
    AdmissionComponent,
    CcamComponent,
    VenueComponent,
    ActeComponent,
    DashboardComponent,
    AddModaliteComponent,
    AddCcamComponent,
    AddActeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AdmissionService, CcamService, ModaliteService, VenueService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
