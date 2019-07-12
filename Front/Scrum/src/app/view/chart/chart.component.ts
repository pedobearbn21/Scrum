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
  month: any;
  year: any;
  model;
  p = 1;
  selected = 3;
  p1 = 1;
  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate;
  arraytest: any = [];
  labeltest: any = [];
  test = new Chart;
    public chartType: string = 'bar';
    public chartDatasets: Array<any> = [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' }
    ];

    public chartLabels: Array<any> = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
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
    c: number = 0;
    elements: any;
    employ: any;
    celements: any;
    cemploy: any;
    show: any;
    datasend: any;
    detail: any;
    getsomewhere: any = [];
    datasource: any = [];
    public chartClicked(e: any): void { }
    public chartHovered(e: any): void { }
  constructor(private userService: UserService, calendar: NgbCalendar) {
    this.getdaily();
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    this.getProjectDeatil();
    this.getissueDetail();

  }
  ngOnInit() {
  }
  chart4() {
    for (const pa of this.show) {
      const a =  pa.issuework.split(',');
      for (const ppa of a) {
        this.getsomewhere.push(ppa);
      }
      console.log(this.getsomewhere);
    }
    for (const source of this.detail) {
      source.value  = 0;
    }
    for (const data of this.getsomewhere) {
      console.log(data);
      for (const source of this.detail) {
        console.log(source);
        if ( data === source.issuename) {
          source.value = source.value + 1 ;
          console.log(source);
        }
      }
    }
    console.log(this.detail);
    this.chartDatasets = [];
    
    this.chartDatasets.push();
  }
  showissuechart(datavalue) {
    this.year = datavalue.year;
    this.month = datavalue.month;
    if (this.month < 10 ) {
      this.month = '0' + this.month;
      console.log(this.month);
    }
    console.log(this.month);
    this.datasend = { dateyear: this.year , datemonth: this.month};
    console.log(this.datasend);
    this.userService.showissuechart(this.datasend).then((data: any) => {
      this.show = data.data;
      console.log('ShowIssue', this.show);
      this.chart4();
    });

  }
  getissueDetail() {
    this.userService.getissueDetail().then((data: any) => {
      console.log(data);
      this.detail = data.data;
    });
  }
  getchart() {
    this.userService.getchart().then((data: any) => {
      this.datachart = data.data;
      console.log(this.datachart);
      this.testdata();
      this.getEmployeetDetail();
    });
  }
  getdaily() {
    this.userService.getdaily().then((data: any) => {
      this.daily = data.data;
      console.log(this.daily);
      this.getchart();
    });
  }
  getProjectDeatil() {
    this.userService.getProjectDeatil().then((data: any) => {
      console.log(data);
      this.elements = data.data;
      this.celements = this.elements.length;
    });
  }
  getEmployeetDetail() {
    this.userService.getEmployeetDetail().then((data: any) => {
      console.log(data);
      this.employ = data.data;
      this.cemploy = this.employ.length;
    });
  }
  testdata() {
    this.stackdata();
    this.test.chartDatasets = [
      { data: this.arraytest, label: 'Test'}
    ];
    this.test.chartLabels = this.labeltest;
  }
  stackdata() {
    for (const data of this.datachart) {
      const res = data.datacount;
      this.arraytest.push(data.datacount);
      this.labeltest.push(data.employee);
    }
    console.log(this.arraytest);
  }
}
