import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrupalNodeComponent } from './drupal-node/drupal-node.component';
import { DrupalnodeService } from './shared/services/drupalnode.service';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChildDrupalNodesComponent } from './drupal-node/child-drupal-nodes/child-drupal-nodes.component';


@NgModule({
  declarations: [
    AppComponent,
    DrupalNodeComponent,
    ChildDrupalNodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    DrupalnodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
