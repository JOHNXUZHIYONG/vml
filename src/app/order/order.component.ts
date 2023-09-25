import { Component } from '@angular/core';
import { Sale_orders, Work_orders } from '../mock_data';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  sale_orders = Sale_orders;
  work_orders = Work_orders;

}
