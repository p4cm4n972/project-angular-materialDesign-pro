import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { MDBBootstrapModules } from 'ng-mdb-pro';
import { MDBSpinningPreloader } from 'ng-mdb-pro';
import { NO_ERRORS_SCHEMA } from '@angular/core';
/**
 * maps
 */
import { AgmCoreModule } from '@agm/core';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProduitService } from './produit.service';
import { PartenaireService } from './partenaire.service';

@NgModule({
    imports: [
        AppModule,
        ServerModule,
        ModuleMapLoaderModule, // <-- *Important* to have lazy-loaded routes work
        MDBBootstrapModules.forRoot(),
        BrowserModule.withServerTransition({appId: 'aplus-sa'}),
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        AgmCoreModule.forRoot({ apiKey: 'AIzaSyCDdpEMrPBfkMCzWG13okTIdXxdUjafjek' }),
    ],
    // Since the bootstrapped component is not inherited from your
    // imported AppModule, it needs to be repeated here.
    providers: [MDBSpinningPreloader, ProduitService, PartenaireService],
    schemas: [NO_ERRORS_SCHEMA],
    bootstrap: [AppComponent],
})
export class AppServerModule { }