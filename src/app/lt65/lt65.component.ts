
import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { catchError, interval, of, startWith, switchMap } from 'rxjs';
import * as moment from 'moment';
// import { Chart, ChartData } from 'chart.js';
import * as Chart from 'chart.js';
// import 'chartjs-plugin-datalabels'; // 导入插件
import { ChartData, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-lt65',
  templateUrl: './lt65.component.html',
  styleUrls: ['./lt65.component.css']
})
export class Lt65Component {
  //############# LT65 real time data ############
  data: any;


  //############## Pie chart inputs ############
  machineStatusData: any;
  machineStatusLabels: any = ['Alarm On', 'Idle', 'Feed Hold', 'Running'];
  dataP: number[] = [30, 50, 100, 100];
  titlePie: string = 'LT65 Machine Status';
  dataPie: any = {
    labels: this.machineStatusLabels,
    datasets: [{
      data: this.dataP,
      backgroundColor: ['red', 'blue', 'yellow', 'green'],
      // other dataset options...
    }]
  };

  //Doughnut chart inputs
  dataD: number[] = [30, 50, 100, 100];
  titleDoughnut: string = 'LT65 Machine Status';
  dataDoughnut: any = {
    labels: ['Alarm On', 'Idle', 'Feed Hold', 'Running'],
    datasets: [{
      data: this.dataD,
      backgroundColor: ['red', 'blue', 'yellow', 'green'],
      // other dataset options...
    }]
  };

  //Bar chart inputs
  partTimeData: any;
  barChartData: any[] = [];
  // partList: number[] = [];
  titleBar: string = 'Part Production Cycle Time';
  xTitleBar: string = 'Part Number';
  yTitleBar: string = 'Production Time / s';
  dataBar: ChartData<'bar'> = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [{ "label": "Part Prodction Time /s", "data": [5, 5, 6, 6, 5, 6, 6, 5, 5, 6], "borderColor": "blue", "backgroundColor": "aqua" }],
  };


  constructor(private dataService: DataService) { }

  ngOnInit() {
    // 初始获取一次数据
    this.getLT65Data();
    this.getPartTimeData();
    this.getLT65MachineStatusData();

    // Refresh data and charts every 3 seconds
    interval(3000).subscribe(() => {
      this.getLT65Data();
      this.getPartTimeData();
      this.getLT65MachineStatusData();
      
    });

  }

  getLT65Data() {
    this.dataService.getLT65Data().subscribe(
      (result) => {
        this.data = result;
      },
      (error) => {
        console.error('Error fetching getLT65Data:', error);
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

  
  getLT65MachineStatusData() {
    this.dataService.getLT65MachineStatusData().subscribe(
      (result) => {
        // this.machineStatusData = result;
        this.dataD = result;
        let chartDataD = [{
          data: this.dataD,
          backgroundColor: ['red', 'blue', 'yellow', 'green'],
        }];

        // this.partList = this.partTimeData[0];
        this.dataDoughnut.datasets = chartDataD;
        this.dataDoughnut.labels = this.machineStatusLabels;
      },
      (error) => {
        console.error('Error fetching LT65 Machine Status data:', error);
      }
    );
  }

 

}







