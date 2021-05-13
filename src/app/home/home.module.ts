import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import { StartComponent } from './start/start.component';
import {HttpClientModule} from '@angular/common/http';
import {WeatherService} from '../shared/services/weather.service';

const routes: Routes = [{ path: '', component: StartComponent }];

@NgModule({
  declarations: [
    StartComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [WeatherService]
})
export class HomeModule { }
