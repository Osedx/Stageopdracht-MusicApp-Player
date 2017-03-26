var ac_main =
webpackJsonpac__name_([0],{

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(2);

/***/ }),

/***/ 101:
/***/ (function(module, exports) {

module.exports = "<div class='wrapper'>\r\n    <my-header class='my-header'></my-header>\r\n    <main [class.overlay]='isOverlayEnabled'>\r\n\r\n        <!-- Loader -->\r\n        <div *ngIf='isRouterChanging' class='margin-top-lg text-center'>\r\n            <div class='loader-lg'></div>\r\n            <p class='margin-top text-muted' translate>Pagina laden</p>\r\n        </div>\r\n\r\n        <router-outlet></router-outlet>\r\n\r\n    </main>\r\n    <my-footer class='my-footer'></my-footer>\r\n</div>"

/***/ }),

/***/ 102:
/***/ (function(module, exports) {

module.exports = "    <div class=\"infobar\" *ngIf=\"playlistState.activeVideo\">\r\n            <div class=\"header\">\r\n              {{playlistState.activeVideo.title}}\r\n            </div>\r\n            <div  class=\"description\" >\r\n            <div>Added by {{playlistState.activeVideo.uploader}}</div>\r\n            <div>{{playlistState.activeVideo.rating}} likes</div>\r\n            </div>\r\n    </div>"

/***/ }),

/***/ 103:
/***/ (function(module, exports) {

module.exports = "<!--\r\n<iframe #playlistplayer \r\n        id=\"playlistplayer\"\r\n        *ngIf=\"playlistState.activeVideo\"\r\n        frameborder=\"0\"\r\n        allowfullscreen allowscriptaccess=\"always\"\r\n        [src]=\"playlistState.activeVideo?._id +'?enablejsapi=1&version=3&playerapiid=ytplayer&loop=1&autoplay=1&playlist='+videoList | youtubeSafeUrl\">\r\n</iframe>\r\n-->\r\n<div class=\"playercontainer\">\r\n    <youtube-player\r\n          *ngIf=\"playlistState.activeVideo\"\r\n          width=\"100%\"\r\n          height=\"100%\"\r\n          [videoId]=\"playlistState.activeVideo?._id\"\r\n          (ready)=\"savePlayer($event)\"\r\n          (change)=\"onStateChange($event)\">\r\n    </youtube-player>\r\n</div>\r\n<my-activevideoinfo></my-activevideoinfo>\r\n"

/***/ }),

/***/ 104:
/***/ (function(module, exports) {

module.exports = "<div class='title ui raised segment'>Playlist</div>\r\n <div class=\"ui relaxed divided list\">\r\n  <div class=\"item\" *ngFor=\"let p of playlistState.playList; let i = index\" [class.playing] = \"p === playlistState.activeVideo\">\r\n      <my-playlistitem [playlistitem]=\"p\" [index]=\"i\"></my-playlistitem>\r\n  </div>\r\n</div> "

/***/ }),

