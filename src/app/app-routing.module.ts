import { DowntimeComponent } from './downtime/downtime.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachineStatusComponent } from './machine-status/machine-status.component';
import { OeeComponent } from './oee/oee.component';
import { OrderComponent } from './order/order.component';
import { LayoutComponent } from './layout/layout.component';
import { ChartComponent } from '@swimlane/ngx-charts';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [
  { path:'', redirectTo:'/machine_status', pathMatch:'full'},
  {  path:'chart', component:ChartsComponent},
  {
    path: '', component: LayoutComponent, // canActivate: [AuthGuard], 应用 AuthGuard
    children: [
  {  path: 'machine_status', component: MachineStatusComponent },
  {  path:'downtime', component:DowntimeComponent},
  {  path: 'oee', component: OeeComponent },
  {  path:'order', component:OrderComponent},
  
 ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
