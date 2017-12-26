import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


/**
 * MATERIAL DESIGN BOOTSTRAP
 */
import { MDBBootstrapModules } from 'ng-mdb-pro';
import { MDBSpinningPreloader } from 'ng-mdb-pro';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { PresentationComponent } from './presentation/presentation.component';
import { CompetenceComponent } from './competence/competence.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitService } from './produit.service';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { ProduitSellerComponent } from './produit-seller/produit-seller.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { PartenaireService } from './partenaire.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PresentationComponent,
    CompetenceComponent,
    ProduitComponent,
    ProduitListComponent,
    NewsComponent,
    ContactComponent,
    ProduitSellerComponent,
    PartenaireComponent
  ],
  imports: [
    MDBBootstrapModules.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MDBSpinningPreloader, ProduitService, PartenaireService],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
