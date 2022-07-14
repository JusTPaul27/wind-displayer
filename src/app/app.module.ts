import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InsertComponent } from './component/insert/insert.component';
import { ListComponent } from './component/list/list.component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
