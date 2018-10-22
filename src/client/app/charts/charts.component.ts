import { Component, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { ChartComponent } from 'angular2-chartjs';
import * as _ from 'lodash';

/**
 * This class represents the lazy loaded ChartsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'chart-1',
  templateUrl: 'charts.component.html',
  styleUrls: ['charts.component.css']
})

export class ChartsComponent {
  public chartType1 = 'line';
  public chartType2 = 'bar';
  public chartType3 = 'horizontalBar';
  @ViewChild(ChartComponent) chart: ChartComponent;
  @ViewChildren(ChartComponent) charts !: QueryList<ChartComponent>;
  public sharedData: any = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  public sharedOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };

  constructor() {}

  public sortByNumberDesc = (a: number, b: number) => {
    if (b < a) {
      return -1;
    }
    if (b > a) {
      return 1;
    }
    return 0;
  }

  public onSortData = (chartSharedDataValues: any): any => {
    // sort sharedData.datasets.data and keep sharedData.labels with their data
    console.log(`==>sharedData: `, this.sharedData, `\n==>data: `, chartSharedDataValues.datasets[0].data);
    // return data.datasets.data;
    this.sharedData.datasets.data = chartSharedDataValues.datasets[0].data.sort();
    // this.sharedData.datasets.data = [null];
    console.log(`==>sorted data: `, this.sharedData.datasets.data);
    // _.forEach(this.charts, (c) => { c.chart.update(); });
    this.chart.chart.update();
    // console.log(`==> this.chart: `, this.chart);
  }

  // public updateChart = (chart: any, labels: Array<string>, data: any): any => {
  //   // Remove data:
  //   if (!chart) {
  //     chart = this.chartType1;
  //   }
  //   if (!labels) {
  //     labels = chart.data.labels.pop();
  //   }
  //   chart.data.datasets.forEach((dataset: any) => {
  //     dataset.data.pop();
  //   });
  //
  //   // Add data:
  //   _.forEach(labels, (label) => { chart.data.labels.push(label); });
  //   chart.data.datasets.forEach((dataset: any) => {
  //     dataset.data.push(data);
  //   });
  //
  //   chart.update();
  // }

  public randomScalingFactor = (): number => {
    return Math.round(Math.random() * 100);
  }

}
