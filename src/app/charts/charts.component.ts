import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {

  showPieChart = true;
  showBarChart = true;
  showLineChart = true;

  orders: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.orders = this.dataService.getOrders();
  }

  view: number[] = [700, 400]; // 图表的尺寸
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
    { name: 'Category 1', value: 25 },
    { name: 'Category 2', value: 50 },
    { name: 'Category 3', value: 75 },
    { name: 'Category 4', value: 100 },
  ];
  pieColorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5'],
  };
  showLabels: boolean = true; // 是否显示扇区标签
  pieShowLegend: boolean = true; // 是否显示图例
  legendPosition: string = 'right'; // 图例的位置（'right' | 'below' | 'above'）

}
