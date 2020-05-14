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
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
