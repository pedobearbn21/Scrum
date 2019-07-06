import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public isCollapsed = true;
  constructor() { }

  ngOnInit() {
  }
  openNav() {
    document.getElementById('mySidenav').style.width = '30%';
    document.getElementById('main').style.marginLeft = '20%';
  }
  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  }
}
