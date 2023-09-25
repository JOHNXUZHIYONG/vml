import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Bar_positions, Dates, GrayRectanglePositions, Machines } from '../mock_data';

@Component({
  selector: 'app-downtime',
  templateUrl: './downtime.component.html',
  styleUrls: ['./downtime.component.css']
})
export class DowntimeComponent {

  machines = Machines;  
  dates: string[] = [];
  bar_positions = Bar_positions;
  grayRectanglePositions = GrayRectanglePositions;

  
 
  constructor() {
    this.generateCalendarDates();
  }

  generateCalendarDates() {
    const currentDate = new Date();
    const calendarDates = [];

      // Add the current date
      calendarDates.push(this.formatDate(currentDate));
     
      // Calculate the previous four days
      for (let i = 1; i <= 4; i++) {
        const prevDay = new Date(currentDate);
        prevDay.setDate(currentDate.getDate() - i);
        calendarDates.unshift(this.formatDate(prevDay)); // Add to the beginning of the array
        
      }
  
      // Calculate the next five days
      for (let i = 1; i <= 5; i++) {
        const nextDay = new Date(currentDate);
        nextDay.setDate(currentDate.getDate() + i);
        calendarDates.push(this.formatDate(nextDay));
        
      }
  
      this.dates = calendarDates;
    }

  formatDate(date: Date): string {
    // Format the date as needed (e.g., "YYYY-MM-DD")
    
    return date.toISOString().split('T')[0];
  }

  // constructor(private datePipe: DatePipe) {}

  // ngOnInit(): void {
  //   // 初始化日期数组，包括当前日期和前四天以及后五天
  //   const currentDate = new Date();
  //   for (let i = -4; i <= 5; i++) {
  //     const date = new Date(currentDate);
  //     date.setDate(date.getDate() + i);
  //     const formattedDate = this.datePipe.transform(date, 'dd/MM/yyyy HH:mm');
  //     if (formattedDate) {
  //       this.dates.push(formattedDate);
  //     } else {
  //       // 处理日期无效的情况
  //       console.error(`Invalid date at index ${i}`);
  //     }
  //   }
  // }
  
  //   // 定时更新日期
  //   setInterval(() => {
  //     this.updateCurrentDate();
  //   }, 12 * 60 * 60 * 1000); // 每12小时更新一次
  // }
  
  // updateCurrentDate() {
  //   // 更新日期数组中的当前日期
  //   const currentDate = new Date();
  //   const formattedCurrentDate = this.datePipe.transform(currentDate, 'dd/MM/yyyy HH:mm');
  //   if (formattedCurrentDate) {
  //     this.dates[4] = formattedCurrentDate;
  //   } else {
  //     // 处理日期无效的情况
  //     console.error(`Invalid current date`);
  //   }
  // }

  // isCurrentDate(date: string): boolean {
  //   // 实现检查日期是否为当前日期的逻辑
  //   const currentDate = new Date();
  //   const formattedCurrentDate = this.datePipe.transform(currentDate, 'dd/MM/yyyy HH:mm');
  //   return date === formattedCurrentDate;
  // }

  // machineStatus(machine: any, date: string): string {
  //   // 实现获取机器状态的逻辑
  //   // 这里需要根据您的应用逻辑返回适当的机器状态
  //   return 'OK';
  // }
  

}
