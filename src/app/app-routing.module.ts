import { HostBComponent } from './components/host-b/host-b.component';
import { HostAComponent } from './components/host-a/host-a.component';
import { HostCComponent } from './components/host-c/host-c.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { MultiLocationStrategy } from './multi-location-strategy';

const routes: Routes = [
  { path: 'host-a', component: HostAComponent },
  { path: 'host-b', component: HostBComponent },
  { path: 'host-c', component: HostCComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
