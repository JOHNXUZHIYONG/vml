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
  private NTX500UrlMachineStatus = 'http://localhost:1880/NTX500M';
  private SLM30Url = 'http://localhost:1880/SLM30';
  private SLM30UrlPower = 'http://localhost:1880/SLM30P';
  private SLM30UrlOxygen = 'http://localhost:1880/SLM30O';


  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(() => of([{
        "time": "12:00:00", "prog_num": "DMG101", "machine_status": "Running", "part_count": "100", "complete_number": "1000",
        "current_tool_number": "2", "spindle_load": "H1", "spindle_speed": "260", "total_tool_change": "5", "cool_level": "6", "x": "65", "y": "56", "z": "38"
      }]))
    );
  }

  getPartTimeData(): Observable<any> {
    return this.http.get<any>(this.partTime).pipe(
      catchError(() => of([[91, 92, 93, 94, 95, 96, 97, 98, 99, 100], [5, 5, 5, 5, 5, 6, 6, 6, 6, 7]]))
    );
  }


  getHAASPowermeterData(): Observable<any> {
    return this.http.get<any>(this.haasPowermeterUrl).pipe(
      catchError(() => of([[0.9486, 0.9686, 0.9486, 0.9586, 0.9486, 0.9486, 0.9686, 0.9586, 0.9486, 0.9686, 0.9486, 0.9728], 11.0069]))
    );
  }

  getNTX500Data(): Observable<any> {
    return this.http.get<any>(this.NTX500Url).pipe(
      catchError(() => of([{
        "time": "12:00:00", "prog_num": "102", "machine_status": "run", "part_count": "54", "complete_number": "1000",
        "current_tool_number": "10012", "spindle_load": "S1", "spindle_speed": "200", "spindle_load_2": "S2", "spindle_speed_2": "100", "total_tool_change": "5", "cool_level": "6", "a": "1", "b": "2", "c": "3", "x": "61", "y": "32", "z": "30"
      }]))
    );
  }

  getNTX500PartTimeData(): Observable<any> {
    return this.http.get<any>(this.NTX500UrlPartTime).pipe(
      catchError(() => of({
        labels: ['Part 51', 'Part 52', 'Part 53', 'Part 54'],
        datasets: [
          { data: [36, 30, 40, 30], label: 'RUNNING', backgroundColor: 'green' },
          { data: [54, 50, 50, 55], label: 'IDLE', backgroundColor: 'blue' },
          { data: [36, 30, 40, 30], label: 'ALARM ON', backgroundColor: 'red' },
          { data: [54, 60, 50, 55], label: 'FEED HOLD', backgroundColor: 'yellow' }
        ],
        currentPartCycleTime: 170,
      }))
    );
  }

  getNTX500MachineStatusData(): Observable<any> {
    return this.http.get<any>(this.NTX500UrlMachineStatus).pipe(
      catchError(() => of({"ALARM ON":100, "IDLE": 50, "RUNNING":300}))
    );
  }

  getLT65Data(): Observable<any> {
    return this.http.get<any>(this.LT65Url).pipe(
      catchError(() => of([{
        "time": "12:00:00", "prog_num": "L-101", "machine_status": "Running", "part_count": "100", "complete_number": "1000", "red": "0", "blue": "0", "yellow": "0", "green": "1",
        "current_tool_number": "2", "spindle_load": "S1", "spindle_speed": "200", "total_tool_change": "5", "cool_level": "6", "a": "41", "b": "2", "c": "53", "x": "51", "y": "42", "z": "36"
      }]))
    );
  }

  getLT65PartTimeData(): Observable<any> {
    return this.http.get<any>(this.LT65UrlPartTime).pipe(
      catchError(() => of({
        labels: ['Part 31', 'Part 32', 'Part 33', 'Part 34', 'Part 35'],
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

  getSLM30UrlPowerData(): Observable<any> {
    return this.http.get<any>(this.SLM30UrlPower).pipe(
      catchError(() => of([[94.23, 93.45, 94.67, 98.76, 94.34, 95.56, 99.87, 96.78, 95.32, 97.54, 100.00, 95.67], 1100.69]))
    );
  }

  getSLM30UrlOxygenData(): Observable<any> {
    return this.http.get<any>(this.SLM30UrlOxygen).pipe(
      catchError(() => of([[58, 65, 63, 59, 66, 56, 58, 57, 60, 65, 63, 58], 730]))
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
