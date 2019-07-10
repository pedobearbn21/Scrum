import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Employee } from 'src/app/model/employee/employee';
import { MatSelectChange } from '@angular/material/select';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  stockdata =  Employee;
  elements: any = [];
  searchText: string;
  p = 1;
  selected = 3;
  headElements = ['id', 'EmployeeName', 'EmployeeEmail'];
  constructor(private userService: UserService) {
    this.getEmployeetDetail();
    console.log(this.elements.length);
  }

  ngOnInit() {
    console.log(this.selected);
  }
  getEmployeetDetail() {
    this.userService.getEmployeetDetail().then((data: any) => {
      console.log(data);
      this.elements = data.data;
    });
  }
  addEmployee(data1: NgForm) {
    this.userService.addEmployee(data1).then((data: any) => {
      this.getEmployeetDetail();
    });
  }
  deleteData(id) {
    if (confirm('')) {
      this.userService.deleteEmployeeData(id).then((data: any) => {
        this.getEmployeetDetail();
      });
    } else {
    }
  }
  updateData(id, dataform: NgForm) {
    this.userService.updateEmployeeData(dataform, id).then((data: any) => {
      console.log(data);
      this.getEmployeetDetail();
    });
  }
  getforupdate(data) {
    this.stockdata = data;
    console.log(this.stockdata);
  }
  gettext(text) {
    console.log(text);
    this.searchText = text;
  }
  async searchtext() {
    await this.gettext(this.searchText);
  }

}

