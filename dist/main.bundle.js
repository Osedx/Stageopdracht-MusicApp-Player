var ac_main =
webpackJsonpac__name_([1],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(2);

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(64);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = vendor_lib;

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(111);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistState; });



var PlaylistState = (function () {
    function PlaylistState() {
        this.playListFilled = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.playList = [];
        this.paused = false;
        this.shuffle = false;
        this.loop = false;
        this.playerCreated = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    return PlaylistState;
}());
PlaylistState = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], PlaylistState);



/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });




var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    DataService.prototype.getPlaylist = function () {
        return this.http.get('https://musicwebapp.herokuapp.com/api/playlist')
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getToplist = function () {
        return this.http.get('https://musicwebapp.herokuapp.com/api/toplist')
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getCountToplist = function () {
        return this.http.get('https://musicwebapp.herokuapp.com/api/toplist/count')
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.addPlaylistItem = function (playlistitem) {
        console.log(this.options);
        console.log(JSON.stringify(playlistitem));
        return this.http.post('https://musicwebapp.herokuapp.com/api/playlistitem', JSON.stringify(playlistitem), this.options);
    };
    return DataService;
}());
DataService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], DataService);



/***/ }),
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(443);

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(440);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(441);

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });



var MessageService = (function () {
    function MessageService() {
        this.updateList = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.host = 'https://musicwebapp.herokuapp.com';
    }
    return MessageService;
}());
MessageService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], MessageService);



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingService; });



var SettingService = (function () {
    function SettingService(config) {
        this.config = config;
        this.showToplistCount = config.showToplistCount;
        this.addFromToplist = config.addFromToplist;
        this.maxCheckAdding = config.maxCheckAdding;
    }
    return SettingService;
}());
SettingService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __param */](0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* APP_CONFIG */])),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [Object])
], SettingService);



/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppConfig; });

var APP_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('app.config');
var AppConfig = {
    showToplistCount: 5,
    addFromToplist: 10,
    maxCheckAdding: 10
};


/***/ }),
/* 29 */
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
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistPageComponent; });



var PlaylistPageComponent = (function () {
    function PlaylistPageComponent(messageService) {
        this.messageService = messageService;
        this.showUpdateMessage = false;
        this.refreshPlayList = false;
    }
    PlaylistPageComponent.prototype.refreshList = function () {
        this.messageService.showMessage = false;
        this.messageService.updateList.next();
    };
    return PlaylistPageComponent;
}());
PlaylistPageComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'my-playlistpage',
        template: __webpack_require__(158),
        styles: [__webpack_require__(172)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */]])
], PlaylistPageComponent);



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_playlistitem_playlistitem_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_player_player_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_activevideoinfo_activevideoinfo_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_youtube_player__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_youtube_player___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_youtube_player__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });







var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_6_ng2_youtube_player__["YoutubePlayerModule"]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__components_playlistitem_playlistitem_component__["a" /* PlaylistItemComponent */], __WEBPACK_IMPORTED_MODULE_4__components_player_player_component__["a" /* PlayerComponent */], __WEBPACK_IMPORTED_MODULE_5__components_activevideoinfo_activevideoinfo_component__["a" /* ActiveVideoInfoComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__components_playlistitem_playlistitem_component__["a" /* PlaylistItemComponent */], __WEBPACK_IMPORTED_MODULE_4__components_player_player_component__["a" /* PlayerComponent */], __WEBPACK_IMPORTED_MODULE_5__components_activevideoinfo_activevideoinfo_component__["a" /* ActiveVideoInfoComponent */]
        ]
    })
], SharedModule);



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToplistPageComponent; });


var ToplistPageComponent = (function () {
    function ToplistPageComponent() {
    }
    return ToplistPageComponent;
}());
ToplistPageComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'my-toplistpage',
        template: __webpack_require__(159),
        styles: [__webpack_require__(173)]
    })
], ToplistPageComponent);



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });



var SocketService = (function () {
    function SocketService() {
        this.host = 'https://musicwebapp.herokuapp.com';
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__["connect"](this.host);
    }
    return SocketService;
}());
SocketService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [])
], SocketService);



/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(143);

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(17);

/***/ }),
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_core_module__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pages_module__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_config__ = __webpack_require__(28);
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
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* APP_CONFIG */], useValue: __WEBPACK_IMPORTED_MODULE_8__app_config__["b" /* AppConfig */] }
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);



/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(74);
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
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(442);

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(444);

/***/ }),
/* 104 */,
/* 105 */,
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
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
        template: __webpack_require__(150),
        styles: [__webpack_require__(164)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"]])
], AppComponent);



/***/ }),
/* 107 */
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
        template: __webpack_require__(151),
        styles: [__webpack_require__(165)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_playlist_state_service__["a" /* PlaylistState */]])
], ActiveVideoInfoComponent);



/***/ }),
/* 108 */
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
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_playlist_state_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });


// import { myYoutubeSafeUrlPipe } from '../../pipes/youtube-safe-url.pipe';

