import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { interval, switchMap } from 'rxjs';
import { ChartData, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-ntx500',
  templateUrl: './ntx500.component.html',
  styleUrls: ['./ntx500.component.css']
})
export class Ntx500Component {
  //########## Machine real time Data #############
  NTX500data: any;

  //############# BarMulti chart inputs data ################
  currentPartCycleTime: any;
  partTimeData: any;
  barChartData: any[] = []; 

  chartType: string = 'barMulti' ;
  titleBarMulti: string = 'Part Production Cycle Time';
  xTitleBarMulti: string = 'Part Number';
  yTitleBarMulti: string = 'Production Time / s';
  
 dataBarMulti: any = {
  labels: ['Part 51','Part 52','Part 53','Part 54','Part 55'],
  datasets: [
    { data: [3600, 1800, 600, 300], label: 'RUNNING', backgroundColor: 'green' },
    { data: [5400, 1200, 900, 150], label: 'IDLE', backgroundColor: 'blue' },
    { data: [3600, 1800, 600, 300], label: 'ALARM ON', backgroundColor: 'red' },
    { data: [5400, 1200, 900, 150], label: 'FEED HOLD', backgroundColor: 'yellow' }
    ]
  };


//Pie chart inputs
machineStatusLabels: any = ['INTERRUPTED', 'READY', 'ACTIVE'];
dataP: number[] = [30, 50, 100];
titlePie: string = 'NTX500 Machine Status';
dataPie: any = {
  labels: this.machineStatusLabels,
  datasets: [{
    data: this.dataP,
    backgroundColor: ['red', 'yellow', 'green'],
    // other dataset options...
  }]
};


  constructor(private dataService: DataService) { }

  ngOnInit() {
    // 初始获取一次数据
    this.getNTX500Data();
    this.getNTX500PartTimeData();
    this.getNTX500MachineStatusData();


    // Refresh data and charts every 3 seconds
    interval(3000).subscribe(() => {

      this.getNTX500Data();
      this.getNTX500PartTimeData();
      this.getNTX500MachineStatusData();
    });

  }

  getNTX500Data() {
    this.dataService.getNTX500Data().subscribe(
      (result) => {
        this.NTX500data = result;
      },
      (error) => {
        console.error('Error fetching NTX500data:', error);
      }
    );
  }

  getNTX500PartTimeData() {
    this.dataService.getNTX500PartTimeData().subscribe(
      (result) => {
        this.partTimeData = result;
        // this.partList = this.partTimeData[0];
        this.barChartData =  this.partTimeData.datasets;
        this.dataBarMulti.datasets = this.partTimeData.datasets;
        this.dataBarMulti.labels = this.partTimeData.labels;
        this.currentPartCycleTime = this.partTimeData.currentPartCycleTime;
      },
      (error) => {
        console.error('Error fetching part time data:', error);
      }
    );
  }

  getNTX500MachineStatusData() {
    this.dataService.getNTX500MachineStatusData().subscribe(
      (result) => {
        // this.machineStatusData = result;
        this.dataP = [result['ALARM ON'], result.IDLE, result.RUNNING];
        let chartDataP = [{
          data: this.dataP,
          backgroundColor: ['red', 'yellow', 'green'],
        }];

        // this.partList = this.partTimeData[0];
        this.dataPie.datasets = chartDataP;
        this.dataPie.labels = this.machineStatusLabels;
      },
      (error) => {
        console.error('Error fetching LT65 Machine Status data:', error);
      }
    );
  }

  
}

