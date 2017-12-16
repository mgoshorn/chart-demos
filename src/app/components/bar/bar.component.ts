import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  constructor() { }

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    response: true
  };

  // Chart data - In practice this should all be loaded from a service making API calls
  public barChartLabels: string[] = ['Project', 'Exam', 'Other', 'Verbal'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [97.5, 73.18, 26, 85.2], label: 'Trainee'},
    {data: [90.16, 72.18, 40.88, 82], label: 'Batch'}
  ];

  ngOnInit() {
  }



}
