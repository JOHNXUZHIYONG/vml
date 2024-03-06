import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { catchError, interval, of, startWith, switchMap } from 'rxjs';
import * as moment from 'moment';
import { ChartData, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-haas',
  templateUrl: './haas.component.html',
  styleUrls: ['./haas.component.css']
})
export class HaasComponent {
  dataLine: ChartData<'line'> = {
    labels: ["55-60", "50-55", "45-50", "40-45", "35-40", "30-35", "25-30", "20-25", "15-20", "10-15",
      "5-10", "0-5"],

    datasets: [{ "label": "P_total", "data": [80, 77.15, 94.86, 80, 94.86, 94.86, 80, 94.86, 71.15, 80, 80, 90], "tension": 0.5, "borderColor": "green", "backgroundColor": "lightgreen" }],


  };


  dataBar: ChartData<'bar'> = {

    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [{ "label": "Part Prodction Time /s", "data": [5, 5, 6, 6, 5, 6, 6, 5, 5, 6], "borderColor": "blue", "backgroundColor": "aqua" }],

  };

  data: any;
  haasPowermeterData: any;
  partTimeData: any;

  lineChartData: any[] = [];
  pTotalTimeList: string[] = ["55-60", "50-55", "45-50", "40-45", "35-40", "30-35", "25-30", "20-25", "15-20", "10-15",
    "5-10", "0-5"];

  barChartData: any[] = [];
  partList: number[] = [];


  constructor(private dataService: DataService) { }

  ngOnInit() {
    // 初始获取一次数据
    this.getData();
    this.getPartTimeData();
    this.getHAASPowermeterData();

    // Refresh data and charts every 3 seconds
    interval(3000).subscribe(() => {
      this.getHAASPowermeterData();
      this.getData();
      this.getPartTimeData();
    });

  }

  getData() {
    this.dataService.getData().subscribe(
      (result) => {
        this.data = result;
      },
      (error) => {
        console.error('Error fetching haas data:', error);
      }
    );
  }

  getPartTimeData() {
    this.dataService.getPartTimeData().subscribe(
      (result) => {
        this.partTimeData = result;
        let chartData1 = [{
          label: 'Part Prodction Time /s',
          data: this.partTimeData[1],

          borderColor: 'blue',
          backgroundColor: 'aqua',
        }];

        // 仅在两个列表都有数据时更新 lineChartData
        this.barChartData = chartData1;
        // this.partList = this.partTimeData[0];
        this.dataBar.datasets = chartData1;
        this.dataBar.labels = this.partTimeData[0];
      },
      (error) => {
        console.error('Error fetching part time data:', error);
      }
    );
  }

  getHAASPowermeterData() {
    this.dataService.getHAASPowermeterData().subscribe(
      (result) => {
        this.haasPowermeterData = result;

        let chartData = [{
          label: 'P_total',
          data: this.haasPowermeterData[0],
          tension: 0.5,
          borderColor: 'green',
          backgroundColor: 'lightgreen',
        }];

        this.lineChartData = chartData;
        this.dataLine.datasets = chartData;
      },
      (error) => {
        console.error('Error fetching Powermeter data:', error);
      }
    );
  }

  chartOptionsLine: ChartOptions = {
    responsive: true,
    // maintainAspectRatio: false, // 禁用纵横比维持
    //   aspectRatio: 1.5, // 设置宽高比例，只在 maintainAspectRatio 为 false 时生效

    plugins: {
      title: {
        display: true,
        text: 'HAAS Power Consumption (Past 1 Hour)',
        color: 'green', // 设置字体颜色
        font: {
          size: 16, // 设置字体大小
          weight: 'bold', // 设置字体粗细，可以是 'normal' 或 'bold'
          family: 'Arial, sans-serif', // 设置字体族

        }


      },
      legend: {
        display: false, // 设置为 false 取消图例
        position: "bottom"
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },

    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time Interval / Per 5 Minutes',
          color: 'white', // 设置 x 轴标题文字颜色
          font: {
            size: 14,
            weight: 'bold',
            family: 'Arial, sans-serif',
          }
        },
        ticks: {
          color: 'white', // 设置 x 轴刻度文字颜色

        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)' // 设置 x 轴网格线颜色
        }

      },
      y: {
        title: {
          display: true,
          text: 'Energy Usage / kWh',
          color: 'white', // 设置 y 轴标题文字颜色
          font: {
            size: 14,
            weight: 'bold',
            family: 'Arial, sans-serif',
          }
        },
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

  chartOptionsBar: ChartOptions = {
    responsive: true,

    plugins: {
      title: {
        display: true,
        text: 'Part Production Cycle Time',
        color: 'green', // 设置字体颜色
        font: {
          size: 16, // 设置字体大小
          weight: 'bold', // 设置字体粗细，可以是 'normal' 或 'bold'
          family: 'Arial, sans-serif', // 设置字体族

        }
      },
      legend: {
        display: false, // 设置为 false 取消图例
        position: "bottom"
      },

    },
    scales: {
      x: {
        ticks: { color: 'white', }, title: {
          display: true,
          text: 'Part Number',
          color: 'white', // 设置 x 轴标题文字颜色
          font: {
            size: 14,
            weight: 'bold',
            family: 'Arial, sans-serif',
          }
        },
      },   // 设置 x 轴刻度文字颜色
      y: {
        ticks: { color: 'white', },
        title: {
          display: true,
          text: 'Production Time / s',
          color: 'white', // 设置 y 轴标题文字颜色
          font: {
            size: 14,
            weight: 'bold',
            family: 'Arial, sans-serif',
          }
        },     // 设置 y 轴刻度文字颜色   
        grid: { color: 'rgba(255, 255, 255, 0.2)' }
      } // 设置 x 轴网格线颜色
    }
  };


}

