import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailComponent } from '../app/view/employee-detail/employee-detail.component';
import { ProjectDetailComponent } from '../app/view/project-detail/project-detail.component';
import { WorkCateComponent } from '../app/view/work-cate/work-cate.component';
import { WorkStatusComponent } from '../app/view/work-status/work-status.component';
import { IssueComponent } from './view/issue/issue.component';
import { SavedailyComponent } from './view/savedaily/savedaily.component';
import { SaveComponent } from './view/save/save.component';
const routes: Routes = [
  { path: 'app-employee-detail', component: EmployeeDetailComponent },
  { path: 'app-project-detail', component: ProjectDetailComponent },
  { path: 'app-work-cate', component: WorkCateComponent },
  { path: 'app-work-status', component: WorkStatusComponent },
  { path: 'app-issue', component: IssueComponent },
  { path: 'app-savedaily', component: SavedailyComponent },
  { path: 'app-save', component: SaveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
