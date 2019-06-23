import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Workcate } from 'src/app/model/workcate/workcate';

@Component({
  selector: 'app-work-cate',
  templateUrl: './work-cate.component.html',
  styleUrls: ['./work-cate.component.scss']
})
export class WorkCateComponent implements OnInit {
  stockdata = Workcate;
  elements: any = [];
  headElements = ['id', 'WorkCateName'];
  constructor(private userService: UserService) {
    this.getworkcatedetail();
  }

  ngOnInit() {
  }
  getworkcatedetail() {
    this.userService.getworkcatedetail().then((data: any) => {
      console.log(data);
      this.elements = data.data;
    });
  }
  addworkcate(data1: NgForm) {
    this.userService.addworkcate(data1).then((data: any) => {
      this.getworkcatedetail();
    });
  }
  deleteworkcateData(id) {
    this.userService.deleteworkcateData(id).then((data: any) => {
      this.getworkcatedetail();
    });
  }
  updateworkcateData(id, dataform: NgForm) {
    console.log(dataform);
    this.userService.updateworkcateData(dataform, id).then((data: any) => {
      this.getworkcatedetail();
    });
  }
  getforupdate(data) {
    this.stockdata = data;
    console.log(this.stockdata);
  }

}
