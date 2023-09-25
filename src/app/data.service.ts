import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private orders = [
    { id: 1, amount: 100, date: new Date('2023-08-10') },
    { id: 2, amount: 150, date: new Date('2023-08-12') },
    // ... other orders
  ];

  getOrders(): any[] {
    return this.orders;
  }

  constructor() { }
}
