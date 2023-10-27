import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ShowemployeesComponent } from './showemployees/showemployees.component';
import { ShowEmpByIdComponent } from './show-emp-by-id/show-emp-by-id.component';
import { ExpPipe } from './exp.pipe';
import { GenderPipe } from './gender.pipe';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    LoginComponent,
    RegisterComponent,
    ShowemployeesComponent,
    ShowEmpByIdComponent,
    ExpPipe,
    GenderPipe,
    HeaderComponent,
    LogoutComponent,
    ProductsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
