import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { NgSemanticModule } from 'ng-semantic';

import { PlaylistPageModule } from './playlistpage/playlistpage.module';
import { ToplistPageModule } from './toplistpage/toplistpage.module';
import { PagesRoutingModule } from './pages.routing.module';
import { NoContentComponent } from './no-content/no-content.component';

import { VirtualScrollModule } from 'angular2-virtual-scroll';

@NgModule({
    imports: [
        NgSemanticModule,
        PlaylistPageModule,
        ToplistPageModule,
        CommonModule,
        HttpModule,
        PagesRoutingModule,
        VirtualScrollModule
    ],
    declarations: [
        NoContentComponent
    ],
    exports: [
        RouterModule
    ]
})

export class PagesModule {
}
