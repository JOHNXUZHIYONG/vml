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
import { HaasComponent } from './haas/haas.component';
import { Lt65Component } from './lt65/lt65.component';
import { Ntx500Component } from './ntx500/ntx500.component';
import { NgChartsModule } from 'ng2-charts';
import { Slm30Component } from './slm30/slm30.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    MachineStatusComponent,
    DowntimeComponent,
    OrderComponent,
    OeeComponent,
    LayoutComponent,
    HaasComponent,
    Lt65Component,
    Ntx500Component,
    Slm30Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxChartsModule,
    HttpClientModule,
    NgChartsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
