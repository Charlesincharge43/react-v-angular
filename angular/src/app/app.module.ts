import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// External Modules .. NgModel lives in FormsModule
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  // Every component must be declared here
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
