import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';

import { ChartData, ChartOptions } from 'chart.js';

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

// 在ngOnChanges中调用这个方法
ngOnChanges(changes: SimpleChanges): void {
  if (changes['chartLabel'] || changes['chartData']) {
    this.updateChartData();
  }
}


  dataBar: ChartData<'bar'> = {

    // labels: ['Part 1', 'Part 2', 'Part 3', 'Part 4', 'Part 5'],
    labels: [],
    datasets: [
      // { label: 'Stop', data: [1000, 1200, 1050, 2000, 500] },
      // { label: 'Part Prodction Time /s', data: [110, 100, 120, 100, 90],     borderColor: 'blue',
      // backgroundColor: 'aqua',},
      // { label: 'AC', data: [500, 400, 350, 450, 650] },
      // { label: 'Run', data: [1200, 1500, 1020, 1600, 900] },
    ],
    
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
      x: {
        ticks: {
          color: 'white', // 设置 x 轴刻度文字颜色
        }
      },
      y: {
        ticks: {
          color: 'white', // 设置 y 轴刻度文字颜色
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)' // 设置 x 轴网格线颜色
        }
      }
    }
  };


  dataLine: ChartData<'line'> = {
    labels: [],
    
    datasets: [],
    
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
      suggestedMin: 0.322, // 设置 y 轴的最小值
      suggestedMax: 0.325, // 设置 y 轴的最大值
    }
  }
};

// 在组件类中定义一个方法，用于更新数据
private updateChartData(): void {
  if (this.chartLabel && this.chartData) {
    // 假设chartData的结构与初始数据相同
    this.dataBar.datasets = this.chartData;
    this.dataBar.labels = this.chartLabel;
    this.dataLine.datasets = this.chartData;
    this.dataLine.labels = this.chartLabel;
  }
}
}




