import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { NgControl } from '@angular/forms';
@Component({
  selector: 'app-savedaily',
  templateUrl: './savedaily.component.html',
  styleUrls: ['./savedaily.component.scss']
})
export class SavedailyComponent implements OnInit {
  a: any;
  employee: any;
  issue: any;
  project: any;
  workcate: any;
  status: any;
  employdata: any = [];
  yesterdaywork: any = [];
  issuework: any = [];
  todowork: any = [];
  selected: any;
  workselected: any;
  issueselected: any;
  workcateselected: any;
  hidden = true;
  info: string;
  tester: any;
  employeedata: any;
  todo: any;
  yesterday: any;
  issueofwork: any;
  current: any;
  formatted: any;
  constructor(private userService: UserService) {
    this.getEmployeetDetail();
    this.getProjectDeatil();
    this.getStatusDetail();
    this.getissueDetail();
    this.getworkcatedetail();
    this.a = Date();
    this.current = new Date();
    this.formatted = this.current.getFullYear() + '-' + (this.current.getMonth() + 1) + '-' + this.current.getDate();
    console.log(this.a, this.formatted);
  }

  ngOnInit() {
  }
  test() {
    this.info = '';
    for (const data of this.issuework) {
      const peak = this.info + data.issuename + ',';
      this.info = peak;
    }
    this.issueofwork = this.info;
    this.info = '';
    for (const data of this.employdata) {
      const peak = this.info + data.EmployName + ',';
      this.info = peak;
    }
    this.employeedata = this.info;
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
    this.tester =
    {
     employee: this.employeedata,
     yesterdaywork: this.yesterday,
     issuework: this.issueofwork,
     todowork: this.todo};
    console.log(this.tester);
    this.SaveDaily(this.tester);
  }
  SaveDaily(datavalue) {
    this.userService.SaveDaily(datavalue).then((data: any) => {
      console.log(data);
    });

  }


  addemploydata(data) {
    console.log(data);
    this.employdata.push(data);
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
