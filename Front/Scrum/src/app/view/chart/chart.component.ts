import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  daily: any;
  typeChart: any;
  dataChart: any;
  optionsChart: any;
  chartType = 'bar';
  chartDatasets: any;
  chartLabels: any;
  chartColors: any;
  chartOptions: any;
  chart = [
      {
      this.chartDatasets = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
      ],

      this.chartLabels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      this.chartColors: Array<any> = [
        {
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
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
          borderWidth: 2
        }
      ],
      chartOptions = {
        responsive: true
      }
    },
    {},
    {},
    {}
  ];
  constructor(private userService: UserService) {
    console.log(this.chart);
    this.getdaily();
  }
  ngOnInit() {
  }
  getdaily() {
    this.userService.getdaily().then((data: any) => {
      console.log(data);
      this.daily = data.data;
    });
  }
  chartClicked(e: any): void { }
  chartHovered(e: any): void { }
}
