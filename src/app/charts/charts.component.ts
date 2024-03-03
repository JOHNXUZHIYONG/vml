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
  @ViewChild(BaseChartDirective) chart!: BaseChartDirective; // 使用非空断言

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes['chartLabel'] || changes['chartData']) && this.chart) {
      this.updateChartData();
      this.chart.update(); // 手动触发图表更新
    }
  }


  dataBar: ChartData<'bar'> = {

    labels: [1,2,3,4,5,6,7,8,9,10],
    datasets: [ { "label": "Part Prodction Time /s", "data": [ 5, 5, 6, 6, 5, 6, 6, 5, 5, 6 ], "borderColor": "blue", "backgroundColor": "aqua" } ],

  };
  chartOptionsBar: ChartOptions = {
    responsive: true,

    plugins: {
      title: {
        display: true,
        text: 'Part Production Time',
        color: 'green', // 设置字体颜色
        font: {
          size: 16, // 设置字体大小
          weight: 'bold', // 设置字体粗细，可以是 'normal' 或 'bold'
          family: 'Arial, sans-serif', // 设置字体族

        }
      },
      legend: {
        // display: false, // 设置为 false 取消图例
        position: "bottom"
      },

    },
    scales: {
      x: { ticks: { color: 'white',  }},   // 设置 x 轴刻度文字颜色
      y: {ticks: {  color: 'white',},      // 设置 y 轴刻度文字颜色   
      grid: { color: 'rgba(255, 255, 255, 0.2)'}} // 设置 x 轴网格线颜色
    }
  };


  dataLine: ChartData<'line'> = {
    labels: ["55-60", "50-55", "45-50", "40-45", "35-40", "30-35", "25-30", "20-25", "15-20", "10-15",
    "5-10", "0-5"],

    datasets:  [ { "label": "P_total", "data": [ 80, 77.15, 94.86, 80, 94.86, 94.86, 80, 94.86, 71.15, 80, 80, 90 ], "tension": 0.5, "borderColor": "green", "backgroundColor": "lightgreen" }],
    

  };


  chartOptionsLine: ChartOptions = {
    responsive: true,
    // maintainAspectRatio: false, // 禁用纵横比维持
    //   aspectRatio: 1.5, // 设置宽高比例，只在 maintainAspectRatio 为 false 时生效

    plugins: {
      title: {
        display: true,
        text: 'HAAS Power Consumption',
        color: 'green', // 设置字体颜色
        font: {
          size: 16, // 设置字体大小
          weight: 'bold', // 设置字体粗细，可以是 'normal' 或 'bold'
          family: 'Arial, sans-serif', // 设置字体族

        }


      },
      legend: {
        // display: false, // 设置为 false 取消图例
        position: "bottom"
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },

    },
    scales: {
      x: {
        ticks: {
          color: 'white', // 设置 x 轴刻度文字颜色
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)' // 设置 x 轴网格线颜色
        }
      },
      y: {
        ticks: {
          color: 'white', // 设置 y 轴刻度文字颜色
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)' // 设置 x 轴网格线颜色
        },
        // suggestedMin: 0.322, // 设置 y 轴的最小值
        // suggestedMax: 0.325, // 设置 y 轴的最大值
      }
    }
  };

  // 在组件类中定义一个方法，用于更新数据
  private updateChartData(): void {
    console.log(this.chartData);
    if (this.chartData) {
      this.dataLine.datasets = this.chartData;
      this.dataLine.labels = this.chartLabel;
      // 假设chartData的结构与初始数据相同
      this.dataBar.datasets = this.chartData;
      this.dataBar.labels = this.chartLabel;

    }
  }
}




