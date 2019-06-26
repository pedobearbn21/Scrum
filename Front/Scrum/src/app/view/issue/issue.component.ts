import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {
  stockdata: any;
  elements: any = [];
  headElements = ['id', 'Status'];
  constructor(private userService: UserService) {
    this.getissueDetail();
   }

  ngOnInit() {
  }
  getissueDetail() {
    this.userService.getissueDetail().then((data: any) => {
      console.log(data);
      this.elements = data.data;
    });
  }
  addissue(data1: NgForm) {
    this.userService.addissue(data1).then((data: any) => {
      this.getissueDetail();
    });
  }
  deleteissueData(id) {
    if (confirm('')) {
    this.userService.deleteissueData(id).then((data: any) => {
      this.getissueDetail();
    });
  } else {}
  }
  updateissueData(id, dataform: NgForm) {
    this.userService.updateissueData(dataform, id).then((data: any) => {
      this.getissueDetail();
    });
  }
  getforupdate(data) {
    this.stockdata = data;
    console.log(this.stockdata);
  }

}
