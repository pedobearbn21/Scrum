import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {
  a: any;
  daily: any;
  constructor(private userService: UserService) {
    this.getdaily();
    this.a = Date();
    console.log(this.a);
  }

  ngOnInit() {
  }
  getdaily() {
    this.userService.getdaily().then((data: any) => {
      console.log(data);
      this.daily = data.data;
    });
  }
}
