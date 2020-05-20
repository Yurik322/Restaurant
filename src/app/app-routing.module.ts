import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {MenuComponent} from "./components/menu/menu.component";
import {BarComponent} from "./components/bar/bar.component";
import {ProvedennyaBanketivComponent} from "./components/provedennya-banketiv/provedennya-banketiv.component";
import {GalereyaComponent} from "./components/galereya/galereya.component";
import {CategoryComponent} from "./components/category/category.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {OrderTableComponent} from "./components/order-table/order-table.component";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {WeddingsComponent} from "./components/weddings/weddings.component";
import {CorporatepartiesComponent} from "./components/corporateparties/corporateparties.component";
import {BirthdaysComponent} from "./components/birthdays/birthdays.component";
import {WinesComponent} from "./components/wines/wines.component";
import {DrinksComponent} from "./components/drinks/drinks.component";
import {AppetizersComponent} from "./components/appetizers/appetizers.component";
import {MaindishesComponent} from "./components/maindishes/maindishes.component";
import {DesertsComponent} from "./components/deserts/deserts.component";



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'bar', component: BarComponent},
  {path: 'provedennya-banketiv', component: ProvedennyaBanketivComponent},
  {path: 'galereya', component: GalereyaComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'order-table', component: OrderTableComponent},
  {path: 'weddings', component: WeddingsComponent},
  {path: 'corporateparties', component: CorporatepartiesComponent},
  {path: 'birthdays', component: BirthdaysComponent},
  {path: 'wines', component: WinesComponent},
  {path: 'drinks', component: DrinksComponent},
  {path: 'appetizers', component: AppetizersComponent},
  {path: 'maindishes', component: MaindishesComponent},
  {path: 'deserts', component: DesertsComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
