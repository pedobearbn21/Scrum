import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../service/user.service';
import { NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import {NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-savedaily',
  templateUrl: './savedaily.component.html',
  styleUrls: ['./savedaily.component.scss'],
})
export class SavedailyComponent implements OnInit {
  model;
  a: any;
  employee: any;
  issue: any;
  project: any;
  workcate: any;
  status: any;


  employdata: any;
  yesterdaywork: any = [];
  issuework: any = [];
  todowork: any = [];
  projectwork: any = [];


  selected: any;
  workselected: any;
  issueselected: any;
  workcateselected: any;
  projectseleted: any;


  hidden = true;
  info: string;
  tester: any;
  employeedata: any;
  todo: any;
  yesterday: any;
  issueofwork: any;
  projectsent: any;
  current: any;
  d: any;
  format: string;

  constructor(private userService: UserService) {
    this.getEmployeetDetail();
    this.getProjectDeatil();
    this.getStatusDetail();
    this.getissueDetail();
    this.getworkcatedetail();
  }

  ngOnInit() {
  }
  test() {
    this.format = this.model.year + '-' + this.model.month + '-' + this.model.day;
    console.log(this.format);
    this.d = new Date(this.format);
    console.log(this.d);
    this.info = '';
    for (const data of this.issuework) {
      const peak = this.info + data.issuename + ',';
      this.info = peak;
    }
    this.issueofwork = this.info;
    this.info = '';
    for (const data of this.projectwork) {
      const peak = this.info + data.ProjectName + ',';
      this.info = peak;
    }
    this.projectsent = this.info;
    this.info = '';
    for (const data of this.todowork) {
      const peak = this.info + data.workcatename + ',';
      this.info = peak;
    }
    this.todo = this.info;
    this.info = '';
    for (const data of this.yesterdaywork) {
      const peak = this.info + data.workcatename + ',';
      this.info = peak;
    }
    this.yesterday = this.info;
    this.tester = {
     date: this.d,
     employee: this.employdata,
     yesterdaywork: this.yesterday,
     issuework: this.issueofwork,
     todowork: this.todo,
     ProjectName: this.projectsent
    };

    console.log(this.tester);
    this.SaveDaily(this.tester);
  }
  SaveDaily(datavalue) {
    this.userService.SaveDaily(datavalue).then((data: any) => {
      console.log(data);
    });

  }

  testdate() {
    this.format = this.model.year + '-' + this.model.month + '-' + this.model.day;
    console.log(this.format);
    this.d = new Date(this.format);
    console.log(this.d);
  }
  addemploydata(data) {
    this.employdata = data;
    console.log(this.employdata);
  }
  addyesterdaywork(data) {
    this.yesterdaywork.push(data);
  }
  addissuework(data) {
    this.issuework.push(data);
  }
  addtodowork(data) {
    this.todowork.push(data);
  }
  addprojectwork(data) {
    this.projectwork.push(data);
  }
  getEmployeetDetail() {
    this.userService.getEmployeetDetail().then((data: any) => {
      console.log(data);
      this.employee = data.data;
    });
  }
  getissueDetail() {
    this.userService.getissueDetail().then((data: any) => {
      console.log(data);
      this.issue = data.data;
    });
  }
  getProjectDeatil() {
    this.userService.getProjectDeatil().then((data: any) => {
      console.log(data);
      this.project = data.data;
    });
  }
  getworkcatedetail() {
    this.userService.getworkcatedetail().then((data: any) => {
      console.log(data);
      this.workcate = data.data;
    });
  }
  getStatusDetail() {
    this.userService.getStatusDetail().then((data: any) => {
      console.log(data);
      this.status = data.data;
    });
  }

}
