import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { catchError, interval, of, startWith, switchMap } from 'rxjs';
import * as moment from 'moment';

interface HaasPowermeterEntry {
  time: string;
  P_total: string;
  // 其他可能的属性...
}
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

  //http to get real data
  lineChartData: any[] = [
    // { label: 'P_total', data: [1000, 1200, 1050, 2000, 5000] },

  ];
  barChartData: any[] = [
    // { label: 'P_total', data: [1000, 1200, 1050, 2000, 5000] },

  ];

  data: any;

  orders: any[] = [];
  haasPowermeterData: any;
  pTotalList: number[] = [];
  pTotalTimeList: string[] = [];

  partTimeData: any;
  partList: number[] = [];
  partTimeList: string[] = [];
            // 初始化一个空数组，用于存放时间差值
            timeDifferences: number[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // 初始获取一次数据
    this.getData();
    this.getPartTimeData();
    this.getHAASPowermeterData();
    this.orders = this.dataService.getOrders();

    // 每秒刷新一次数据
    interval(1000).pipe(
      switchMap(() => this.dataService.getData().pipe(
        catchError((error) => {
          console.error('Error fetching HAAS data:', error);
          return of(this.dataService.getDefaultHAASData());
        })
      )),
      startWith(this.dataService.getDefaultHAASData())
    ).subscribe(
      (result) => {
        this.data = result;
      },
    );

    interval(5000).pipe(
      switchMap(() => this.dataService.getHAASPowermeterData().pipe(
        catchError((error) => {
          console.error('Error fetching HAAS Powermeter data:', error);
          throw error;  // 抛出错误，而不是返回默认值
          // 返回一个包含默认值的 Observable
          // return of(this.dataService.getDefaultHAASPowermeterData());
        })
      )),
      startWith(this.dataService.getDefaultHAASPowermeterData()) // 使用 startWith 发送默认值
    ).subscribe(
      (result) => {
        if (result !== null) {
          this.haasPowermeterData = result;

          // // 提取P_total的值用于pTotalList
          this.pTotalList = this.haasPowermeterData.map((entry: HaasPowermeterEntry) => parseFloat(entry.P_total)).reverse();
          console.log(this.pTotalList);

          // 使用 moment.js 解析并格式化时间字符串
          this.pTotalTimeList = this.haasPowermeterData.map((entry: HaasPowermeterEntry) => {
            const date = moment(entry.time, 'M/D/YYYY, h:mm:ss A.SSS');
            if (date.isValid()) {
              return date.format('HH:mm:ss'); // 格式化为24小时制的时分秒
            } else {
              return 'Invalid Date';
            }
          }).reverse();


          const chartData = [{
            label: 'P_total',
            data: this.pTotalList,
            tension: 0.5,
            borderColor: 'green',
            backgroundColor: 'lightgreen',
          }];

          // 仅在两个列表都有数据时更新 lineChartData
          this.lineChartData = chartData;
        }
      },
      (error) => {
        // 在这里处理错误，可以根据实际需求进行处理，比如报错或者更新 UI 提示用户有错误发生
        console.error('Error in HAAS Powermeter data subscription:', error);
      }
    );




    interval(5000).pipe(
      switchMap(() => this.dataService.getPartTimeData().pipe(
        catchError((error) => {
          console.error('Error fetching HAAS partTime data:', error);
          throw error;  // 抛出错误，而不是返回默认值
          // 返回一个包含默认值的 Observable
          // return of(this.dataService.getDefaultHAASPowermeterData());
        })
      )),
      startWith(this.dataService.getDefaultHAASPartTimeData()) // 使用 startWith 发送默认值
    ).subscribe(
      (result) => {
        if (result !== null) {
          this.partTimeData = result;

          // // 提取P_total的值用于pTotalList
          this.partList = this.partTimeData.map((entry: HaasPartTimeEntry) => entry.part_number.toString()).reverse();
          
          this.partList.pop();

          // 使用 moment.js 解析并格式化时间字符串
          this.partTimeList = this.partTimeData.map((entry: HaasPartTimeEntry) => {
            const date = moment(entry.time, 'M/D/YYYY, h:mm:ss A.SSS');
            if (date.isValid()) {
              return date.format('HH:mm:ss'); // 格式化为24小时制的时分秒
            } else {
              return 'Invalid Date';
            }
          }).reverse();



          // 遍历 partTimeList 数组，计算相邻两个时间的时间差
          for (let i = 1; i < this.partTimeList.length; i++) {
            // 将时间字符串转换为 moment 对象
            const currentTime = moment(this.partTimeList[i], 'HH:mm:ss');
            const prevTime = moment(this.partTimeList[i - 1], 'HH:mm:ss');

            // 计算相邻两个时间的时间差，单位为秒
            const timeDiff = currentTime.diff(prevTime, 'seconds');

            // 将时间差值添加到数组中
            this.timeDifferences.push(timeDiff);
          }


          const chartData1 = [{
            label: 'Part Prodction Time /s',
            data: this.timeDifferences,

            borderColor: 'blue',
            backgroundColor: 'aqua',
          }];

          // 仅在两个列表都有数据时更新 lineChartData
          this.barChartData = chartData1;
          this.timeDifferences = [];
        }
      },
      (error) => {
        // 在这里处理错误，可以根据实际需求进行处理，比如报错或者更新 UI 提示用户有错误发生
        console.error('Error in HAAS Powermeter data subscription:', error);
      }
    );



  }



  getData() {
    this.dataService.getData().subscribe(
      (result) => {
        this.data = result;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  getPartTimeData() {
    this.dataService.getPartTimeData().subscribe(
      (result) => {
        this.partTimeData = result;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  getHAASPowermeterData() {
    this.dataService.getHAASPowermeterData().subscribe(
      (result) => {
        this.haasPowermeterData = result;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }






  //static mock data
  // lights: { status: string, top: number, left: number, label: string }[] = [
  //   { status: 'green', top: 40, left: 250, label: 'Powder filling' },
  //   { status: 'yellow', top: 70, left: 570, label: 'Liquid filling' },
  //   { status: 'green', top: 300, left: 220, label: 'Label printer' },
  //   { status: 'red', top: 330, left: 350, label: 'Pouch magazine' },
  //   { status: 'green', top: 270, left: 680, label: 'Check weigher' },
  //   { status: 'green', top: 200, left: 780, label: 'Pouch inspection' },
  //   { status: 'green', top: 440, left: 700, label: 'Tote filling and transfer' }
  // ];

  //just for future use
  // toggleTrafficLights() {
  //   for (let i = 0; i < this.lights.length; i++) {
  //     switch (this.lights[i].status) {
  //       case 'red':
  //         this.lights[i].status = 'yellow';
  //         break;
  //       case 'yellow':
  //         this.lights[i].status = 'green';
  //         break;
  //       case 'green':
  //         this.lights[i].status = 'red';
  //         break;
  //       default:
  //         this.lights[i].status = 'green';
  //     }
  //   }
  // }




}

