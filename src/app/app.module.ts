import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LineExampleComponent } from './components/line-example/line-example.component';
import { EntryComponent } from './components/entry/entry.component';


@NgModule({
  declarations: [
    AppComponent,
    LineExampleComponent,
    EntryComponent,
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