/***/ 105:
/***/ (function(module, exports) {

module.exports = "<div class=\"playlistflexcontainer\" (click)=\"selectVideo()\" [ngClass]=\"{'active': playlistitem?._id === this.playlistState.activeVideo?._id}\">\r\n    <div class=\"number\">{{index +1}}</div>\r\n    <img class=\"ui tiny left floated image playlistimage\" src=\"{{playlistitem.thumbnailurl}}\">\r\n    <div class=\"infocontainer\">\r\n    <div class=\"content\">\r\n        <div class=\"header\">\r\n          {{playlistitem.title}}\r\n        </div>\r\n        <div class=\"info\">\r\n        <div  class=\"description\">\r\n          Added by {{playlistitem.uploader}}\r\n        </div>\r\n        </div>\r\n        <div class=\"right floated content\">\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 106:
/***/ (function(module, exports) {

module.exports = "<footer class='footer'>\r\n\r\n    <!-- Disclaimer -->\r\n    <div class='footer-bottom col-xs-12'>\r\n        <span class='footer-copyright'>Music app District01 © 2017</span>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

module.exports = "<div class='ui top fixed menu'>\r\n  <div class='item logo'>\r\n    <img src='../../assets/img/logo.png'>\r\n  </div>\r\n  <div class='right menu'>\r\n  <a class='item' [routerLinkActiveOptions]='{ exact: true }' [routerLinkActive]='[\"active\"]' [routerLink]='[\"/playlist\"]'>Playlist</a>\r\n  <a class='item' [routerLinkActiveOptions]='{ exact: true }' [routerLinkActive]='[\"active\"]' [routerLink]='[\"/toplist\"]'>Toplist</a>\r\n    </div>\r\n</div>\r\n<p></p>\r\n<p></p>"

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container\">\r\n<my-player></my-player>\r\n<my-playlist></my-playlist>\r\n</div>"

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(91);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(440);

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(92);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(93);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(94);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(95);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(96);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(97);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(98);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(17);

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(284);

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(441);

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(544);

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });




var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    DataService.prototype.getPlaylist = function () {
        return this.http.get('https://musicwebapp.herokuapp.com/playlist')
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.deletePlaylistItem = function (id) {
        return this.http.delete("/playlistitem/" + id, this.options);
    };
    DataService.prototype.deleteRatings = function (id) {
        console.log(id);
        return this.http.delete("/ratings/" + id, this.options);
    };
    return DataService;
}());
DataService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], DataService);



/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(143);

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoContentComponent; });


var NoContentComponent = (function () {
    function NoContentComponent() {
    }
    return NoContentComponent;
}());
NoContentComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'no-content',
        template: "\n    <div>\n    <h1 class=\"error\">404: page doesn't exist :)</h1>\n    </div>\n  ",
        styles: ["\n    .error {\n      text-align: center;   \n      color: red;\n      position: relative;\n      top: 20px;\n    }\n  "]
    })
], NoContentComponent);



/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistPageComponent; });


var PlaylistPageComponent = (function () {
    function PlaylistPageComponent() {
    }
    return PlaylistPageComponent;
}());
PlaylistPageComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'my-playlistpage',
        template: __webpack_require__(108),
        styles: [__webpack_require__(116)]
    })
], PlaylistPageComponent);



/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(795);

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(801);

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(819);

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_environment__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(53);
/* harmony export (immutable) */ __webpack_exports__["main"] = main;
/*
 * Angular bootstraping
 */



/*
 * App Module
 * our top level module that holds all of our components
 */

/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["platformBrowserDynamic"])()
        .bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(__WEBPACK_IMPORTED_MODULE_1__app_environment__["a" /* decorateModuleRef */])
        .catch(function (err) { return console.error(err); });
}
// needed for hmr
// in prod this is replace for document ready
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__["bootloader"])(main);


/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = vendor_lib;

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_core_module__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pages_module__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });







// import { PipesModule } from './pipes';

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_6__pages_pages_module__["a" /* PagesModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);



/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decorateModuleRef; });
/* unused harmony export ENV_PROVIDERS */
// Angular 2


// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function (value) { return value; };
if (false) {
    enableProdMode();
    // Production
    _decorateModuleRef = function (modRef) {
        disableDebugTools();
        return modRef;
    };
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"]);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["enableDebugTools"])(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
var decorateModuleRef = _decorateModuleRef;
var ENV_PROVIDERS = PROVIDERS.slice();


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(111);

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(442);

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(444);

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });





var AppComponent = (function () {
    function AppComponent(_router, _element, _renderer) {
        this._router = _router;
        this._element = _element;
        this._renderer = _renderer;
        this.isOverlayEnabled = false;
        this.isRouterChanging = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events
            .subscribe(function (evt) {
            if (evt instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["NavigationEnd"]) {
                document.body.scrollTop = 0;
                _this.isRouterChanging = false;
            }
            else if (evt instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["NavigationStart"]) {
                _this.isRouterChanging = true;
            }
            else if (evt instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["NavigationCancel"]) {
                _this.isRouterChanging = false;
            }
            else if (evt instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["NavigationError"]) {
                _this.isRouterChanging = false;
            }
        });
    };
    return AppComponent;
}());
AppComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app',
        template: __webpack_require__(101),
        styles: [__webpack_require__(109)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"]])
], AppComponent);



