import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirstComponent } from './first/first.component';
import { GOTComponentComponent } from './gotcomponent/gotcomponent.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { F1ComponentComponent } from './f1-component/f1-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    GOTComponentComponent,
    DirectiveExampleComponent,
    F1ComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
