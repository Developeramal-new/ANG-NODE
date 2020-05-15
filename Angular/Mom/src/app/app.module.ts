import { AuthService } from './services/auth.service';
import { Canactivate } from './canactivate';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './login/signup/signup.component';
import { HomeComponent } from './Main-content/home/home.component';
import { AdminComponent } from './Main-content/admin/admin.component';
import { CartComponent } from './Main-content/cart/cart.component';
import { OrderPlacedComponent } from './Main-content/cart/order-placed/order-placed.component';
import { OrdersComponent } from './Main-content/admin/orders/orders.component';
import { AddItemsComponent } from './Main-content/admin/add-items/add-items.component';
import { HttpClientModule } from '@angular/common/http';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    HomeComponent,
    AdminComponent,
    CartComponent,
    OrderPlacedComponent,
    OrdersComponent,
    AddItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatStepperModule,
    MatTooltipModule,
  ],
  providers: [AuthService, Canactivate],
  bootstrap: [AppComponent]
})
export class AppModule { }
