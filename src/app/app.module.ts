import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { FormsModule } from '@angular/forms';
import { MachineStatusComponent } from './machine-status/machine-status.component';
import { DowntimeComponent } from './downtime/downtime.component';
import { OrderComponent } from './order/order.component';
import { OeeComponent } from './oee/oee.component';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    MachineStatusComponent,
    DowntimeComponent,
    OrderComponent,
    OeeComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxChartsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
