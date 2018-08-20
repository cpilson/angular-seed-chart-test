import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';
import { ChartsRoutingModule } from './charts-routing.module';

@NgModule({
    imports: [CommonModule, ChartsRoutingModule],
    declarations: [ChartsComponent],
    exports: [ChartsComponent]
})
export class ChartsModule { }
