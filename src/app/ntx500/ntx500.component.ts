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
  NTX500data: any;
  currentPartCycleTime: any;
  
  partTimeData: any;
 
  barChartData: any[] = [];

  chartType: string = 'barMulti' ;
  titleBarMulti: string = 'Part Production Cycle Time';
  xTitleBarMulti: string = 'Part Number';
  yTitleBarMulti: string = 'Production Time / s';
  
 dataBarMulti: any = {
  labels: ['Part 1','Part 2','Part 3','Part 4','Part 5'],
  datasets: [
    { data: [3600, 1800, 600, 300], label: 'RUNNING', backgroundColor: 'green' },
    { data: [5400, 1200, 900, 150], label: 'IDLE', backgroundColor: 'blue' },
    { data: [3600, 1800, 600, 300], label: 'ALARM ON', backgroundColor: 'red' },
    { data: [5400, 1200, 900, 150], label: 'FEED HOLD', backgroundColor: 'yellow' }
    ]
  };


  constructor(private dataService: DataService) { }

  ngOnInit() {
    // 初始获取一次数据
    this.getNTX500Data();
    this.getNTX500PartTimeData();


    // Refresh data and charts every 3 seconds
    interval(3000).subscribe(() => {

      this.getNTX500Data();
      this.getNTX500PartTimeData();
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

  

}