/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_playlist_state_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveVideoInfoComponent; });



var ActiveVideoInfoComponent = (function () {
    function ActiveVideoInfoComponent(playlistState) {
        this.playlistState = playlistState;
    }
    return ActiveVideoInfoComponent;
}());
ActiveVideoInfoComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'my-activevideoinfo',
        template: __webpack_require__(102),
        styles: [__webpack_require__(110)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_playlist_state_service__["a" /* PlaylistState */]])
], ActiveVideoInfoComponent);



/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Playlist; });
var Playlist = (function () {
    function Playlist(_id, title, thumbnailurl, channeltitle, channelid, description, uploader, uploaderid, rating) {
        this._id = _id;
        this.title = title;
        this.thumbnailurl = thumbnailurl;
        this.channeltitle = channeltitle;
        this.channelid = channelid;
        this.description = description;
        this.uploader = uploader;
        this.uploaderid = uploaderid;
        this.rating = rating;
        this._id = _id;
        this.title = title;
        this.thumbnailurl = thumbnailurl;
        this.channeltitle = channeltitle;
        this.channelid = channelid;
        this.description = description;
        this.uploader = uploader;
        this.uploaderid = uploaderid;
        this.rating = rating;
    }
    ;
    return Playlist;
}());

/* unused harmony default export */ var _unused_webpack_default_export = Playlist;


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(443);

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_playlist_state_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });



var PlayerComponent = (function () {
    function PlayerComponent(playlistState) {
        this.playlistState = playlistState;
    }
    PlayerComponent.prototype.onStateChange = function (event) {
        if (event.data === 0) {
            this.nextVideo();
        }
    };
    PlayerComponent.prototype.savePlayer = function (player) {
        this.playlistState.player = player;
        player.playVideo();
    };
    PlayerComponent.prototype.nextVideo = function () {
        if (this.playlistState.activeVideoPosition + 1 === this.playlistState.playListSize) {
            this.playlistState.activeVideoPosition = 0;
        }
        else {
            this.playlistState.activeVideoPosition = this.playlistState.activeVideoPosition + 1;
        }
        console.log(this.playlistState.activeVideoPosition);
        this.playlistState.activeVideo = this.playlistState.playList[this.playlistState.activeVideoPosition];
        this.playlistState.player.loadVideoById(this.playlistState.playList[this.playlistState.activeVideoPosition]._id);
    };
    return PlayerComponent;
}());
PlayerComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'my-player',
        template: __webpack_require__(103),
        styles: [__webpack_require__(111)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_playlist_state_service__["a" /* PlaylistState */]])
], PlayerComponent);



/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_playlist_state_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistComponent; });




var PlaylistComponent = (function () {
    function PlaylistComponent(playlistState, dataservice) {
        this.playlistState = playlistState;
        this.dataservice = dataservice;
        this.playlistState.playList = [];
        this.getPlaylist();
    }
    PlaylistComponent.prototype.getPlaylist = function () {
        var _this = this;
        this.dataservice.getPlaylist().subscribe(function (data) {
            console.log(data);
            _this.playlistState.playList = data;
            _this.playlistState.playListSize = data.length;
            if (_this.playlistState.playList.length > 0) {
                _this.playlistState.activeVideo = _this.playlistState.playList[0];
                _this.playlistState.activeVideoPosition = 0;
            }
            _this.playlistState.playListFilled.next();
        }, function (error) { console.log(error); });
    };
    return PlaylistComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('playlistplayer'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
], PlaylistComponent.prototype, "playlistplayer", void 0);
PlaylistComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'my-playlist',
        template: __webpack_require__(104),
        styles: [__webpack_require__(112)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_playlist_state_service__["a" /* PlaylistState */], __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]])
], PlaylistComponent);



/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_playlist_model__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_playlist_state_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistItemComponent; });





