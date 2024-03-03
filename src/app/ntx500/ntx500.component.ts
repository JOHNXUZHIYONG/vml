import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { interval, switchMap } from 'rxjs';

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
  selector: 'app-ntx500',
  templateUrl: './ntx500.component.html',
  styleUrls: ['./ntx500.component.css']
})
export class Ntx500Component {


  Ntx500Data: any;
  //http to get real data
  
  LT65Data: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // 初始获取一次数据
    this.getNTX500Data();
     


    // 每秒刷新一次数据
    interval(1000).pipe(
      switchMap(() => this.dataService.getNTX500Data())
    ).subscribe(
      (result) => {
        this.Ntx500Data = result;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
 
  }

  getNTX500Data() {
    this.dataService.getNTX500Data().subscribe(
      (result) => {
        this.Ntx500Data = result;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }


  

}

