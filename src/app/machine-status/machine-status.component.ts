import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { interval, switchMap } from 'rxjs';


@Component({
  selector: 'app-machine-status',
  templateUrl: './machine-status.component.html',
  styleUrls: ['./machine-status.component.css']
})
export class MachineStatusComponent {

  data: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // 初始获取一次数据
    this.getData();

    // 每秒刷新一次数据
    interval(1000).pipe(
      switchMap(() => this.dataService.getData())
    ).subscribe(
      (result) => {
        this.data = result;
      },
      (error) => {
        console.error('Error fetching haas data:', error);
      }
    );
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

}