// import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from 'ng-semantic';
var PlaylistItemComponent = (function () {
    function PlaylistItemComponent(playlistState, dataService) {
        this.playlistState = playlistState;
        this.dataService = dataService;
    }
    // calls the methods for deleting the playlistitem and associated ratings
    PlaylistItemComponent.prototype.deleteFromPlaylist = function () {
        this.deletePlaylistItem(this.playlistitem._id);
        this.deleteRatings(this.playlistitem._id);
    };
    // delete the playlistitem by id
    PlaylistItemComponent.prototype.deletePlaylistItem = function (id) {
        var _this = this;
        this.dataService.deletePlaylistItem(id).subscribe(function (res) {
            _this.playlistState.playList.splice(_this.index, 1);
            //                console.log(this.index);
            //                console.log(this.playlistitem);
            //                console.log('playlistitem succesfully deleted from database.', 'success');
        }, function (error) { console.log(error); });
    };
    // delete all ratings with the given playlistitemid
    PlaylistItemComponent.prototype.deleteRatings = function (id) {
        this.dataService.deleteRatings(id).subscribe(function (res) {
            console.log('ratings succesfully deleted from database.', 'success');
        }, function (error) { console.log(error); });
    };
    // set the selected video as active
    PlaylistItemComponent.prototype.selectVideo = function () {
        if (this.playlistState.activeVideo._id === this.playlistitem._id) {
            return;
        }
        this.playlistState.activeVideo = this.playlistitem;
        this.playlistState.activeVideoPosition = this.index;
        this.playlistState.player.loadVideoById(this.playlistitem._id);
    };
    return PlaylistItemComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_2__models_playlist_model__["a" /* Playlist */])
], PlaylistItemComponent.prototype, "playlistitem", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Number)
], PlaylistItemComponent.prototype, "index", void 0);
PlaylistItemComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'my-playlistitem',
        template: __webpack_require__(105),
        styles: [__webpack_require__(113)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_playlist_state_service__["a" /* PlaylistState */], __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]])
], PlaylistItemComponent);



/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_semantic__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_semantic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_semantic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });








var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5_ng_semantic__["NgSemanticModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */]
        ]
    })
], CoreModule);



/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });


var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'my-footer',
        template: __webpack_require__(106),
        styles: [__webpack_require__(114)]
    })
], FooterComponent);



/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });


var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    return HeaderComponent;
}());
HeaderComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'my-header',
        template: __webpack_require__(107),
        styles: [__webpack_require__(115)]
    })
], HeaderComponent);



/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_semantic__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_semantic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_semantic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__playlistpage_playlistpage_module__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_routing_module__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__no_content_no_content_component__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });









var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5_ng_semantic__["NgSemanticModule"],
            __WEBPACK_IMPORTED_MODULE_6__playlistpage_playlistpage_module__["a" /* PlaylistPageModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_7__pages_routing_module__["a" /* PagesRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__no_content_no_content_component__["a" /* NoContentComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"]
        ]
    })
], PagesModule);



/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__no_content_no_content_component__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playlistpage_playlistpage_component__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutes; });



var pagesRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__playlistpage_playlistpage_component__["a" /* PlaylistPageComponent */] },
    { path: 'playlist', component: __WEBPACK_IMPORTED_MODULE_2__playlistpage_playlistpage_component__["a" /* PlaylistPageComponent */] },
    //  {path: '/toplist', component: AboutComponent },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__no_content_no_content_component__["a" /* NoContentComponent */] }
];
var PagesRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(pagesRoutes);


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_routes__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutingModule; });




var PagesRoutingModule = (function () {
    function PagesRoutingModule() {
    }
    return PagesRoutingModule;
}());
PagesRoutingModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__pages_routes__["a" /* PagesRoutes */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
        ]
    })
], PagesRoutingModule);



/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__playlistpage_component__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_playlist_playlist_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_playlistitem_playlistitem_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_player_player_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_activevideoinfo_activevideoinfo_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_playlist_state_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_youtube_safe_url_pipe__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_data_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_youtube_player__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_youtube_player___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_youtube_player__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistPageModule; });