var PlayerComponent = (function () {
    function PlayerComponent(playlistState) {
        this.playlistState = playlistState;
    }
    PlayerComponent.prototype.onStateChange = function (event) {
        if (event.data === 0) {
            if (this.playlistState.shuffle) {
                this.nextRandomVideo();
            }
            else if (this.playlistState.loop) {
                this.loopVideo();
            }
            else {
                this.nextVideo();
            }
        }
        else if (event.data === 2) {
            this.playlistState.paused = true;
        }
        else if (event.data === 1) {
            this.playlistState.paused = false;
        }
    };
    PlayerComponent.prototype.savePlayer = function (player) {
        this.playlistState.player = player;
        this.playlistState.playerCreated.next();
        player.playVideo();
    };
    PlayerComponent.prototype.nextVideo = function () {
        if (this.playlistState.activeVideoPosition + 1 ===
            this.playlistState.playListSize) {
            this.playlistState.activeVideoPosition = 0;
        }
        else {
            this.playlistState.activeVideoPosition =
                this.playlistState.activeVideoPosition + 1;
        }
        this.playlistState.activeVideo =
            this.playlistState.playList[this.playlistState.activeVideoPosition];
        this.playlistState.player.loadVideoById(this.playlistState.playList[this.playlistState.activeVideoPosition]._id);
    };
    PlayerComponent.prototype.nextRandomVideo = function () {
        var randomIndex = this.getRandomIndex();
        console.log(randomIndex);
        if (this.playlistState.activeVideoPosition === randomIndex) {
            return this.nextRandomVideo();
        }
        else {
            this.playlistState.activeVideoPosition = randomIndex;
            this.playlistState.activeVideo =
                this.playlistState.playList[this.playlistState.activeVideoPosition];
            this.playlistState.player.loadVideoById(this.playlistState.playList[this.playlistState.activeVideoPosition]._id);
        }
    };
    PlayerComponent.prototype.getRandomIndex = function () {
        var max = this.playlistState.playListSize;
        var randomIndex = Math.floor(Math.random() * (max));
        return randomIndex;
    };
    PlayerComponent.prototype.loopVideo = function () {
        this.playlistState.player.loadVideoById(this.playlistState.playList[this.playlistState.activeVideoPosition]._id);
    };
    return PlayerComponent;
}());
PlayerComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'my-player',
        template: __webpack_require__(152),
        styles: [__webpack_require__(166)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_playlist_state_service__["a" /* PlaylistState */]])
], PlayerComponent);



/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_playlist_state_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_socket_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_message_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistComponent; });







