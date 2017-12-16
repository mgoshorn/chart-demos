import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-example',
  templateUrl: './line-example.component.html',
  styleUrls: ['./line-example.component.css']
})
export class LineExampleComponent implements OnInit {

  // Data to be used in line chart
  // -----------------------------
  // In practice, this data should be loaded in through a
  // service using API calls
  public chartData: Array<any> = [
    {data: [10, 22, 30, 45, 58, 70, 77], label: 'Group 1'},
    {data: [99, 82, 78, 65, 44, 40, 12], label: 'Group 2'},
    {data: [25, 49, 98, 55, 13, 70, 50], label: 'Group 3'}
  ];

  // Labels for chart
  // In practice these should either be populated using
  // data from an API call and likely a pipe for formatting
  public labels: Array<string> = ['June', 'July', 'August', 'September', 'October', 'November' , 'December'];
  public lineChartOptions: any = {
    responsive: true
  };

  // The chart can be styled in this manner.
  // If no styling is provided, the chart will generate with
  // automatically assigned styling. Using the default styling
  // isn't an issue, but after the feature is complete, you may
  // want to restyle it to be as similar to the origin as possible

  public lineChartColors: Array<any>= [
    {
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: 'rgba(76, 111, 163, 1)',
      pointBackgroundColor: 'rgba(76, 111, 163, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(76, 111, 163, 1)'
    },
    {
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: 'rgba(190, 71, 71, 1)',
      pointBackgroundColor: 'rgba(190, 71, 71, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(190, 71, 71, 1)'
    },
    {
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: 'rgba(164, 180, 20, 1)',
      pointBackgroundColor: 'rgba(164, 180, 20, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(164, 180, 20, 1)'
    }
  ];



  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor() { }

  ngOnInit() {
  }

}
