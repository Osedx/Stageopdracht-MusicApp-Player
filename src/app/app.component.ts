import { Component, ElementRef, EventEmitter } from '@angular/core';
import { Renderer, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart }  from '@angular/router';
import { NavigationCancel, NavigationError }  from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    public isOverlayEnabled: boolean = false;
    public isRouterChanging: boolean = false;

    constructor(
        private _router: Router,
        private _element: ElementRef,
        private _renderer: Renderer
    ) {}

public ngOnInit() {
        this._router.events
            .subscribe((evt) => {
                if (evt instanceof NavigationEnd) {
                    document.body.scrollTop = 0;
                    this.isRouterChanging = false;
                } else if (evt instanceof NavigationStart) {
                    this.isRouterChanging = true;
                } else if (evt instanceof NavigationCancel) {
                    this.isRouterChanging = false;
                } else if (evt instanceof NavigationError) {
                    this.isRouterChanging = false;
                }
            });
    }
}