var PlaylistComponent = (function () {
    function PlaylistComponent(playlistState, dataservice, settingService, socketService, messageService) {
        this.playlistState = playlistState;
        this.dataservice = dataservice;
        this.settingService = settingService;
        this.socketService = socketService;
        this.messageService = messageService;
        this.checks = 0;
        this.toplist = [];
        this.messageService.showMessage = false;
        this.playlistState.playList = [];
        this.playlistState.activeVideo = undefined;
        this.playlistState.activeVideoPosition = 0;
        this.getPlaylist();
    }
    PlaylistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socketService.socket.on('playlistisupdated', function (userid) {
            _this.showUpdateMessage();
        });
        this.socketService.socket.on('itemdeleted', function (id) {
            _this.showUpdateMessage();
        });
    };
    PlaylistComponent.prototype.ngOnDestroy = function () {
        if (typeof this._subscription !== 'undefined') {
            this._subscription.unsubscribe();
        }
        if (typeof this._subscriptionPlayer !== 'undefined') {
            this._subscriptionPlayer.unsubscribe();
        }
    };
    PlaylistComponent.prototype.showUpdateMessage = function () {
        var _this = this;
        this.messageService.showMessage = true;
        this._subscription = this.messageService.updateList.subscribe(function () {
            _this.getPlaylist();
        });
    };
    PlaylistComponent.prototype.getPlaylist = function () {
        var _this = this;
        this.dataservice.getPlaylist().subscribe(function (data) {
            _this.playlistState.activeVideo = data[0];
            _this.playlistState.activeVideoPosition = 0;
            _this.playlistState.playList = data;
            _this.playlistState.playListSize = data.length;
            _this.checkEnoughSongs();
            _this.playlistState.playListFilled.next();
            _this._subscriptionPlayer = _this.playlistState.playerCreated.subscribe(function () {
                _this.playlistState.player.loadVideoById(_this.playlistState.playList[_this.playlistState.activeVideoPosition]._id);
            });
        }, function (error) { console.log(error); });
    };
    PlaylistComponent.prototype.shuffle = function () {
        this.playlistState.loop = false;
        this.playlistState.shuffle = !this.playlistState.shuffle;
    };
    PlaylistComponent.prototype.loop = function () {
        this.playlistState.shuffle = false;
        this.playlistState.loop = !this.playlistState.loop;
    };
    PlaylistComponent.prototype.nextVideo = function () {
        if (this.playlistState.activeVideoPosition + 1 ===
            this.playlistState.playListSize) {
            this.playlistState.activeVideoPosition = 0;
        }
        else {
            this.playlistState.activeVideoPosition =
                this.playlistState.activeVideoPosition + 1;
        }
        this.playlistState.activeVideo =
            this.playlistState.playList[this.playlistState.activeVideoPosition];
        this.playlistState.player.loadVideoById(this.playlistState.playList[this.playlistState.activeVideoPosition]._id);
    };
    PlaylistComponent.prototype.previousVideo = function () {
        if (this.playlistState.activeVideoPosition === 0) {
            this.playlistState.activeVideoPosition = this.playlistState.playListSize - 1;
        }
        else {
            this.playlistState.activeVideoPosition =
                this.playlistState.activeVideoPosition - 1;
        }
        this.playlistState.activeVideo =
            this.playlistState.playList[this.playlistState.activeVideoPosition];
        this.playlistState.player.loadVideoById(this.playlistState.playList[this.playlistState.activeVideoPosition]._id);
    };
    PlaylistComponent.prototype.changeState = function () {
        this.playlistState.paused = !this.playlistState.paused;
    };
    PlaylistComponent.prototype.pause = function () {
        this.playlistState.player.pauseVideo();
        this.playlistState.paused = true;
    };
    PlaylistComponent.prototype.play = function () {
        this.playlistState.player.playVideo();
        this.playlistState.paused = false;
    };
    PlaylistComponent.prototype.checkEnoughSongs = function () {
        this.lengthPlaylist = this.playlistState.playListSize;
        if (this.lengthPlaylist <= this.settingService.addFromToplist) {
            this.addFromToplist();
        }
    };
    PlaylistComponent.prototype.addFromToplist = function () {
        var _this = this;
        if (this.toplist.length === 0) {
            this.dataservice.getToplist().subscribe(function (data) {
                if (typeof (data !== 'undefined')) {
                    _this.toplist = data;
                    _this.addRandomToplistSong(_this.toplist);
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.addRandomToplistSong(this.toplist);
        }
    };
    PlaylistComponent.prototype.addRandomToplistSong = function (toplist) {
        var max = toplist.length;
        var randomIndex = Math.floor(Math.random() * (max));
        var notInPlaylist = true;
        for (var i = 0; i < this.playlistState.playListSize; i++) {
            if (toplist[randomIndex]._id ===
                this.playlistState.playList[i]._id) {
                notInPlaylist = false;
            }
        }
        if (notInPlaylist) {
            this.checks = 0;
            this.addToPlaylist(toplist[randomIndex]);
        }
        else {
            this.checks++;
            if (this.checks <= this.settingService.maxCheckAdding) {
                this.checkEnoughSongs();
            }
        }
    };
    PlaylistComponent.prototype.addToPlaylist = function (toplistitem) {
        var _this = this;
        this.dataservice.addPlaylistItem({ _id: toplistitem._id, title: toplistitem.title,
            thumbnailurl: toplistitem.thumbnailurl, channeltitle: toplistitem.channeltitle,
            channelid: toplistitem.channelid, description: toplistitem.description,
            uploader: 'Toplist', uploaderid: 'Toplistid', rating: 0
        }).subscribe(function (res) {
            var newPlaylistItem = res.json();
            _this.playlistState.playList[_this.lengthPlaylist] = newPlaylistItem;
            _this.playlistState.playListSize = _this.playlistState.playList.length;
            _this.checkEnoughSongs();
        }, function (error) {
            console.log('error: ' + error);
            _this.checkEnoughSongs();
        });
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
        template: __webpack_require__(153),
        styles: [__webpack_require__(167)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_playlist_state_service__["a" /* PlaylistState */], __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_4__services_settings_service__["a" /* SettingService */], __WEBPACK_IMPORTED_MODULE_5__services_socket_service__["a" /* SocketService */],
        __WEBPACK_IMPORTED_MODULE_6__services_message_service__["a" /* MessageService */]])
], PlaylistComponent);



/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_playlist_model__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_playlist_state_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistItemComponent; });





// import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from 'ng-semantic';
var PlaylistItemComponent = (function () {
    function PlaylistItemComponent(playlistState, dataService) {
        this.playlistState = playlistState;
        this.dataService = dataService;
    }
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
        template: __webpack_require__(154),
        styles: [__webpack_require__(168)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_playlist_state_service__["a" /* PlaylistState */], __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]])
], PlaylistItemComponent);



/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_playlist_state_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToplistComponent; });




