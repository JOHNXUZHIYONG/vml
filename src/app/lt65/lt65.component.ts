import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { interval, switchMap } from 'rxjs';

@Component({
  selector: 'app-lt65',
  templateUrl: './lt65.component.html',
  styleUrls: ['./lt65.component.css']
})
export class Lt65Component {
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
  data: any;
  orders: any[] = [];
  showPieChart = true;
  showBarChart = true;
  showLineChart = true;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // 初始获取一次数据
    this.getLT65Data();
    
    this.orders = this.dataService.getOrders();


    // 每秒刷新一次数据
    interval(1000).pipe(
      switchMap(() => this.dataService.getLT65Data())
    ).subscribe(
      (result) => {
        this.data = result;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

    
  }

  getLT65Data() {
    this.dataService.getLT65Data().subscribe(
      (result) => {
        this.data = result;
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

