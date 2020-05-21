import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MenuComponent } from './components/menu/menu.component';
import { BarComponent } from './components/bar/bar.component';
import { ProvedennyaBanketivComponent } from './components/provedennya-banketiv/provedennya-banketiv.component';
import { GalleriesComponent } from './components/galleries/galleries.component';
import { CategoryComponent } from './components/category/category.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { OrderTableComponent } from './components/order-table/order-table.component';
import {AppComponent} from "./app.component";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {HttpClientModule} from "@angular/common/http";
import { WeddingsComponent } from './components/weddings/weddings.component';
import { CorporatepartiesComponent } from './components/corporateparties/corporateparties.component';
import { BirthdaysComponent } from './components/birthdays/birthdays.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { WinesComponent } from './components/wines/wines.component';
import { AppetizersComponent } from './components/appetizers/appetizers.component';
import { MaindishesComponent } from './components/maindishes/maindishes.component';
import { DesertsComponent } from './components/deserts/deserts.component';


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    AboutUsComponent,
    MenuComponent,
    BarComponent,
    ProvedennyaBanketivComponent,
    GalleriesComponent,
    CategoryComponent,
    ContactsComponent,
    OrderTableComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    WeddingsComponent,
    CorporatepartiesComponent,
    BirthdaysComponent,
    DrinksComponent,
    WinesComponent,
    AppetizersComponent,
    MaindishesComponent,
    DesertsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
