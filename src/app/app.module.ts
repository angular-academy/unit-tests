import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestPipe } from './pipe/test.pipe';
import {HttpClientModule} from '@angular/common/http';
import { TestMeComponent } from './components/test-me/test-me.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPipe,
    TestMeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
