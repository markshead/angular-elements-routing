import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import {Location} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HostAComponent } from './components/host-a/host-a.component';
import { HostBComponent } from './components/host-b/host-b.component';
import { RouterModule } from '@angular/router';
import { HostCComponent } from './components/host-c/host-c.component';

@NgModule({
  declarations: [
    AppComponent,
    HostAComponent,
    HostBComponent,
    HostCComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }
  ],
})
export class AppModule { }
