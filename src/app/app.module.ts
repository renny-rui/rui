import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoComponent } from './todo/todo.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { DateModule } from './date/date.module';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCardModule,
    MatSliderModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatListModule,
    MatInputModule,
    FlexLayoutModule,
    DateModule
  ],
  exports: [FooterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
