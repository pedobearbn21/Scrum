import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-savedaily',
  templateUrl: './savedaily.component.html',
  styleUrls: ['./savedaily.component.scss']
})
export class SavedailyComponent implements OnInit {
  employee: any;
  issue: any;
  project: any;
  workcate: any;
  status: any;
  constructor(private userService: UserService) {
    this.getEmployeetDetail();
    this.getProjectDeatil();
    this.getStatusDetail();
    this.getissueDetail();
    this.getworkcatedetail();
  }

  ngOnInit() {
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
