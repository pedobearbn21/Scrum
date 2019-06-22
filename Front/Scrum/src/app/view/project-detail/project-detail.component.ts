import {Component, HostListener, ViewChild, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {MdbTableDirective} from 'angular-bootstrap-md';
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  mdbTable: MdbTableDirective;
  elements: any = [];
  headElements = ['id', 'ProjectName', 'Description', ''];

  searchText = '';
  previous: string ;

  constructor(private userService: UserService) {
    this.getProjectDeatil();
   }

  @HostListener('input') oninput() {
    this.searchItems();
  }

  ngOnInit() {
  }
  getProjectDeatil() {
      this.userService.getProjectDeatil().then((data: any) => {
        console.log(data);
        this.elements = data.data;
      });
    }
    addProject(data1: NgForm) {
      this.userService.addProject(data1).then((data: any) => {
        this.getProjectDeatil();
      });
    }
    deleteData(id) {
      this.userService.deleteData(id).then((data: any) => {
        this.getProjectDeatil();
      });
    }
    updateData(id, dataform: NgForm) {
      this.userService.updateData(dataform, id).then((data: any) => {
        this.getProjectDeatil();
      });
    }

  searchItems() {
  }
}
