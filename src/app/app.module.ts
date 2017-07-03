import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicObservablesComponent } from './basic-observables/basic-observables.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicObservablesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