// import { PipesModule } from '../../pipes';
var PlaylistPageModule = (function () {
    function PlaylistPageModule() {
    }
    return PlaylistPageModule;
}());
PlaylistPageModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_11_ng2_youtube_player__["YoutubePlayerModule"]],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_playlist_state_service__["a" /* PlaylistState */], __WEBPACK_IMPORTED_MODULE_10__services_data_service__["a" /* DataService */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__components_playlistitem_playlistitem_component__["a" /* PlaylistItemComponent */], __WEBPACK_IMPORTED_MODULE_3__playlistpage_component__["a" /* PlaylistPageComponent */], __WEBPACK_IMPORTED_MODULE_9__pipes_youtube_safe_url_pipe__["a" /* YoutubeSafeUrlPipe */],
            __WEBPACK_IMPORTED_MODULE_4__components_playlist_playlist_component__["a" /* PlaylistComponent */], __WEBPACK_IMPORTED_MODULE_6__components_player_player_component__["a" /* PlayerComponent */], __WEBPACK_IMPORTED_MODULE_7__components_activevideoinfo_activevideoinfo_component__["a" /* ActiveVideoInfoComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__playlistpage_component__["a" /* PlaylistPageComponent */]]
    })
], PlaylistPageModule);



/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistState; });



var PlaylistState = (function () {
    function PlaylistState() {
        this.playListFilled = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.playList = [];
    }
    return PlaylistState;
}());
PlaylistState = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], PlaylistState);



/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeSafeUrlPipe; });



var YoutubeSafeUrlPipe = (function () {
    function YoutubeSafeUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    YoutubeSafeUrlPipe.prototype.transform = function (videoId) {
        return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + videoId + "?autoplay=1");
    };
    return YoutubeSafeUrlPipe;
}());
YoutubeSafeUrlPipe = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: 'youtubeSafeUrl'
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]])
], YoutubeSafeUrlPipe);



/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "body {\r\n  padding: 50px;\r\n  font: 14px \"Lucida Grande\", Helvetica, Arial, sans-serif;\r\n}\r\n\r\n.wrapper, main {\r\n    height:100%;\r\n    background-color: #363636;\r\n}\r\n\r\n.wrapper {\r\n    margin-top: 69px;\r\n}\r\n\r\nmain {\r\n    margin-bottom: 50px;\r\n}\r\n\r\n@media (max-width: 700px){\r\n    main {\r\n        height: auto;\r\n        margin:0;\r\n    }\r\n    .my-footer {\r\n        display: none;\r\n    }\r\n}\r\n/*# sourceMappingURL=app.component.css.map */", ""]);

// exports


/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".infobar {\r\n    padding: 7px;\r\n    background-color: black;\r\n    border-right: 2px solid #555555;\r\n    border-left: 5px solid #555555;\r\n    border-radius: 0 0 0 5px;\r\n}\r\n\r\n.header { \r\n    font-size: 1.1em;\r\n    font-weight: bold;\r\n    color: white;\r\n}\r\n.description {\r\n    font-size: 0.9em;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    color : #d2d2d2;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n    .infobar {\r\n        border-right-width: 5px;\r\n        border-radius: 0 0 0 0;\r\n    }\r\n\r\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".playercontainer {\r\n    height:100%;\r\n    width: 100%;\r\n    border-right: 2px solid #555555;\r\n    border-left: 5px solid #555555;\r\n    border-radius: 5px 0 0 0;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n    .playercontainer {\r\n        border: none;\r\n        height: 300px;\r\n    }\r\n\r\n}", ""]);

// exports


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".ui.relaxed.divided.list {\r\n    margin: 0;\r\n    background-color: black;\r\n    border-right: 5px solid #555555;\r\n    border-radius: 0 5px 5px 0;\r\n    overflow: scroll;\r\n}\r\n\r\n.ui.relaxed.list:not(.horizontal)>.item {\r\n    padding: 0;\r\n}\r\n.title{\r\n    height:50px;\r\n    min-width: 250px;\r\n    background: white;\r\n    color:black;\r\n    font-weight: bold;\r\n    font-size: 1.3em;\r\n    text-align: center;\r\n    margin: 0;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n    .ui.relaxed.divided.list {\r\n        border-left: 5px solid #555555;\r\n        border-bottom: 5px solid #555555;\r\n        border-radius: 0 0 5px 5px;\r\n        height: 100vh;\r\n    }\r\n}\r\n\r\n@media (min-width: 700px) {\r\n    .ui.relaxed.divided.list {\r\n        height: 600px;\r\n    }\r\n}", ""]);

