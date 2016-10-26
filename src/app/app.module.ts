import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {nvD3Module} from "./shared/ng2-nvd3/ng2-nvd3.module";
import {ChartSelectorComponent} from "./chart-selector";

@NgModule({
  declarations: [
    AppComponent,
    ChartSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    nvD3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
