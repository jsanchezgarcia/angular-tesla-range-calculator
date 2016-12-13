/*
 * tesla-battery.module.ts
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// containers
import { TeslaBatteryComponent } from './containers/tesla-battery/tesla-battery.component';

// components
import { TeslaCarComponent } from './components/tesla-car/tesla-car.component';

// services
import { BatteryService } from './tesla-battery.service';

@NgModule({
  declarations: [
    TeslaBatteryComponent,
    TeslaCarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    BatteryService
  ],
  exports: [
    // exporting so our root module can access
    TeslaBatteryComponent
  ]
})
export class TeslaBatteryModule {}