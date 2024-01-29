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
  // haasPowermeterData: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // 初始获取一次数据
    this.getData();
    // this.getHAASPowermeterData();
    this.orders = this.dataService.getOrders();


    // 每秒刷新一次数据
    interval(1000).pipe(
      switchMap(() => this.dataService.getData())
    ).subscribe(
      (result) => {
        this.data = result;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

    // interval(1000).pipe(
    //   switchMap(() => this.dataService.getHAASPowermeterData())
    // ).subscribe(
    //   (result) => {
    //     this.haasPowermeterData = result;
    //   },
    //   (error) => {
    //     console.error('Error fetching data:', error);
    //   }
    // );
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

  // getHAASPowermeterData() {
  //   this.dataService.getHAASPowermeterData().subscribe(
  //     (result) => {
  //       this.haasPowermeterData = result;
  //     },
  //     (error) => {
  //       console.error('Error fetching data:', error);
  //     }
  //   );
  // }








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

  //charts 

  showPieChart = true;
  showBarChart = true;
  showLineChart = true;

  




  view: number[] = [200, 200]; // 图表的尺寸
  barChartData: any[] = [
    // 图表数据
    {
      name: 'Product 1',
      value: 25,
    },
    {
      name: 'Product 2',
      value: 50,
    },
    {
      name: 'Product 3',
      value: 75,
    },
    {
      name: 'Product 4',
      value: 100,
    },
  ];
  showXAxis: boolean = true; // 是否显示X轴
  showYAxis: boolean = true; // 是否显示Y轴
  showLegend: boolean = true; // 是否显示图例
  showXAxisLabel: boolean = true; // 是否显示X轴标签
  showYAxisLabel: boolean = true; // 是否显示Y轴标签
  xAxisLabel: string = 'Category'; // X轴标签
  yAxisLabel: string = 'Value'; // Y轴标签



  lineChartData: any[] = [
    // 折线图数据
    {
      name: 'Series 1',
      series: [
        { name: 'Jan', value: 10 },
        { name: 'Feb', value: 15 },
        { name: 'Mar', value: 25 },
        { name: 'Apr', value: 30 },
        { name: 'May', value: 20 },
      ],
    },
    {
      name: 'Series 2',
      series: [
        { name: 'Jan', value: 5 },
        { name: 'Feb', value: 8 },
        { name: 'Mar', value: 12 },
        { name: 'Apr', value: 18 },
        { name: 'May', value: 25 },
      ],
    },
  ];
  lineColorScheme = {
    domain: ['#000000', '#E44D25'], // 可以设置不同的颜色方案
  };

  pieChartData: any[] = [
    // 饼图数据
    { name: 'Stop', value: 25 },
    { name: 'Idle', value: 50 },
    { name: 'Run', value: 75 },
    
  ];
  pieColorScheme = {
    domain: ['#08DDC1', '#FFDC1B', '#FF5E3A'],
  };
  showLabels: boolean = true; // 是否显示扇区标签
  pieShowLegend: boolean = false; // 是否显示图例
  legendPosition: string = 'below'; // 图例的位置（'right' | 'below' | 'above'）

}

