import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClocksRoutingModule } from './clocks-routing.module';
import { AnalogComponent } from './analog/analog.component';
import { DigitalComponent } from './digital/digital.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    AnalogComponent,
    DigitalComponent,
    HomeComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    ClocksRoutingModule
  ]
})
export class ClocksModule { }
