import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LineExampleComponent } from './components/line-example/line-example.component';
import { EntryComponent } from './components/entry/entry.component';
import { BarComponent } from './components/bar/bar.component';
import { RadarComponent } from './components/radar/radar.component';
import { DoughnutComponent } from './components/doughnut/doughnut.component';


@NgModule({
  declarations: [
    AppComponent,
    LineExampleComponent,
    EntryComponent,
    BarComponent,
    RadarComponent,
    DoughnutComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
