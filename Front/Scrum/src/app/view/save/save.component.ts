import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { ListbydayComponent } from 'src/app/view/listbyday/listbyday.component';
@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {
  tog = true;
  a: any;
  daily: any;
  selecteddata: any;
  model: any = {
    date: 18,
    month: 7,
    year: 1999
  };
  datatablelist: any;
  constructor(private userService: UserService) {
    this.getdaily();
    this.a = Date();
    console.log(this.a);
  }

  ngOnInit() {
    this.getdaily();
  }
  getdaily() {
    this.userService.getdatedaily().then((data: any) => {
      console.log(data);
      this.daily = data.data;

    });
  }
  selected(item) {
    console.log(item);
    const da = new Date(item.date);
    this.model.year = da.getFullYear();
    this.model.month = da.getMonth() + 1;
    this.model.date = da.getDate();
    if (this.model.month < 10) {
      this.model.month = '0' + this.model.month ;
    }
    if (this.model.date < 10) {
      this.model.date = '0' + this.model.date ;
    }
    console.log(this.model);
    this.selecteddata = this.model;
    this.getlistbyday(this.selecteddata);
  }
  getlistbyday(datadate) {
    this.userService.getlistbyday(datadate).then((data: any) => {
      this.datatablelist = data.data;
      console.log('Modalsent: ', this.datatablelist);
    });
  }
}
