import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import {CdkTreeModule} from '@angular/cdk/tree';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectDetailComponent } from './view/project-detail/project-detail.component';
import { EmployeeDetailComponent } from './view/employee-detail/employee-detail.component';
import { WorkCateComponent } from './view/work-cate/work-cate.component';
import { WorkStatusComponent } from './view/work-status/work-status.component';
import { IssueComponent } from './view/issue/issue.component';
import { SidenavComponent } from './view/sidenav/sidenav.component';
import { SaveComponent } from './view/save/save.component';
import { SavedailyComponent } from './view/savedaily/savedaily.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { TesttableComponent } from './view/testtable/testtable.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailComponent,
    EmployeeDetailComponent,
    WorkCateComponent,
    WorkStatusComponent,
    IssueComponent,
    SidenavComponent,
    SaveComponent,
    SavedailyComponent,
    TesttableComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    CdkTreeModule,
    MatPaginatorModule,
    NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
