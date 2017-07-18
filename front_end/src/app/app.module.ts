/*
 * Created by         : Chanaka Fernando.
 * Date               : Wed, 7/12/2017 .
 * Email              : nuwan.c.fernando@gmail.com.
 * LinkedIn           : https://www.linkedin.com/in/n-chanaka-fernando
 * Belongs to Project : incubateLabsFrontEnd.
 * Package            : .
 */

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import 'hammerjs';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdCardModule,  MdChipsModule,  MdIconModule, MdInputModule,
  MdMenuModule,
  MdRadioModule,
  MdSelectModule,
  MdSnackBar,
  MdTabsModule, MdToolbarModule
} from '@angular/material';
import {EnterDetailsComponent} from './components/enter-details/enter-details.component';
import {FindDetailsComponent} from './components/find-details/find-details.component';
import {HttpRequestService} from './service/http-request.service';
import {GlobalVariableService} from './service/global-variable.service';
import {OverviewComponent} from './components/overview/overview.component';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EnterDetailsComponent,
    FindDetailsComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdToolbarModule,
    MdMenuModule,
    MdSelectModule,
    MdInputModule,
    MdCardModule,
    MdMenuModule,
    MdIconModule,
    MdTabsModule,
    MdCardModule,
    MdIconModule,
    MdChipsModule,
    FlexLayoutModule,
    MdRadioModule
  ],
  providers: [GlobalVariableService, HttpRequestService],
  bootstrap: [AppComponent],
  entryComponents: [EnterDetailsComponent]
})
export class AppModule {
}
