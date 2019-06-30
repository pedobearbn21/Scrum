import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-work-status',
  templateUrl: './work-status.component.html',
  styleUrls: ['./work-status.component.scss']
})
export class WorkStatusComponent implements OnInit {
  stockdata: any;
  elements: any = [];
  headElements = ['id', 'Status'];
  p = 1;
  selected = 5;
  constructor(private userService: UserService) {
    this.getStatusDetail();
   }

  ngOnInit() {
  }
  getStatusDetail() {
    this.userService.getStatusDetail().then((data: any) => {
      console.log(data);
      this.elements = data.data;
    });
  }
  addStatus(data1: NgForm) {
    this.userService.addStatus(data1).then((data: any) => {
      this.getStatusDetail();
    });
  }
  deleteStatusData(id) {
    if (confirm('')) {
    this.userService.deleteStatusData(id).then((data: any) => {
      this.getStatusDetail();
    });
  }
  }
  updateStatusData(id, dataform: NgForm) {
    this.userService.updateStatusData(dataform, id).then((data: any) => {
      this.getStatusDetail();
    });
  }
  getforupdate(data) {
    this.stockdata = data;
    console.log(this.stockdata);
  }

}
