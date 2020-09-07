import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementCComponent } from './element-c.component';
import { createCustomElement } from '@angular/elements';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ElementCRoutingModule } from './element-c-routing.module';
import { PictureComponent } from './components/picture/picture.component';

@NgModule({
  declarations: [ElementCComponent, HomeComponent, ProfileComponent, PictureComponent],
  imports: [
    CommonModule,
    ElementCRoutingModule
  ],
  entryComponents: [ElementCComponent]
})
export class ElementCModule {

  constructor(private injector: Injector) {
    const elementC = createCustomElement(ElementCComponent, { injector });
    customElements.define('element-c', elementC);
  }

  ngDoBootstrap() {}
}
