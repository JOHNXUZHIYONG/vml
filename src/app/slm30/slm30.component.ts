import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { catchError, interval, of, startWith, switchMap } from 'rxjs';
import * as moment from 'moment';
import { ChartData, ChartOptions } from 'chart.js';
import { ChartsComponent } from '../charts/charts.component';

@Component({
  selector: 'app-slm30',
  templateUrl: './slm30.component.html',
  styleUrls: ['./slm30.component.css'],
  
})
export class Slm30Component {
  // data: any;
   //HAAS line chart inputs
   lineChartData: any[] = []; 
   SLM30PowerData: any;
   titleLine: string = 'Power Consumption (Past 1 Hour)';
   xTitleLine: string = 'Time Interval / Per 5 Minutes';
   yTitleLine: string = 'Energy Usage / kWh';
   xLables: string[] = ["55-60", "50-55", "45-50", "40-45", "35-40", "30-35", "25-30", "20-25", "15-20", "10-15",
   "5-10", "0-5"];
   dataLine: ChartData<'line'> = {
     labels: this.xLables,
     datasets: [{ "label": "P_total", "data": [80, 77.15, 94.86, 80, 94.86, 94.86, 80, 94.86, 71.15, 80, 80, 90], "tension": 0.5, "borderColor": "green", "backgroundColor": "lightgreen" }],
   };

   //HAAS line chart inputs
   lineChartDataO: any[] = []; 
   SLM30OxygenData: any;
   titleLineO: string = 'Oxygen Concentration (Past 1 Hour)';
   xTitleLineO: string = 'Time Interval / Per 5 Minutes';
   yTitleLineO: string = 'Oxygen Concntration %';
   xLablesO: string[] = ["55-60", "50-55", "45-50", "40-45", "35-40", "30-35", "25-30", "20-25", "15-20", "10-15",
   "5-10", "0-5"];
   dataLineO: ChartData<'line'> = {
     labels: this.xLables,
     datasets: [{ "label": "Oxygen_Concntration", "data": [80, 77.15, 94.86, 80, 94.86, 94.86, 80, 94.86, 71.15, 80, 80, 90], "tension": 0.5, "borderColor": "green", "backgroundColor": "lightgreen" }],
   };
 
   constructor(private dataService: DataService) { }

   ngOnInit() {
    // 初始获取一次数据
    // this.getData();
    this.getSLM30UrlPowerData();
    this.getSLM30UrlOxygenData();

    // Refresh data and charts every 3 seconds
    interval(3000).subscribe(() => {
      // this.getData();
      this.getSLM30UrlPowerData();
      this.getSLM30UrlOxygenData();
    });

  }

  // getData() {
  //   this.dataService.getData().subscribe(
  //     (result) => {
  //       this.data = result;
  //     },
  //     (error) => {
  //       console.error('Error fetching haas data:', error);
  //     }
  //   );
  // }

  getSLM30UrlPowerData() {
    this.dataService.getSLM30UrlPowerData().subscribe(
      (result) => {
        this.SLM30PowerData = result;

        let chartData = [{
          label: 'P_total',
          data: this.SLM30PowerData[0],
          tension: 0.5,
          borderColor: 'green',
          backgroundColor: 'lightgreen',
        }];

        this.lineChartData = chartData;
        this.dataLine.datasets = chartData;
      },
      (error) => {
        console.error('Error fetching SLM30 Powermeter data:', error);
      }
    );
  }

  getSLM30UrlOxygenData() {
    this.dataService.getSLM30UrlOxygenData().subscribe(
      (result) => {
        this.SLM30OxygenData = result;

        let chartData2 = [{
          label: 'Oxygen Concentration',
          data: this.SLM30OxygenData[0],
          tension: 0.5,
          borderColor: 'blue',
          backgroundColor: 'lightblue',
        }];

        this.lineChartDataO = chartData2;
        this.dataLineO.datasets = chartData2;
      },
      (error) => {
        console.error('Error fetching SLM30OxygenData :', error);
      }
    );
  }
 


}

