import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:1880/HAAS';
  private haasPowermeterUrl = 'http://localhost:1880/HAAS_powermeter'; 
  private LT65Url = 'http://localhost:1880/LT65';// 替换为你的API URL

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getHAASPowermeterData(): Observable<any> {
    return this.http.get<any>(this.haasPowermeterUrl);
  }

  getLT65Data(): Observable<any> {
    return this.http.get<any>(this.LT65Url);
  }

  getDefaultHAASPowermeterData(): any {
    return [{"time": "1/31/2024, 4:15:58 PM.599", "P_total": "0.4", "number": "2"},{"time": "1/31/2024, 4:15:58 PM.599", "P_total": "0.3", "number": "2"},
    {"time": "1/31/2024, 4:15:58 PM.599", "P_total": "0.4", "number": "2"},{"time": "1/31/2024, 4:15:59 ", "P_total": "0.5", "number": "2"},{"time": "1/31/2024, 4:15:58 PM.599", "P_total": "0.4", "number": "2"},
  ];
  }

  getDefaultHAASData(): any {
    return [{"time": "12:00:00", "prog_num": "DMG001", "machine_status": "run", "complete_number": "1000",
     "current_tool_number": "2", "spindle_load": "S1", "spindle_speed": "200", "total_tool_change": "5", "cool_level": "6"}];
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
