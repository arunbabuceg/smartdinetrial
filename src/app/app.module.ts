import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { Features1Component } from './features-1/features-1.component';
import { Features2Component } from './features-2/features-2.component';
import { Features3Component } from './features-3/features-3.component';
import { Features4Component } from './features-4/features-4.component';
import { AllInOneComponent } from './all-in-one/all-in-one.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    Features1Component,
    Features2Component,
    Features3Component,
    Features4Component,
    AllInOneComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
