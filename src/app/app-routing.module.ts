import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { FeaturedComponent } from './layout/pages/featured/featured.component';
import { ProductsComponent } from './layout/pages/products/products.component';
import { ContactusComponent } from './layout/pages/contactus/contactus.component';
import { LoginComponent } from './layout/pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'featured', component: FeaturedComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact-us', component: ContactusComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
