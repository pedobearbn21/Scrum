import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-listbyday',
  templateUrl: './listbyday.component.html',
  styleUrls: ['./listbyday.component.scss']
})
export class ListbydayComponent implements OnInit {
  @Input() datatablelist;
  model: any = {
    date: 18,
    month: 7,
    year: 1999
  };
  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }
  getlistbyday(model1) {
      this.userService.getlistbyday(model1).then((data: any) => {
        this.datatablelist = data.data;
        console.log('Modalsent: ', this.datatablelist);
      });
  }
  dellist(id) {
    if (confirm('')) {
      this.caldate(this.datatablelist[0]);
      this.userService.dellistbyday(id).then((data: any) => {
        this.getlistbyday(this.model);
      });
    } else {}

  }
  caldate(itemdate) {
    console.log(itemdate);
    const da = new Date(itemdate.date);
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
  }
}
