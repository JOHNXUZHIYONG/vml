import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { catchError, interval, of, startWith, switchMap } from 'rxjs';



@Component({
  selector: 'app-haas',
  templateUrl: './haas.component.html',
  styleUrls: ['./haas.component.css']
})
export class HaasComponent {
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


  //http to get real data
  lineChartData: any[]=[
    { label: 'Mobiles', data: [1000, 1200, 1050, 2000, 500], tension: 0.5, borderColor: "green", backgroundColor:"lightgreen" },
    { label: 'Laptop', data: [200, 100, 400, 50, 90], tension: 0.5 },
    { label: 'AC', data: [500, 400, 350, 450, 650], tension: 0.5 },
    { label: 'Headset', data: [1200, 1500, 1020, 1600, 900], tension: 0.5 },
  ];
  data: any;
  orders: any[] = [];
  haasPowermeterData: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // 初始获取一次数据
    this.getData();
    this.getHAASPowermeterData();
    this.orders = this.dataService.getOrders();


    // 每秒刷新一次数据
    interval(1000).pipe(
      switchMap(() => this.dataService.getData().pipe(
        catchError((error)=>{
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

    interval(1000).pipe(
      switchMap(() => this.dataService.getHAASPowermeterData().pipe(
        catchError((error) => {
          console.error('Error fetching HAAS Powermeter data:', error);
          // 返回一个包含默认值的 Observable
          return of(this.dataService.getDefaultHAASPowermeterData());
        })
      )),
      startWith(this.dataService.getDefaultHAASPowermeterData()) // 使用 startWith 发送默认值
    ).subscribe(
      (result) => {
        this.haasPowermeterData = result;
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

