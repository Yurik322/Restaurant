import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MenuComponent } from './components/menu/menu.component';
import { BarComponent } from './components/bar/bar.component';
import { ProvedennyaBanketivComponent } from './components/provedennya-banketiv/provedennya-banketiv.component';
import { GalereyaComponent } from './components/galereya/galereya.component';
import { CategoryComponent } from './components/category/category.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { OrderTableComponent } from './components/order-table/order-table.component';
import {AppComponent} from "./app.component";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    AboutUsComponent,
    MenuComponent,
    BarComponent,
    ProvedennyaBanketivComponent,
    GalereyaComponent,
    CategoryComponent,
    ContactsComponent,
    OrderTableComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
