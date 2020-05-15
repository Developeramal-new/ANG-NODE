import { Canactivate } from './canactivate';
import { AddItemsComponent } from './Main-content/admin/add-items/add-items.component';
import { OrdersComponent } from './Main-content/admin/orders/orders.component';
import { AdminComponent } from './Main-content/admin/admin.component';
import { OrderPlacedComponent } from './Main-content/cart/order-placed/order-placed.component';
import { CartComponent } from './Main-content/cart/cart.component';
import { SignupComponent } from './login/signup/signup.component';
import { HomeComponent } from './Main-content/home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'login', children : [
    {path: '', canActivate: [Canactivate], component: LoginComponent},
    {path: 'signup', canActivate: [Canactivate], component: SignupComponent}
  ]},
  {path: 'cart', children : [
    {path: '', component: CartComponent},
    {path: 'placed', component: OrderPlacedComponent}
  ]},
  {path: 'admin', children : [
    {path: '', canActivate: [Canactivate], component: AdminComponent},
    {path: 'orders', canActivate: [Canactivate], component: OrdersComponent},
    {path: 'additem', canActivate: [Canactivate], component: AddItemsComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
