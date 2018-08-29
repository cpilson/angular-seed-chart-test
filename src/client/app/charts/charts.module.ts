import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';
import { ChartsRoutingModule } from './charts-routing.module';
import { ChartModule } from 'angular2-chartjs';

@NgModule({
    imports: [CommonModule, ChartsRoutingModule, ChartModule],
    declarations: [ChartsComponent],
    exports: [ChartsComponent]
})
export class ChartsModule { }
