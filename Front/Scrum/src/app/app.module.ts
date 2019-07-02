import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule, DropdownModule  } from 'angular-bootstrap-md';
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
import { FilterPipe } from './model/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';


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
    DropdownModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    CdkTreeModule,
    MatPaginatorModule,
    NgbPaginationModule,
    NgbModule,
    NgxPaginationModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
