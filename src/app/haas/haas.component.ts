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
  //HAAS real time data
  data: any; 

  //HAAS line chart inputs
  lineChartData: any[] = []; 
  haasPowermeterData: any;
  titleLine: string = 'Power Consumption (Past 1 Hour)';
  xTitleLine: string = 'Time Interval / Per 5 Minutes';
  yTitleLine: string = 'Energy Usage / kWh';
  xLables: string[] = ["55-60", "50-55", "45-50", "40-45", "35-40", "30-35", "25-30", "20-25", "15-20", "10-15",
  "5-10", "0-5"];
  dataLine: ChartData<'line'> = {
    labels: this.xLables,
    datasets: [{ "label": "P_total", "data": [80, 77.15, 94.86, 80, 94.86, 94.86, 80, 94.86, 71.15, 80, 80, 90], "tension": 0.5, "borderColor": "green", "backgroundColor": "lightgreen" }],
  };

  //HAAS bar chart inputs
  barChartData: any[] = [];
  // partList: number[] = [];
  partTimeData: any;
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

        let chartData2 = [{
          label: 'P_total',
          data: this.haasPowermeterData[0],
          tension: 0.5,
          borderColor: 'green',
          backgroundColor: 'lightgreen',
        }];

        this.lineChartData = chartData2;
        this.dataLine.datasets = chartData2;
      },
      (error) => {
        console.error('Error fetching Powermeter data:', error);
      }
    );
  }


}

