import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Chart } from '../../model/chart';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
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
    public chartClicked(e: any): void { }
    public chartHovered(e: any): void { }
  constructor(private userService: UserService) {
    this.getdaily();
  }
  ngOnInit() {
  }
  getdaily() {
    this.userService.getdaily().then((data: any) => {
      this.daily = data.data;
      console.log(this.daily);
      this.stackdata();
    });
  }
  testdata() {
    this.test.chartDatasets = [
      { data: this.arraytest}
    ];
    this.test.chartLabels = this.labeltest;
  }
  stackdata() {
    for (const data of this.daily) {
      const res = data.ProjectName.split(',');
      this.arraytest.push((res.length) - 1 );
      this.labeltest.push(data.employee);
    }
    console.log(this.arraytest);
  }
}
