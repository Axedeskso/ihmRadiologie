import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
import { PatientVenuesComponent } from './admission/patient-venues/patient-venues.component';
import { ActeService } from './acte/acte.service';
import { VenuesActesComponent } from './admission/patient-venues/venues-actes/venues-actes.component';


const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'admission', component: AdmissionComponent},
  { path: 'admission/:id/venues', component: PatientVenuesComponent },
  { path: 'admission/:id/venues/:iep/actes', component: VenuesActesComponent },
  { path: 'ccam', component: CcamComponent },
  { path: 'modalites', component: ModaliteComponent },
  { path: 'venues', component: VenueComponent },
  { path: 'actes', component: ActeComponent }
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
    AddActeComponent,
    PatientVenuesComponent,
    VenuesActesComponent
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
  providers: [AdmissionService, CcamService, ModaliteService, VenueService, ActeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
