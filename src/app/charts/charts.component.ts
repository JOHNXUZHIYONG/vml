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
  @Input() chartType: 'line' | 'bar' = 'line';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chartData'] && this.chartData) {
      // Assuming that your chartData has the same structure as the initial data
      this.dataBar.datasets = this.chartData;
      this.dataLine.datasets=this.chartData;
    }
  }


  dataBar: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [],
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
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    
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


}