var ToplistComponent = (function () {
    function ToplistComponent(playlistState, dataservice) {
        this.playlistState = playlistState;
        this.dataservice = dataservice;
        this.playlistState.playList = [];
        this.playlistState.activeVideo = undefined;
        this.playlistState.activeVideoPosition = 0;
        this.getToplist();
    }
    ToplistComponent.prototype.getToplist = function () {
        var _this = this;
        this.dataservice.getToplist().subscribe(function (data) {
            _this.playlistState.playList = data;
            _this.playlistState.playListSize = data.length;
            if (_this.playlistState.playList.length > 0) {
                _this.playlistState.activeVideo = _this.playlistState.playList[0];
                console.log(_this.playlistState.playList);
                _this.playlistState.activeVideoPosition = 0;
            }
            _this.playlistState.playListFilled.next();
        }, function (error) { console.log(error); });
    };
    ToplistComponent.prototype.shuffle = function () {
        this.playlistState.loop = false;
        this.playlistState.shuffle = !this.playlistState.shuffle;
    };
    ToplistComponent.prototype.loop = function () {
        this.playlistState.shuffle = false;
        this.playlistState.loop = !this.playlistState.loop;
    };
    ToplistComponent.prototype.nextVideo = function () {
        if (this.playlistState.activeVideoPosition + 1 ===
            this.playlistState.playListSize) {
            this.playlistState.activeVideoPosition = 0;
        }
        else {
            this.playlistState.activeVideoPosition =
                this.playlistState.activeVideoPosition + 1;
        }
        this.playlistState.activeVideo =
            this.playlistState.playList[this.playlistState.activeVideoPosition];
        this.playlistState.player.loadVideoById(this.playlistState.playList[this.playlistState.activeVideoPosition]._id);
    };
    ToplistComponent.prototype.previousVideo = function () {
        if (this.playlistState.activeVideoPosition === 0) {
            this.playlistState.activeVideoPosition = this.playlistState.playListSize - 1;
        }
        else {
            this.playlistState.activeVideoPosition =
                this.playlistState.activeVideoPosition - 1;
        }
        this.playlistState.activeVideo =
            this.playlistState.playList[this.playlistState.activeVideoPosition];
        this.playlistState.player.loadVideoById(this.playlistState.playList[this.playlistState.activeVideoPosition]._id);
    };
    ToplistComponent.prototype.changeState = function () {
        this.playlistState.paused = !this.playlistState.paused;
    };
    ToplistComponent.prototype.pause = function () {
        this.playlistState.player.pauseVideo();
        this.playlistState.paused = true;
    };
    ToplistComponent.prototype.play = function () {
        this.playlistState.player.playVideo();
        this.playlistState.paused = false;
    };
    return ToplistComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('playlistplayer'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
], ToplistComponent.prototype, "playlistplayer", void 0);
ToplistComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'my-toplist',
        template: __webpack_require__(155),
        styles: [__webpack_require__(169)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_playlist_state_service__["a" /* PlaylistState */], __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]])
], ToplistComponent);



/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_semantic__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_semantic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_semantic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_settings_service__ = __webpack_require__(21);
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
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_settings_service__["a" /* SettingService */], __WEBPACK_IMPORTED_MODULE_8__services_settings_service__["a" /* SettingService */]],
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
/* 114 */
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
        template: __webpack_require__(156),
        styles: [__webpack_require__(170)]
    })
], FooterComponent);



/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });




var HeaderComponent = (function () {
    function HeaderComponent(settingService, dataService) {
        this.settingService = settingService;
        this.dataService = dataService;
        this.showToplist = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.getCountToplist();
    };
    HeaderComponent.prototype.getCountToplist = function () {
        var _this = this;
        this.dataService.getCountToplist().subscribe(function (data) {
            if (data >= _this.settingService.showToplistCount) {
                _this.showToplist = true;
            }
        }, function (error) { console.log(error); });
    };
    return HeaderComponent;
}());
HeaderComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'my-header',
        template: __webpack_require__(157),
        styles: [__webpack_require__(171)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingService */], __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]])
], HeaderComponent);



/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_semantic__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_semantic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_semantic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__playlistpage_playlistpage_module__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toplistpage_toplistpage_module__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_routing_module__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__no_content_no_content_component__ = __webpack_require__(29);
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
            __WEBPACK_IMPORTED_MODULE_7__toplistpage_toplistpage_module__["a" /* ToplistPageModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_8__pages_routing_module__["a" /* PagesRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__no_content_no_content_component__["a" /* NoContentComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"]
        ]
    })
], PagesModule);



/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__no_content_no_content_component__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playlistpage_playlistpage_component__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toplistpage_toplistpage_component__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutes; });




var pagesRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__playlistpage_playlistpage_component__["a" /* PlaylistPageComponent */] },
    { path: 'toplist', component: __WEBPACK_IMPORTED_MODULE_3__toplistpage_toplistpage_component__["a" /* ToplistPageComponent */] },
    { path: 'playlist', component: __WEBPACK_IMPORTED_MODULE_2__playlistpage_playlistpage_component__["a" /* PlaylistPageComponent */] },
    //  {path: '/toplist', component: AboutComponent },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__no_content_no_content_component__["a" /* NoContentComponent */] }
];
var PagesRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(pagesRoutes);


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_routes__ = __webpack_require__(117);
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
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__playlistpage_component__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_playlist_playlist_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_playlist_state_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_data_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_socket_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_message_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistPageModule; });





// import { PlaylistItemComponent } from '../../components/playlistitem/playlistitem.component';
// import { PlayerComponent } from '../../components/player/player.component';
// import { ActiveVideoInfoComponent } from
// '../../components/activevideoinfo/activevideoinfo.component';

// import { myYoutubeSafeUrlPipe } from '../../pipes/youtube-safe-url.pipe';




var PlaylistPageModule = (function () {
    function PlaylistPageModule() {
    }
    return PlaylistPageModule;
}());
PlaylistPageModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_playlist_state_service__["a" /* PlaylistState */], __WEBPACK_IMPORTED_MODULE_6__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_7__services_socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_8__services_message_service__["a" /* MessageService */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__playlistpage_component__["a" /* PlaylistPageComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_playlist_playlist_component__["a" /* PlaylistComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__playlistpage_component__["a" /* PlaylistPageComponent */]]
    })
], PlaylistPageModule);



/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toplistpage_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_toplist_toplist_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_playlist_state_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_data_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToplistPageModule; });





