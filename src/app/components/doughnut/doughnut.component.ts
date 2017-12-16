import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit {

  constructor() { }

  public doughnutChartLabels: string[] = ['Superstar', 'Good', 'Average', 'Poor'];
  public doughnutChartData: number[] = [1, 15, 0, 0];
  public doughnutChartType= 'doughnut';

  ngOnInit() {
  }

}
