import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MspListComponent} from "./msp-list/msp-list.component";
import {appRoutes} from "./app.routes";
import { MspGridItemComponent } from './msp-grid-item/msp-grid-item.component';
import { MspDetailsComponent } from './msp-details/msp-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatRippleModule} from "@angular/material/core";
import { MspPersonalDetailComponent } from './msp-personal-detail/msp-personal-detail.component';
import { MspPartiesDetailsComponent } from './msp-parties-details/msp-parties-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MspListComponent,
    MspGridItemComponent,
    MspDetailsComponent,
    MspPersonalDetailComponent,
    MspPartiesDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
