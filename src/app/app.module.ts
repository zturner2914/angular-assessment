import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrupalNodeComponent } from './drupal-node/drupal-node.component';
import { DrupalnodeService } from './shared/services/drupalnode.service';

@NgModule({
  declarations: [
    AppComponent,
    DrupalNodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DrupalnodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
