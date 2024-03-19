import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:1880/HAAS';
  private partTime = 'http://localhost:1880/HAASP';
  private haasPowermeterUrl = 'http://localhost:1880/HAAS_powermeter';
  private LT65Url = 'http://localhost:1880/LT65';
  private LT65UrlPartTime = 'http://localhost:1880/LT65P';
  private LT65UrlMachineStatus = 'http://localhost:1880/LT65M';
  private NTX500Url = 'http://localhost:1880/NTX500';
  private NTX500UrlPartTime = 'http://localhost:1880/NTX500P';


  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(() => of([{
        "time": "12:00:00", "prog_num": "DMG001", "machine_status": "run", "complete_number": "1000",
        "current_tool_number": "2", "spindle_load": "S1", "spindle_speed": "200", "total_tool_change": "5", "cool_level": "6"
      }]))
    );
  }

  getPartTimeData(): Observable<any> {
    return this.http.get<any>(this.partTime).pipe(
      catchError(() => of([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [5, 5, 5, 5, 5, 6, 6, 6, 6, 7]]))
    );
  }


  getHAASPowermeterData(): Observable<any> {
    return this.http.get<any>(this.haasPowermeterUrl).pipe(
      catchError(() => of([[94.86, 94.86, 94.86, 94.86, 94.86, 94.86, 94.86, 94.86, 94.86, 94.86, 94.86, 57.28], 1100.69]))
    );
  }

  getNTX500Data(): Observable<any> {
    return this.http.get<any>(this.NTX500Url).pipe(
      catchError(() => of([{
        "time": "12:00:00", "prog_num": "102", "machine_status": "run", "complete_number": "1000",
        "current_tool_number": "2", "spindle_load": "S1", "spindle_speed": "200", "total_tool_change": "5", "cool_level": "6", "a": "1", "b": "2", "c": "3"
      }]))
    );
  }

  getNTX500PartTimeData(): Observable<any> {
    return this.http.get<any>(this.NTX500UrlPartTime).pipe(
      catchError(() => of({
        labels: ['Part 1', 'Part 2', 'Part 3', 'Part 4'],
        datasets: [
          { data: [3600, 1800, 600, 300], label: 'RUNNING', backgroundColor: 'green' },
          { data: [5400, 1200, 900, 150], label: 'IDLE', backgroundColor: 'blue' },
          { data: [3600, 1800, 600, 300], label: 'ALARM ON', backgroundColor: 'red' },
          { data: [5400, 1200, 900, 150], label: 'FEED HOLD', backgroundColor: 'yellow' }
        ],
        currentPartCycleTime: 20,
      }))
    );
  }

  getLT65Data(): Observable<any> {
    return this.http.get<any>(this.LT65Url).pipe(
      catchError(() => of([{
        "time": "12:00:00", "prog_num": "DMG001", "machine_status": "run", "complete_number": "1000",
        "current_tool_number": "2", "spindle_load": "S1", "spindle_speed": "200", "total_tool_change": "5", "cool_level": "6"
      }]))
    );
  }

  getLT65PartTimeData(): Observable<any> {
    return this.http.get<any>(this.LT65UrlPartTime).pipe(
      catchError(() => of({
        labels: ['Part 1', 'Part 2', 'Part 3', 'Part 4', 'Part 5'],
        datasets: [
          { data: [3600, 1800, 600, 300], label: 'RUNNING', backgroundColor: 'green' },
          { data: [5400, 1200, 900, 150], label: 'IDLE', backgroundColor: 'blue' },
          { data: [3600, 1800, 600, 300], label: 'ALARM ON', backgroundColor: 'red' },
          { data: [5400, 1200, 900, 150], label: 'FEED HOLD', backgroundColor: 'yellow' }
        ],
        currentPartCycleTime: 20,
      }))
    );
  }

  getLT65MachineStatusData(): Observable<any> {
    return this.http.get<any>(this.LT65UrlMachineStatus).pipe(
      catchError(() => of([300, 50, 100, 100]))
    );
  }



  getDefaultHAASPowermeterData(): any {
    return [[94.86, 94.86, 94.86, 94.86, 94.86, 94.86, 94.86, 94.86, 94.86, 94.86, 94.86, 57.27], 1100.69];
  }

  getDefaultHAASData(): any {
    return [{
      "time": "12:00:00", "prog_num": "DMG001", "machine_status": "run", "complete_number": "1000",
      "current_tool_number": "2", "spindle_load": "S1", "spindle_speed": "200", "total_tool_change": "5", "cool_level": "6"
    }];
  }

  getDefaultHAASPartTimeData(): any {
    return [{ "part_number": 3601, "time": "2/21/2024, 4:34:40 PM.894" }, { "part_number": 3600, "time": "2/21/2024, 4:34:11 PM.697" }, { "part_number": 3599, "time": "2/21/2024, 4:33:43 PM.511" },
    { "part_number": 3598, "time": "2/21/2024, 4:33:07 PM.262" }, { "part_number": 3597, "time": "2/21/2024, 4:32:39 PM.57" }, { "part_number": 3596, "time": "2/21/2024, 4:32:09 PM.831" }];
  }

  getDefaultLT65Data(): any {
    return [{ "time": "2/23/2024, 4:43:26 PM", "prog_name": "L001", "run_state": "RUN", "abort_state": "RUN", "ops_mode": "M1" }];
  }



}