// import { PlaylistItemComponent } from '../../components/playlistitem/playlistitem.component';
// import { PlayerComponent } from '../../components/player/player.component';
// import { ActiveVideoInfoComponent } from
// '../../components/activevideoinfo/activevideoinfo.component';

// import { myYoutubeSafeUrlPipe } from '../../pipes/youtube-safe-url.pipe';


var ToplistPageModule = (function () {
    function ToplistPageModule() {
    }
    return ToplistPageModule;
}());
ToplistPageModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_playlist_state_service__["a" /* PlaylistState */], __WEBPACK_IMPORTED_MODULE_6__services_data_service__["a" /* DataService */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__toplistpage_component__["a" /* ToplistPageComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_toplist_toplist_component__["a" /* ToplistComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__toplistpage_component__["a" /* ToplistPageComponent */]]
    })
], ToplistPageModule);



/***/ }),
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "body {\r\n  padding: 50px;\r\n  font: 14px \"Lucida Grande\", Helvetica, Arial, sans-serif;\r\n}\r\n\r\n.wrapper, main {\r\n    height:calc(100% - 68px);\r\n    background-color: #363636;\r\n}\r\n\r\n.wrapper {\r\n    position: relative;\r\n    top: 68px;\r\n}\r\n\r\nmain {\r\n    margin-bottom: 50px;\r\n}\r\n\r\n@media (max-width: 700px){\r\n    main {\r\n        height: auto;\r\n        margin:0;\r\n    }\r\n    .my-footer {\r\n        display: none;\r\n    }\r\n}\r\n/*# sourceMappingURL=app.component.css.map */", ""]);

// exports


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".infobar {\r\n    padding: 7px;\r\n    background-color: black;\r\n    border-right: 2px solid #555555;\r\n    border-left: 5px solid #555555;\r\n    border-radius: 0 0 0 5px;\r\n}\r\n\r\n.header { \r\n    font-size: 1.1em;\r\n    font-weight: bold;\r\n    color: white;\r\n}\r\n.description {\r\n    font-size: 0.9em;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    color : #d2d2d2;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n    .infobar {\r\n        border-right-width: 5px;\r\n        border-radius: 0 0 0 0;\r\n    }\r\n\r\n}\r\n\r\n", ""]);

// exports


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".playercontainer {\r\n    height:100%;\r\n    width: 100%;\r\n    border-right: 2px solid #555555;\r\n    border-left: 5px solid #555555;\r\n    border-radius: 5px 0 0 0;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n    .playercontainer {\r\n        border: none;\r\n    }\r\n\r\n}", ""]);

// exports


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".ui.relaxed.divided.list {\r\n    margin: 0;\r\n    background-color: black;\r\n    border-right: 5px solid #555555;\r\n    border-radius: 0 5px 5px 0;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.ui.relaxed.list:not(.horizontal)>.item {\r\n    padding: 0;\r\n}\r\n.title{\r\n    height: 85px;\r\n    min-width: 250px;\r\n    background: white;\r\n    color:black;\r\n    font-weight: bold;\r\n    font-size: 1.1em;\r\n    text-align: center;\r\n    margin: 0;\r\n}\r\n.title_name {\r\n    position: relative;\r\n    bottom: 10px;\r\n}\r\n.fa-refresh, .fa-random {\r\n    opacity: 0.4;\r\n    position: absolute;\r\n    top: 45px;\r\n}\r\n.fa-refresh:hover, .fa-random:hover {\r\n    cursor: pointer;\r\n}\r\n.fa-refresh:active, .fa-random:active {\r\n    opacity: 0.75;\r\n}\r\n.fa-refresh{\r\n    right: 15%;\r\n}\r\n.fa-random{\r\n    left: 15%;\r\n}\r\n.fa-play-circle-o, .fa-pause-circle-o {\r\n    position: relative;\r\n    bottom: 22px;\r\n    right: 0;\r\n    opacity: 0.85;\r\n}\r\n\r\n.fa-play-circle-o:hover, .fa-pause-circle-o:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.fa-play-circle-o:active, .fa-pause-circle-o:active {\r\n    opacity: 1;\r\n}\r\n\r\n.fa-caret-left, .fa-caret-right{\r\n    opacity: 0.75;\r\n    position: absolute;\r\n    top: 37px;\r\n}\r\n.fa-caret-left:active, .fa-caret-right:active {\r\n    opacity: 1;\r\n}\r\n.fa-caret-left:hover, .fa-caret-right:hover {\r\n    cursor:pointer;\r\n}\r\n.fa-caret-left{\r\n    left: 30%;\r\n}\r\n.fa-caret-right{\r\n    right: 30%;\r\n}\r\n.shuffle {\r\n    opacity: 1;\r\n}\r\n.loop {\r\n    opacity: 1;\r\n}\r\n::-webkit-scrollbar {\r\n    width: 0px;  /* remove scrollbar space */\r\n    background: transparent;  /* optional: just make scrollbar invisible */\r\n}\r\n/* optional: show position indicator in red */\r\n::-webkit-scrollbar-thumb {\r\n    background: #FF0000;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n    .ui.relaxed.divided.list {\r\n        border-left: 5px solid #555555;\r\n        border-radius: 0 0 5px 5px;\r\n        height: calc(60vh - 155px)\r\n    }\r\n}\r\n\r\n@media (min-width: 700px) {\r\n    .ui.relaxed.divided.list {\r\n        height: 600px;\r\n    }\r\n}", ""]);

