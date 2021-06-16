import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayeventsComponent } from './displayevents/displayevents.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'', component:LoginComponent
  },
 
  {
    path:'dashboard', component:DashboardComponent
  },
  {
    path:'register', component: RegisterComponent
  },
  {
    path:'displayevents', component: DisplayeventsComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
