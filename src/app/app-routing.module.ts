import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseListComponent} from "./component/course/course-list/course-list.component";
import {TransactionListComponent} from "./component/transaction/transaction-list/transaction-list.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'courses',
  },
  {
    path: 'courses',
    component: CourseListComponent,
  },
  {
    path: 'transactions',
    component: TransactionListComponent,
  },

  { path: '**', redirectTo: '/courses', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
