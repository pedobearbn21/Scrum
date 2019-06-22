import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { } from '@angular/material';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectDetailComponent } from './view/project-detail/project-detail.component';
import { EmployeeDetailComponent } from './view/employee-detail/employee-detail.component';
import { WorkCateComponent } from './view/work-cate/work-cate.component';
import { WorkStatusComponent } from './view/work-status/work-status.component';
import { IssueComponent } from './view/issue/issue.component';
import { SidenavComponent } from './view/sidenav/sidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailComponent,
    EmployeeDetailComponent,
    WorkCateComponent,
    WorkStatusComponent,
    IssueComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
