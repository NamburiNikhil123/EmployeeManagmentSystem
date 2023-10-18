import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowemployeesComponent } from './showemployees/showemployees.component';
import { ShowEmpByIdComponent } from './show-emp-by-id/show-emp-by-id.component';
import { LogoutComponent } from './logout/logout.component';
import { authGuard } from './auth.guard';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:"",            component:LoginComponent},
  {path:"login",       component:LoginComponent},
  {path:"register",    component:RegisterComponent},
  {path:"showemps",    canActivate:[authGuard]   ,component:ShowemployeesComponent},
  {path:"showempbyid", canActivate:[authGuard]   ,component:ShowEmpByIdComponent},
  {path:"products",    canActivate:[authGuard]   ,component:ProductsComponent},
  {path:"logout",      canActivate:[authGuard]   ,component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
