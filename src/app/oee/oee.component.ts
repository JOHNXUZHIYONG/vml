
import { Component, ViewEncapsulation } from '@angular/core';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { Machines, Machines_overall } from '../mock_data';


@Component({
  selector: 'app-oee',
  templateUrl: './oee.component.html',
  styleUrls: ['./oee.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class OeeComponent {

  currentDateTime: string='';
  machines = Machines; 
  machines_overall = Machines_overall;

  lineChartData: any[] = [
    // 折线图数据
    {
      name: 'Series 1',
      series: [
        { name: 'Jan', value: 60 },
        { name: 'Feb', value: 65 },
        { name: 'Mar', value: 75 },
        { name: 'Apr', value: 80 },
        { name: 'May', value: 70 },
        { name: 'Jun', value: 80 },
        { name: 'Jul', value: 80 },
        { name: 'Aug', value: 70 },
        { name: 'Sep', value: 75 },
      ],
    },
    // {
    //   name: 'Series 2',
    //   series: [
    //     { name: 'Jan', value: 5 },
    //     { name: 'Feb', value: 8 },
    //     { name: 'Mar', value: 12 },
    //     { name: 'Apr', value: 18 },
    //     { name: 'May', value: 25 },
    //   ],
    // },
  ];
  
 customColors = [
    {
      name: 'white',
      value: '#FFFFFF',
    },
  ];
 customTheme = {
    // 设置折线的颜色
    line: {
      stroke: '#FFFFFF', // 设置线的颜色为红色
    },
    // 设置文本的颜色
    chart: {
      color: '#FFFFFF', // 设置文本颜色为黑色
    },};
  showXAxis: boolean = true; // 是否显示X轴
  showYAxis: boolean = true; // 是否显示Y轴
  showLegend: boolean = false; // 是否显示图例
  showXAxisLabel: boolean = false; // 是否显示X轴标签
  showYAxisLabel: boolean = false; // 是否显示Y轴标签
  xAxisLabel: string = 'Category'; // X轴标签
  yAxisLabel: string = 'Value'; // Y轴标签

  constructor() { }

  ngOnInit(): void {
    this.updateDateTime();
    setInterval(() => {
      this.updateDateTime();
    }, 1000); // 每秒更新一次

    // this.single = [
     
    //   { name: 'Jan', value: 10 },
    //     { name: 'Feb', value: 15 },
    //     { name: 'Mar', value: 25 },
    //     { name: 'Apr', value: 30 },
    //     { name: 'May', value: 20 },
    //   // 添加更多日期和OEE值
    // ];

  }

  updateDateTime() {
    const now = new Date();
    const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const timeOptions: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedDate = now.toLocaleDateString('en-US', dateOptions);
    const formattedTime = now.toLocaleTimeString('en-US', timeOptions);
    this.currentDateTime = `${formattedDate} ${formattedTime}`;
  }

  
  

}
