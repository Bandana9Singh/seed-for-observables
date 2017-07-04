import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
 
import { AppComponent } from './app.component';
import { BasicObservablesComponent } from './basic-observables/basic-observables.component';
import { RxAdventuresComponent } from './rx-adventures/rx-adventures.component';
import { ConnectServerComponent } from './connect-server/connect-server.component';
import { GithubUserComponent } from './github-user/github-user.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicObservablesComponent,
    RxAdventuresComponent,
    ConnectServerComponent,
    GithubUserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
