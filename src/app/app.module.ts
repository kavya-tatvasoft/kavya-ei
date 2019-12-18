import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/dependencies/material/material.module';
import { TableComponent } from './table/table.component';
import { DialogComponent } from './shared/component/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogComponent
  ]
})
export class AppModule { }
