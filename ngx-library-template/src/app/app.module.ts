import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxLibModule, UtilsService } from 'ngx-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxLibModule
    ],
    providers: [UtilsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
