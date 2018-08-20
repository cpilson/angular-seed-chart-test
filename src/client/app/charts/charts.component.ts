import { Component, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js';

/**
 * This class represents the lazy loaded ChartsComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-charts',
    templateUrl: 'charts.component.html',
    styleUrls: ['charts.component.css']
})

export class ChartsComponent implements AfterViewInit {
    canvas: any;
    canvasBar: any;
    ctx: any;
    ctxBar: any;

    ngAfterViewInit() {
        this.canvas = document.getElementById('chartjs-pie');
        this.ctx = this.canvas.getContext('2d');
        let myChart = new Chart(this.ctx, {
            type: 'pie',
            data: {
                labels: ['New', 'In Progress', 'On Hold', 'Unknown'],
                datasets: [{
                    label: '# of Votes',
                    data: [this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor()],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(152, 152, 71, 70)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true
            }
        });
        this.canvasBar = document.getElementById('chartjs-bar');
        this.ctxBar = this.canvasBar.getContext('2d');

        let dataBar = {
            labels: ['New', 'In Progress', 'On Hold', 'Unknown'],
            datasets: [{
                label: '# of Votes',
                data: [this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor()],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(152, 152, 71, 70)',
                ],
                borderWidth: 1
            }]
        };

        let optionsBar = { responsive: true };

        const barChart = new Chart(this.ctxBar, {
            type: 'bar',
            data: dataBar,
            options: optionsBar
        });
    }

    private randomScalingFactor = () => {
        return Math.round(Math.random() * 100);
    }

    // document.getElementById('randomizeData').addEventListener('click', function() {
    //     config.data.datasets.forEach(function(dataset) {
    //         dataset.data = dataset.data.map(function() {
    //             return randomScalingFactor();
    //         });
    //     });
    //     window.myPie.update();
    // });
    // var colorNames = Object.keys(window.chartColors);
    // document.getElementById('addDataset').addEventListener('click', function() {
    //     var newDataset = {
    //         backgroundColor: [],
    //         data: [],
    //         label: 'New dataset ' + config.data.datasets.length,
    //     };
    //     for (var index = 0; index < config.data.labels.length; ++index) {
    //         newDataset.data.push(randomScalingFactor());
    //         var colorName = colorNames[index % colorNames.length];
    //         var newColor = window.chartColors[colorName];
    //         newDataset.backgroundColor.push(newColor);
    //     }
    //     config.data.datasets.push(newDataset);
    //     window.myPie.update();
    // });
    // document.getElementById('removeDataset').addEventListener('click', function() {
    //     config.data.datasets.splice(0, 1);
    //     window.myPie.update();
    // });
}
