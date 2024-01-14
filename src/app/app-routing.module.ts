import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/employees",
    pathMatch: 'full'
  },
  {
    path: "employees",
    component: EmployeeListComponent,
  },
  {
    path: "employees/:id",
    component: EmployeeDetailsComponent,
  },
  {
    path: "new-employee",
    component: NewEmployeeComponent,
  },
  {
    path: "edit-employee/:id",
    component: EditEmployeeComponent,
  },
  {
    path: "**",
    redirectTo: "/employees"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
