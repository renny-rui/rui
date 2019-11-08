import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { DateComponent } from './date.component';


@NgModule({
  declarations: [
    DateComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports:[
    DateComponent
  ]
})
export class DateModule { }