// exports


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".playlistflexcontainer{\r\n    max-height: 62px;\r\n    display:flex;\r\n    justify-content: flex-start;\r\n    flex-direction: row;\r\n    padding: 6px 0 6px 6px;\r\n}\r\n\r\n.playlistflexcontainer:hover {\r\n    border-top: 1px solid #555555;\r\n    cursor: pointer;\r\n    background-color: #555555;\r\n}\r\n.playlistflexcontainer.active {\r\n    cursor: default;\r\n    border-top: 1px solid #555555;\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n.playlistflexcontainer.active .infocontainer > .content > .header {\r\n    color: black;\r\n}\r\n\r\n.playlistflexcontainer.active .infocontainer > .content > .info > .description,\r\n.playlistflexcontainer.active .number {\r\n    color: #3a3a3a;\r\n}\r\n\r\n.infocontainer > .content > .header {\r\n    overflow: hidden;\r\n   text-overflow: ellipsis;\r\n   display: -webkit-box;\r\n    line-height:1.2em;\r\n    -webkit-line-clamp: 1;\r\n    -webkit-box-orient: vertical;\r\n    width:100%;\r\n    padding:2px;\r\n    max-height: 3em;\r\n    color: white;\r\n    font-size: 0.85em;\r\n}\r\n\r\n.infocontainer > .content > .info > .description {\r\n    color: #d2d2d2;\r\n    font-size: 0.80em;\r\n}\r\n/*\r\n.ui.divided.list>.item{\r\n    padding: 0 0 0 5px;\r\n    border-top: white 1px solid;\r\n}\r\n*/\r\n\r\n.number{\r\n    z-index: 1;\r\n    color: white;\r\n    align-self: center;\r\n    margin: 0 5px;\r\n    font-size: 0.85em;\r\n}\r\n\r\n/*\r\n\r\n@media (max-width: 400px) {\r\n\r\n}\r\n*/\r\n", ""]);

// exports


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".ui.relaxed.divided.list {\r\n    margin: 0;\r\n    background-color: black;\r\n    border-right: 5px solid #555555;\r\n    border-radius: 0 5px 5px 0;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.ui.relaxed.list:not(.horizontal)>.item {\r\n    padding: 0;\r\n}\r\n.title{\r\n    height:85px;\r\n    min-width: 250px;\r\n    background: white;\r\n    color:black;\r\n    font-weight: bold;\r\n    font-size: 1.1em;\r\n    text-align: center;\r\n    margin: 0;\r\n}\r\n.title_name {\r\n    position: relative;\r\n    bottom: 10px;\r\n}\r\n.fa-refresh, .fa-random {\r\n    opacity: 0.4;\r\n    position: absolute;\r\n    top: 45px;\r\n}\r\n.fa-refresh:hover, .fa-random:hover {\r\n    cursor: pointer;\r\n}\r\n.fa-refresh:active, .fa-random:active {\r\n    opacity: 0.75;\r\n}\r\n.fa-refresh{\r\n    right: 15%;\r\n}\r\n.fa-random{\r\n    left: 15%;\r\n}\r\n.fa-play-circle-o, .fa-pause-circle-o {\r\n    position: relative;\r\n    bottom: 22px;\r\n    right: 0;\r\n    opacity: 0.85;\r\n}\r\n\r\n.fa-play-circle-o:hover, .fa-pause-circle-o:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.fa-play-circle-o:active, .fa-pause-circle-o:active {\r\n    opacity: 1;\r\n}\r\n\r\n.fa-caret-left, .fa-caret-right{\r\n    opacity: 0.75;\r\n    position: absolute;\r\n    top: 37px;\r\n}\r\n.fa-caret-left:active, .fa-caret-right:active {\r\n    opacity: 1;\r\n}\r\n.fa-caret-left:hover, .fa-caret-right:hover {\r\n    cursor:pointer;\r\n}\r\n.fa-caret-left{\r\n    left: 30%;\r\n}\r\n.fa-caret-right{\r\n    right: 30%;\r\n}\r\n.shuffle {\r\n    opacity: 1;\r\n}\r\n.loop {\r\n    opacity: 1;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 0px;  /* remove scrollbar space */\r\n    background: transparent;  /* optional: just make scrollbar invisible */\r\n}\r\n/* optional: show position indicator in red */\r\n::-webkit-scrollbar-thumb {\r\n    background: #FF0000;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n    .ui.relaxed.divided.list {\r\n        border-left: 5px solid #555555;\r\n        border-radius: 0 0 5px 5px;\r\n        height: calc(60vh - 155px)\r\n    }\r\n}\r\n\r\n@media (min-width: 700px) {\r\n    .ui.relaxed.divided.list {\r\n        height: 600px;\r\n    }\r\n}", ""]);

