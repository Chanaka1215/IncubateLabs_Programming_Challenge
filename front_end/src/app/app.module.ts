/*
 * Created by         : Chanaka Fernando.
 * Date               : Wed, 7/12/2017 .
 * Email              : nuwan.c.fernando@gmail.com.
 * LinkedIn           : https://www.linkedin.com/in/n-chanaka-fernando
 * Belongs to Project : incubateLabsFrontEnd.
 * Package            : .
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdAutocompleteModule,
  MdButtonModule, MdCardModule, MdCheckboxModule, MdChipsModule, MdDatepickerModule, MdIconModule, MdInputModule,
  MdListModule,
  MdMenuModule,
  MdPaginatorModule,
  MdSelectModule,
  MdSidenavModule, MdSliderModule, MdSlideToggleModule, MdSortModule, MdTableModule,
  MdTabsModule, MdToolbarModule
} from '@angular/material';
import { EnterDetailsComponent } from './components/enter-details/enter-details.component';
import { FindDetailsComponent } from './components/find-details/find-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EnterDetailsComponent,
    FindDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdToolbarModule,
    MdSidenavModule,
    MdMenuModule,
    MdSlideToggleModule,
    MdSliderModule,
    MdSelectModule,
    MdInputModule,
    MdDatepickerModule,
    MdCheckboxModule,
    MdCardModule,
    MdMenuModule,
    MdIconModule,
    MdTabsModule,
    MdAutocompleteModule,
    MdListModule,
    MdButtonModule,
    MdPaginatorModule,
    MdTableModule,
    MdSortModule,
    MdCardModule,
    MdIconModule,
    MdChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
