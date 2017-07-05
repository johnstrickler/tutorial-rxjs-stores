import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TeamComponent} from './team/team.component';
import {TeamService} from "./shared/service/team.service";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import { CurrencyPipe } from './shared/pipe/currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule
  ],
  providers: [
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
