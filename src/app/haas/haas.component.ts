import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { catchError, interval, of, startWith, switchMap } from 'rxjs';
import * as moment from 'moment';

interface HaasPartTimeEntry {
  time: string;
  part_number: string;
  // 其他可能的属性...
}

@Component({
  selector: 'app-haas',
  templateUrl: './haas.component.html',
  styleUrls: ['./haas.component.css']
})
export class HaasComponent {

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
        this.partList = this.partTimeData[0];
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
      },
      (error) => {
        console.error('Error fetching Powermeter data:', error);
      }
    );
  }

}

