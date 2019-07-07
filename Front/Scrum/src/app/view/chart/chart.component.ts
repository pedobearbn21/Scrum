import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Chart } from '../../model/chart';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate;
  arraytest: any = [];
  labeltest: any = [];
  test = new Chart;
    public chartType: string = 'bar';
    public chartDatasets: Array<any> = [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
      { data: [40, 65, 35, 62, 39, 55, 30], label: 'My Second dataset' }
    ];

    public chartLabels: Array<any> = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
    public chartColors: Array<any> = [
      {
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 2,
      }
    ];

    public chartOptions: any = {
      responsive: true
    };
    daily: any;
    datachart: any;
    testdate: any = [];
    public chartClicked(e: any): void { }
    public chartHovered(e: any): void { }
  constructor(private userService: UserService,calendar: NgbCalendar) {
    this.getdaily();
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10)
  }
  ngOnInit() {
  }
  getchart() {
    this.userService.getchart().then((data: any) => {
      this.datachart = data.data;
      console.log(this.datachart);
    });
  }
  getdaily() {
    this.userService.getdaily().then((data: any) => {
      this.daily = data.data;
      console.log(this.daily);
      this.getchart();
    });
  }
  testdata() {
    this.stackdata();
    this.test.chartDatasets = [
      { data: this.arraytest, label: 'Test'}
    ];
    this.test.chartLabels = this.labeltest;
    this.testdatevalid();
  }
  stackdata() {
    for (const data of this.datachart) {
      const res = data.datacount;
      this.arraytest.push(data.datacount);
      this.labeltest.push(data.employee);
    }
    console.log(this.arraytest);
  }
  testdatevalid() {
    for (const data of this.daily) {
      const year = new Date(data.date);
      console.log(year);
      const getyear = year.getFullYear();
      console.log(getyear);
      if ((getyear > 2018) && (getyear < 2020)) {
        this.testdate.push(data);
      }
    }
    console.log(this.testdate);
  }
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }
}
