import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded ChartsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-charts',
  templateUrl: 'charts.component.html',
  styleUrls: ['charts.component.css']
})

export class ChartsComponent {
  canvas: any;
  canvasBar: any;
  ctx: any;
  ctxBar: any;
  chartType1 = 'line';
  chartType2 = 'bar';
  chartType3 = 'horizontalBar';
  sharedData: any = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  sharedOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };

  // ngAfterViewInit() {
  //   this.canvas = document.getElementById('chartjs-pie');
  //   this.ctx = this.canvas.getContext('2d');
  //   const myChart = new Chart(this.ctx, {
  //     type: 'pie',
  //     data: {
  //       labels: ['New', 'In Progress', 'On Hold', 'Unknown'],
  //       datasets: [{
  //         label: '# of Votes',
  //         data: [this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor()],
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(152, 152, 71, 70)',
  //         ],
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       responsive: true
  //     }
  //   });
  //   this.canvasBar = document.getElementById('chartjs-bar');
  //   this.ctxBar = this.canvasBar.getContext('2d');
  //
  //   const dataBar = {
  //     labels: ['New', 'In Progress', 'On Hold', 'Unknown'],
  //     datasets: [{
  //       label: '# of Votes',
  //       data: [this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor()],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(152, 152, 71, 70)',
  //       ],
  //       borderWidth: 1
  //     }]
  //   };
  //
  //   const optionsBar = {responsive: true};
  //
  //   const barChart = new Chart(this.ctxBar, {
  //     type: 'bar',
  //     data: dataBar,
  //     options: optionsBar
  //   });
  // }

  randomScalingFactor = () => {
    return Math.round(Math.random() * 100);
  }

}
