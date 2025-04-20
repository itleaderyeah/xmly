import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BreadcrumbModule } from '../share/components/breadcrumb/breadcrumb.module';
import { HeaderComponent } from '../layouts/header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    BrowserModule,
    BreadcrumbModule,
    AppRoutingModule
  ],
  exports: [HeaderComponent, BreadcrumbModule]
})

export class CoreModule {
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule只能被AppModule引入');
    }
  }

}