// exports


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".footer {\r\n    overflow: hidden;\r\n\r\n    color: white;\r\n    background: #363636;\r\n}\r\n\r\n.footer-title {\r\n    margin-bottom: 1.875rem;\r\n}\r\n\r\n.footer-column {\r\n    margin-bottom: 1.875rem;\r\n}\r\n\r\n.footer-bottom {\r\n    position: relative;\r\n    height: 3rem;\r\n\r\n    padding: .5rem 0;\r\n\r\n    font-size: 0.75rem;\r\n    text-align: center;\r\n\r\n    color: lightgrey;\r\n    background: black;\r\n\r\n    margin-top: 100px;\r\n}\r\n\r\n.footer-copyright {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n\r\n    width: 100%;\r\n    padding: 0 5rem;\r\n\r\n    transform: translate(-50%, -50%);\r\n}\r\n", ""]);

// exports


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "\r\na {\r\n  color: #00B7FF;\r\n}\r\n.ui.menu .item>img:not(.ui) {\r\n    width: auto;\r\n    max-height: 50px;\r\n}\r\n\r\n.ui.menu .logo:before {\r\n    display: none;\r\n}", ""]);

// exports


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".ui.container {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    position: relative;\r\n}\r\n\r\nmy-player {\r\n    width: 100%;\r\n    background-color: black;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.ui.message {\r\n    width: 100%;\r\n}\r\n\r\n.ui.message p:first-child {\r\n    display: inline;\r\n    padding-right: 5%;\r\n}\r\n.fa-refresh {\r\n    opacity: 0.4;\r\n    display: inline;\r\n    color:black;\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 10px;\r\n}\r\n.fa-refresh {\r\n    display: inline;\r\n    color:black;\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 10px;\r\n}\r\n\r\n.fa-refresh:hover{\r\n    opacity: 0.65;\r\n    cursor: pointer;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n    .ui.container {\r\n        flex-direction: column;\r\n        height: 100%;\r\n        margin: 0!important;\r\n    }\r\n    my-player {\r\n        height: 40vh;\r\n    }\r\n}", ""]);

// exports


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".ui.container {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    position: relative;\r\n}\r\n\r\nmy-player {\r\n    width: 100%;\r\n    background-color: black;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n    .ui.container {\r\n        flex-direction: column;\r\n        height: 100%;\r\n        margin: 0!important;\r\n    }\r\n    my-player {\r\n        height: 40vh;\r\n    }\r\n}", ""]);

// exports


