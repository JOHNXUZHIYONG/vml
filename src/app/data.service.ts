import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:1880/HAAS';
  private partTime = 'http://localhost:1880/HAASP';
  private haasPowermeterUrl = 'http://localhost:1880/HAAS_powermeter'; 
  private LT65Url = 'http://localhost:1880/LT65';// 替换为你的API URL

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getPartTimeData(): Observable<any> {
    return this.http.get<any>(this.partTime);
  }
  

  getHAASPowermeterData(): Observable<any> {
    return this.http.get<any>(this.haasPowermeterUrl);
  }

  getLT65Data(): Observable<any> {
    return this.http.get<any>(this.LT65Url);
  }

  getDefaultHAASPowermeterData(): any {
    return [{"time": "1/31/2024, 4:15:24 PM.599", "P_total": "0.4", "number": "2"},{"time": "1/31/2024, 4:15:23 PM.599", "P_total": "0.3", "number": "2"},
    {"time": "1/31/2024, 4:15:22 PM.599", "P_total": "0.4", "number": "2"},{"time": "1/31/2024, 4:15:21 PM.599", "P_total": "0.5", "number": "2"},{"time": "1/31/2024, 4:15:20 PM.599", "P_total": "0.4", "number": "2"},
  ];
  }

  getDefaultHAASData(): any {
    return [{"time": "12:00:00", "prog_num": "DMG001", "machine_status": "run", "complete_number": "1000",
     "current_tool_number": "2", "spindle_load": "S1", "spindle_speed": "200", "total_tool_change": "5", "cool_level": "6"}];
  }

  getDefaultHAASPartTimeData(): any {
    return [ { "part_number": 3601, "time": "2/21/2024, 4:34:40 PM.894" }, { "part_number": 3600, "time": "2/21/2024, 4:34:11 PM.697" }, { "part_number": 3599, "time": "2/21/2024, 4:33:43 PM.511" }, 
    { "part_number": 3598, "time": "2/21/2024, 4:33:07 PM.262" }, { "part_number": 3597, "time": "2/21/2024, 4:32:39 PM.57" }, { "part_number": 3596, "time": "2/21/2024, 4:32:09 PM.831" } ];
  }

  private orders = [
    { id: 1, amount: 100, date: new Date('2023-08-10') },
    { id: 2, amount: 150, date: new Date('2023-08-12') },
    // ... other orders
  ];

  getOrders(): any[] {
    return this.orders;
  }

  
}
