import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  @ViewChild('container', null) container: ElementRef;

  types: string[] = ['pie', 'area', 'column', 'spline',];

  chartH: any = {};
  index: any = 0;

  public options: any = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: ''
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'Angular 2+',
        y: 3.1
      }, {
          name: 'AngularJS',
        y: 1.8
      }, {
          name: 'JS',
        y: 2.4
      }, {
          name: '.Net',
        y: 4.4
      }, {
          name: 'SQL',
        y: 2.3
      }, {
          name: '.Net Core',
        y: 2
      }]
    }]
  }

  ngAfterViewInit() {
      this.createChart()
  }

  ngOnInit(): void {
  }


  createChart() {
    this.chartH = Highcharts.chart('container', this.options);
  }

  updateChart() {
    this.index++;
    this.chartH.series[0].update({
      type: this.types[this.index]
    });
    console.log(this.index);
    if (this.index == this.types.length - 1) {
      this.index = -1;
    }
  }

  constructor() {  }
}
