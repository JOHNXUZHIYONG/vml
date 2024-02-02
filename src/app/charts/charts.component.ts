import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';

import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnChanges {
  @Input() chartTitle: string = 'Line Chart'; // 折线图标题
  @Input() chartData: any[] = []; // 折线图数据
  @Input() chartLabel: any[] = []; // 折线图数据
  @Input() chartType: 'line' | 'bar' = 'line';
  @Input() pTotalTimeList: any[] = [];;

// 在ngOnChanges中调用这个方法
ngOnChanges(changes: SimpleChanges): void {
  if (changes['chartLabel'] || changes['chartData']) {
    this.updateChartData();
  }
}


  dataBar: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      { label: 'Mobiles', data: [1000, 1200, 1050, 2000, 500] },
      { label: 'Laptop', data: [200, 100, 400, 50, 90] },
      { label: 'AC', data: [500, 400, 350, 450, 650] },
      { label: 'Headset', data: [1200, 1500, 1020, 1600, 900] },
    ],
    
  };
  chartOptionsBar: ChartOptions = {
    responsive: true,
    
    plugins: {
      title: {
        display: true,
        text: 'Monthly Sales Data',
      },
    },
    
  };


  dataLine: ChartData<'line'> = {
    labels: [],
    
    datasets: [],
    
  };


chartOptionsLine: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false, // 禁用纵横比维持
    aspectRatio: 2, // 设置宽高比例，只在 maintainAspectRatio 为 false 时生效
    
  plugins: {
    title: {
      display: true,
      text: 'Monthly Sales Data',
      // color: "red" 
      
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




