import { HttpModule, Http, Response } from '@angular/http';
import { CoreModule } from './core/core.module';
import { enableProdMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';

import { PagesModule } from './pages/pages.module';
// import { PipesModule } from './pipes';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        CoreModule,
        BrowserModule,
        CommonModule,
        HttpModule,
        PagesModule,
//        PipesModule,
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
