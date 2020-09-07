import { HomeComponent } from './components/home/home.component';
import { ElementRoutingModule } from 'src/app/element-routing-module';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';
import { PictureComponent } from './components/picture/picture.component';

@NgModule({
  imports: [
    ElementRoutingModule.withRoutes([
      { path: '', component: HomeComponent, outlet: 'elementC' },
      { path: 'pictures', component: PictureComponent, outlet: 'elementC' },
      { path: ':id', component: ProfileComponent, outlet: 'elementC' },
      { path: '**', redirectTo: '', pathMatch: 'full'}
    ]),
  ],
  exports: [ElementRoutingModule],
})
export class ElementCRoutingModule {

}
