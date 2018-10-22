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
    console.log(`==>sharedData: `, this.sharedData, `\n==>data: `, chartSharedDataValues);
    // this.sharedData.datasets.data = chartSharedDataValues.datasets[0].data.sort();
    // console.log(`====>sort: `, _.sortBy(chartSharedDataValues, [chartSharedDataValues.labels]));
    // this.sharedData.datasets.data = _.sortBy(chartSharedDataValues, [chartSharedDataValues.datasets[0].data]);
    // this.sharedData.datasets[0] = _.sortBy(chartSharedDataValues.datasets[0], [chartSharedDataValues.datasets[0].data]);
    const labelMap = new Map;
    _.forEach(chartSharedDataValues.labels, (l: any, i: number) => {
      labelMap.set(chartSharedDataValues.datasets[0].data[i], l);
    });
    console.log(`===>labelMap: `, labelMap);
    this.sharedData.datasets[0].data = chartSharedDataValues.datasets[0].data.sort();
    // shove our labels back in the order that the data went:
    let labels = [];
    _.forEach(chartSharedDataValues.datasets[0].data, (d: any) => {
      labels.push(labelMap.get(d));
    });
    this.sharedData.labels = labels;
    console.log(`==>sorted: `, this.sharedData);
    this.chart.chart.update();
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