/***/ }),
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */
/***/ (function(module, exports) {

module.exports = "<div class='wrapper'>\r\n    <my-header class='my-header'></my-header>\r\n    <main [class.overlay]='isOverlayEnabled'>\r\n\r\n        <!-- Loader -->\r\n        <div *ngIf='isRouterChanging' class='margin-top-lg text-center'>\r\n            <div class='loader-lg'></div>\r\n            <p class='margin-top text-muted' translate>Pagina laden</p>\r\n        </div>\r\n\r\n        <router-outlet></router-outlet>\r\n\r\n    </main>\r\n    <my-footer class='my-footer'></my-footer>\r\n</div>"

/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = "    <div class=\"infobar\" *ngIf=\"playlistState.activeVideo\">\r\n            <div class=\"header\">\r\n              {{playlistState.activeVideo.title}}\r\n            </div>\r\n            <div  class=\"description\" >\r\n            <div>Added by {{playlistState.activeVideo.uploader}}</div>\r\n            <div *ngIf=\"playlistState.activeVideo.rating\">{{playlistState.activeVideo.rating}} likes</div>\r\n            </div>\r\n    </div>"

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = "<!--\r\n<iframe #playlistplayer \r\n        id=\"playlistplayer\"\r\n        *ngIf=\"playlistState.activeVideo\"\r\n        frameborder=\"0\"\r\n        allowfullscreen allowscriptaccess=\"always\"\r\n        [src]=\"playlistState.activeVideo?._id +'?enablejsapi=1&version=3&playerapiid=ytplayer&loop=1&autoplay=1&playlist='+videoList | youtubeSafeUrl\">\r\n</iframe>\r\n-->\r\n<div class=\"playercontainer\">\r\n    <youtube-player\r\n          *ngIf=\"playlistState.activeVideo\"\r\n          width=\"100%\"\r\n          height=\"100%\"\r\n          [videoId]=\"playlistState.activeVideo?._id\"\r\n          (ready)=\"savePlayer($event)\"\r\n          (change)=\"onStateChange($event)\">\r\n    </youtube-player>\r\n</div>\r\n<my-activevideoinfo></my-activevideoinfo>\r\n"

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = "<div class='title ui raised segment toplist_title'>\r\n<p class=\"title_name\">Playlist</p>\r\n<i class='fa fa-random' aria-hidden='true' [ngClass]='{\"shuffle\": playlistState.shuffle}' (click)='shuffle()'></i>\r\n<i class=\"fa fa-caret-left fa-2x\" aria-hidden=\"true\" (click)=\"previousVideo()\"></i>\r\n<i class=\"fa fa-play-circle-o fa-3x\" aria-hidden=\"true\" *ngIf=\"playlistState.paused\" (click)=\"play()\"></i>\r\n<i class=\"fa fa-pause-circle-o fa-3x\" aria-hidden=\"true\" *ngIf=\"!playlistState.paused\" (click)=\"pause()\"></i>\r\n<i class=\"fa fa-caret-right fa-2x\" aria-hidden=\"true\" (click)=\"nextVideo()\"></i>\r\n<i class='fa fa-refresh' aria-hidden='true' [ngClass]='{\"loop\": playlistState.loop}' (click)='loop()'></i>\r\n</div>\r\n <div class=\"ui relaxed divided list\">\r\n  <div class=\"item\" *ngFor=\"let p of playlistState.playList; let i = index\" [class.playing] = \"p === playlistState.activeVideo\">\r\n      <my-playlistitem [playlistitem]=\"p\" [index]=\"i\"></my-playlistitem>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports = "<div class=\"playlistflexcontainer\" (click)=\"selectVideo()\" [ngClass]=\"{'active': playlistitem?._id === this.playlistState.activeVideo?._id}\">\r\n    <div class=\"number\">{{index +1}}</div>\r\n    <img class=\"ui tiny left floated image playlistimage\" src=\"{{playlistitem.thumbnailurl}}\">\r\n    <div class=\"infocontainer\">\r\n    <div class=\"content\">\r\n        <div class=\"header\">\r\n          {{playlistitem.title}}\r\n        </div>\r\n        <div class=\"info\">\r\n        <div  class=\"description\" *ngIf=\"playlistitem.uploader && playlistitem.uploader !== 'Toplist'\">\r\n          Added by {{playlistitem.uploader}}\r\n        </div>\r\n        <div  class=\"description\" *ngIf=\"!playlistitem.uploader\">\r\n          Added by Anonymous\r\n        </div>\r\n        <div  class=\"description\" *ngIf=\"playlistitem.uploader && playlistitem.uploader === 'Toplist'\">\r\n          Added from {{playlistitem.uploader}}\r\n        </div>\r\n        </div>\r\n        <div class=\"right floated content\">\r\n</div>\r\n    </div>\r\n    </div>\r\n</div>"

/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports = "<div class='title ui raised segment toplist_title'>\r\n<p class=\"title_name\">Toplist</p>\r\n<i class='fa fa-random' aria-hidden='true' [ngClass]='{\"shuffle\": playlistState.shuffle}' (click)='shuffle()'></i>\r\n<i class=\"fa fa-caret-left fa-2x\" aria-hidden=\"true\" (click)=\"previousVideo()\"></i>\r\n<i class=\"fa fa-play-circle-o fa-3x\" aria-hidden=\"true\" *ngIf=\"playlistState.paused\" (click)=\"play()\"></i>\r\n<i class=\"fa fa-pause-circle-o fa-3x\" aria-hidden=\"true\" *ngIf=\"!playlistState.paused\" (click)=\"pause()\"></i>\r\n<i class=\"fa fa-caret-right fa-2x\" aria-hidden=\"true\" (click)=\"nextVideo()\"></i>\r\n<i class='fa fa-refresh' aria-hidden='true' [ngClass]='{\"loop\": playlistState.loop}' (click)='loop()'></i>\r\n</div>\r\n <div class=\"ui relaxed divided list\">\r\n  <div class=\"item\" *ngFor=\"let p of playlistState.playList; let i = index\" [class.playing] = \"p === playlistState.activeVideo\">\r\n      <my-playlistitem [playlistitem]=\"p\" [index]=\"i\"></my-playlistitem>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports = "<footer class='footer'>\r\n\r\n    <!-- Disclaimer -->\r\n    <div class='footer-bottom col-xs-12'>\r\n        <span class='footer-copyright'>Music app District01 © 2017</span>\r\n    </div>\r\n</footer>"

/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports = "<div class='ui top fixed menu'>\r\n  <div class='item logo'>\r\n    <img src='../../assets/img/logo.png'>\r\n  </div>\r\n  <div class='right menu'>\r\n  <a class='item' [routerLinkActiveOptions]='{ exact: true }' [routerLinkActive]='[\"active\"]' [routerLink]='[\"/playlist\"]' *ngIf='showToplist'>Playlist</a>\r\n  <a class='item' [routerLinkActiveOptions]='{ exact: true }' [routerLinkActive]='[\"active\"]' [routerLink]='[\"/toplist\"]' *ngIf='showToplist'>Toplist</a>\r\n    </div>\r\n</div>\r\n"

/***/ }),
/* 158 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui message\" *ngIf=\"messageService.showMessage\">\r\n  <p>The playlist is no longer up to date.</p>\r\n  <i (click)=\"refreshList()\" class=\"fa fa-refresh fa-2x\" aria-hidden=\"true\"></i>\r\n</div>\r\n<div class=\"ui container\">\r\n<my-player></my-player>\r\n<my-playlist></my-playlist>\r\n</div>"

/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container\">\r\n<my-player></my-player>\r\n<my-toplist></my-toplist>\r\n</div>"

/***/ }),
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(126);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(127);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(128);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(129);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(130);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(131);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(132);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(133);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(134);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(135);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 174 */,
/* 175 */,
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(284);

/***/ }),
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(544);

/***/ }),
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(749);

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(795);

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(801);

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(819);

/***/ }),
/* 319 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 320 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_environment__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(82);
/* harmony export (immutable) */ __webpack_exports__["main"] = main;



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
// enableProdMode();
// needed for hmr
// in prod this is replace for document ready
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__["bootloader"])(main);


/***/ })
],[320]);
//# sourceMappingURL=main.bundle.js.map