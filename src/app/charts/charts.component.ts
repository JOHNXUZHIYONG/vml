import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnChanges {
  @Input() chartTitle: string = ''; // 折线图标题
  @Input() chartData: any[] = []; // 折线图数据
  @Input() chartLabel: any[] = []; // 折线图数据
  @Input() chartType: 'line' | 'bar' = 'line';
  @Input() pTotalTimeList: any[] = [];
  @Input() chartOptionsBar: any;
  @Input() chartOptionsLine: any;
  @Input() chartOptionsPie: any;
  @Input() dataBar: any;
  @Input() dataLine: any;
  @Input() dataPie: any;

  @ViewChild(BaseChartDirective) chart!: BaseChartDirective; // 使用非空断言

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // if (true) {
    //   // this.updateChartData();
      this.chart.update(); // 手动触发图表更新
    // }
  }


 
  // dataBar: ChartData<'bar'> = {

  //   labels: [],
  //   datasets: [],

  // };


  // dataLine: ChartData<'line'> = {
  //   labels: ["55-60", "50-55", "45-50", "40-45", "35-40", "30-35", "25-30", "20-25", "15-20", "10-15",
  //   "5-10", "0-5"],

  //   datasets:  [ { "label": "P_total", "data": [ 80, 77.15, 94.86, 80, 94.86, 94.86, 80, 94.86, 71.15, 80, 80, 90 ], "tension": 0.5, "borderColor": "green", "backgroundColor": "lightgreen" }],
    

  // };



  // 在组件类中定义一个方法，用于更新数据
  // private updateChartData(): void {
    
  //   if (this.dataBar || this.dataLine) {
  //     // this.dataLine.datasets = this.chartData;
  //     // this.dataLine.labels = this.chartLabel;
  //     // 假设chartData的结构与初始数据相同
  //     // this.dataBar.datasets = this.chartData;
  //     // this.dataBar.labels = this.chartLabel;
  //     this.dataBar = this.dataBar;
  //     this.dataLine=this.dataLine;

  //   }
  // }
}




