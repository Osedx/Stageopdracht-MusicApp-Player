import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgSemanticModule } from 'ng-semantic';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { SettingService } from '../services/settings.service';
import { DataService } from '../services/data.service';

@NgModule({
    imports: [
        NgSemanticModule,
        RouterModule,
        CommonModule,
        HttpModule,
    ],
    providers: [ SettingService, SettingService ],
    declarations: [
        HeaderComponent,
        FooterComponent,
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})

export class CoreModule {}
