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
  NTX500data: any;
  LT65data: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // 初始获取一次数据
    this.getData();
    this.getNTX500Data();
    this.getLT65Data();

    interval(1000).subscribe(() => {
      this.getData();
      this.getNTX500Data();
      this.getLT65Data();
    });
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

  getNTX500Data() {
    this.dataService.getNTX500Data().subscribe(
      (result) => {
        this.NTX500data = result;
      },
      (error) => {
        console.error('Error fetching NTX500 data:', error);
      }
    );
  }

  getLT65Data() {
    this.dataService.getLT65Data().subscribe(
      (result) => {
        this.LT65data = result;
      },
      (error) => {
        console.error('Error fetching LT65 data:', error);
      }
    );
  }



}
