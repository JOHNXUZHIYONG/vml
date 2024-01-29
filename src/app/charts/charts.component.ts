import { Component } from '@angular/core';
import { DataService } from '../data.service';

import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {


  salesDataBar: ChartData<'bar'> = {
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




  

  salesDataLine: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    
    datasets: [
      { label: 'Mobiles', data: [1000, 1200, 1050, 2000, 500], tension: 0.5, borderColor: "green", backgroundColor:"lightgreen" },
      { label: 'Laptop', data: [200, 100, 400, 50, 90], tension: 0.5 },
      { label: 'AC', data: [500, 400, 350, 450, 650], tension: 0.5 },
      { label: 'Headset', data: [1200, 1500, 1020, 1600, 900], tension: 0.5 },
    ],
    
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