// exports


/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".playlistflexcontainer{\r\n    max-height: 62px;\r\n    display:flex;\r\n    justify-content: flex-start;\r\n    flex-direction: row;\r\n    padding: 6px 0 6px 6px;\r\n}\r\n\r\n.playlistflexcontainer:hover {\r\n    border-top: 1px solid #555555;\r\n    cursor: pointer;\r\n    background-color: #555555;\r\n}\r\n.playlistflexcontainer.active {\r\n    cursor: default;\r\n    border-top: 1px solid #555555;\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n.playlistflexcontainer.active .infocontainer > .content > .header {\r\n    color: black;\r\n}\r\n\r\n.playlistflexcontainer.active .infocontainer > .content > .info > .description,\r\n.playlistflexcontainer.active .number {\r\n    color: #3a3a3a;\r\n}\r\n\r\n.infocontainer > .content > .header {\r\n    overflow: hidden;\r\n   text-overflow: ellipsis;\r\n   display: -webkit-box;\r\n    line-height:1.2em;\r\n    -webkit-line-clamp: 1;\r\n    -webkit-box-orient: vertical;\r\n    width:100%;\r\n    padding:2px;\r\n    max-height: 3em;\r\n    color: white;\r\n    font-size: 0.85em;\r\n}\r\n\r\n.infocontainer > .content > .info > .description {\r\n    color: #d2d2d2;\r\n    font-size: 0.80em;\r\n}\r\n/*\r\n.ui.divided.list>.item{\r\n    padding: 0 0 0 5px;\r\n    border-top: white 1px solid;\r\n}\r\n*/\r\n\r\n.number{\r\n    z-index: 1;\r\n    color: white;\r\n    align-self: center;\r\n    margin: 0 5px;\r\n    font-size: 0.85em;\r\n}\r\n\r\n/*\r\n\r\n@media (max-width: 400px) {\r\n\r\n}\r\n*/\r\n", ""]);

// exports


/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".footer {\r\n    overflow: hidden;\r\n\r\n    color: white;\r\n    background: #363636;\r\n}\r\n\r\n.footer-title {\r\n    margin-bottom: 1.875rem;\r\n}\r\n\r\n.footer-column {\r\n    margin-bottom: 1.875rem;\r\n}\r\n\r\n.footer-bottom {\r\n    position: relative;\r\n    height: 3rem;\r\n\r\n    padding: .5rem 0;\r\n\r\n    font-size: 0.75rem;\r\n    text-align: center;\r\n\r\n    color: lightgrey;\r\n    background: black;\r\n}\r\n\r\n.footer-copyright {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n\r\n    width: 100%;\r\n    padding: 0 5rem;\r\n\r\n    transform: translate(-50%, -50%);\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "\r\na {\r\n  color: #00B7FF;\r\n}\r\n.ui.menu .item>img:not(.ui) {\r\n    width: auto;\r\n    max-height: 50px;\r\n}\r\n\r\n.ui.menu .logo:before {\r\n    display: none;\r\n}", ""]);

// exports


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".ui.container {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    position: relative;\r\n    top: 10px;\r\n}\r\n\r\nmy-player {\r\n    width: 100%;\r\n    background-color: black;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nmy-playlist {}\r\n\r\n@media (max-width: 700px) {\r\n    .ui.container {\r\n        flex-direction: column;\r\n        height: 100%;\r\n        margin: 0!important;\r\n    }\r\n    my-player {\r\n        height: 300px;\r\n    }\r\n}", ""]);

// exports


/***/ })

},[260]);
//# sourceMappingURL=main.bundle.js.map