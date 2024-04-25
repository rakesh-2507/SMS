import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { EnrollComponent } from './enroll/enroll.component';
import { ManagedetailComponent } from './managedetail/managedetail.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:UserdashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'employee',component:EmployeeComponent},
      {path:'studentdetails',component:StudentdetailsComponent},
    ]
  },
  {path:'admin',component:AdmindashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'employee',component:EmployeeComponent},
      {path:'studentdetails',component:StudentdetailsComponent},
      {path:'adddetails',component:EnrollComponent},
      {path:'managedetail',component:ManagedetailComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
