(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.html":
/*!************************************************!*\
  !*** ./src/app/aboutus/aboutus.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"imprint\" class=\"bg-primary\">\r\n    <div class=\"container px-5 py-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <h1>About us</h1>\r\n            </div>\r\n            <div class=\"col-12 text-justify\">\r\n                <p>\r\n                    Im Jahre 2017 hat VerHext die Entwicklung von Support++ begonnen. Er hatte damals SinusBot benutzt und benötigte ein Support Skript, somit hat er\r\n                    sich mit der SinusBot Scripting Engine aus einander gesetzt und angefangen Support++ zu entwicklen. Zu dem Zeitpunkt gab es zwar schon eine\r\n                    ähnliches Skript welches aber nicht seinen Ansprüchen gerecht wurde.\r\n                </p>\r\n                <p>\r\n                    Nach schon kurzer Zeit hat sich Support++ sehr stark Verändert das die v2.x.x erschien. 2017 kam auch GamerBoomTV und Lapotor zu Support++, Lapotor hat die Ideen für\r\n                    z.B. das Channel Edit Modul, den Automatic Chanel Manager und die Themen Notification mitgebracht. Als kleine Überraschung hatte er den ersten\r\n                    Entwurf für die Internet Seite erstellt und betreut diese auch nach wie vor.\r\n                </p>\r\n                <p>Das Support++ Team ist nicht besonders groß, trotzdem haben wir es geschafft, ein Support Skript zu schreiben, was jeder Nutzer für seinen eigenen\r\n                    Gebrauch anpassen kann. Seit 2017 arbeiten wir bereits an diesem Projekt und haben mit der Zeit immer mehr Funktionen hinzugefügt.\r\n                    Wir versuchen unser Skript so oft wie möglich zu aktualisieren, was wir nur durch eure Ideen machen können. Sobald irgendwelche Fehler im Script\r\n                    auftreten werden diese so schnell wie möglich von uns behoben. Unser Ziel sind wöchentliche Updates, in denen wir Fehler beheben sowie neue\r\n                    Funktionen hinzufügen.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.scss":
/*!************************************************!*\
  !*** ./src/app/aboutus/aboutus.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#imprint {\n  color: white; }\n  #imprint a.imprint-link {\n    color: #E8E8FF;\n    opacity: .8; }\n  #right-footer {\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXR1cy9DOlxcVXNlcnNcXDQ5MTc2XFxEZXNrdG9wXFxjb2RlXFx3ZWJzaXRlL3NyY1xcYXBwXFxhYm91dHVzXFxhYm91dHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWSxFQUtiO0VBTkg7SUFHTSxlQUFjO0lBQ2QsWUFBVyxFQUNaO0VBRUg7RUFDRSxXQUFVLEVBQ1giLCJmaWxlIjoic3JjL2FwcC9hYm91dHVzL2Fib3V0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW1wcmludCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBhLmltcHJpbnQtbGlua3tcclxuICAgICAgY29sb3I6ICNFOEU4RkY7XHJcbiAgICAgIG9wYWNpdHk6IC44O1xyXG4gICAgfVxyXG4gIH1cclxuICAjcmlnaHQtZm9vdGVye1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.ts ***!
  \**********************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/aboutus/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.scss */ "./src/app/aboutus/aboutus.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'website';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _feature_feature_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feature/feature.component */ "./src/app/feature/feature.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _statistik_statistik_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./statistik/statistik.component */ "./src/app/statistik/statistik.component.ts");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./demo/demo.component */ "./src/app/demo/demo.component.ts");
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tutorial/tutorial.component */ "./src/app/tutorial/tutorial.component.ts");
/* harmony import */ var _versions_versions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./versions/versions.component */ "./src/app/versions/versions.component.ts");
/* harmony import */ var _nl2br_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nl2br.pipe */ "./src/app/nl2br.pipe.ts");
/* harmony import */ var _text2a_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./text2a.pipe */ "./src/app/text2a.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'feature', component: _feature_feature_component__WEBPACK_IMPORTED_MODULE_8__["FeatureComponent"] },
    { path: 'about', component: _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_9__["AboutusComponent"] },
    { path: 'statistik', component: _statistik_statistik_component__WEBPACK_IMPORTED_MODULE_11__["StatistikComponent"] },
    { path: 'demo', component: _demo_demo_component__WEBPACK_IMPORTED_MODULE_12__["DemoComponent"] },
    { path: 'tutorial', component: _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_13__["TutorialComponent"] },
    { path: 'download', component: _versions_versions_component__WEBPACK_IMPORTED_MODULE_14__["VersionsComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _feature_feature_component__WEBPACK_IMPORTED_MODULE_8__["FeatureComponent"],
                _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_9__["AboutusComponent"],
                _statistik_statistik_component__WEBPACK_IMPORTED_MODULE_11__["StatistikComponent"],
                _demo_demo_component__WEBPACK_IMPORTED_MODULE_12__["DemoComponent"],
                _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_13__["TutorialComponent"],
                _versions_versions_component__WEBPACK_IMPORTED_MODULE_14__["VersionsComponent"],
                _nl2br_pipe__WEBPACK_IMPORTED_MODULE_15__["Nl2brPipe"],
                _text2a_pipe__WEBPACK_IMPORTED_MODULE_16__["Text2aPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/demo/demo.component.html":
/*!******************************************!*\
  !*** ./src/app/demo/demo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section id=\"imprint\" class=\"bg-primary\">\n    <div class=\"container px-5 py-3\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <h1>Kostenlose Online-Demo ausprobieren!</h1>\n            </div>\n            <div class=\"col-12 text-justify\">\n                <form>\n                    <div class=\"form-group\">\n                      <label for=\"email\">Email address</label>\n                      <input type=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n                      <p id=\"emailHelp\" class=\"form-text text-white\">Wir richten Ihre persönliche Demo ein und senden Ihnen die Zugangsdaten an Ihre E-Mail-Adresse. Dies kann bis zu 15 Minuten dauern.</p>\n                    </div>\n                    <h3>Fragen zur DEMO</h3>\n                    <ul>\n                      <li><b>Können andere Nutzer auf meine Demo zugreifen?</b>\n                        <p>Wir richten Ihnen eine persönliche Demo ein, auf die zunächst nur Sie Zugriff haben. Gerne können Sie die Zugangsdaten aber an Freunde und Kollegen weitergeben, um diese am Test der Software zu beteiligen.</p>\n                      </li>\n                      <li><b>Wie lange ist die Demo erreichbar?</b>\n                      <p>Die Demo ist insgesamt für 4 Tage erreichbar. Wir behalten uns jedoch das Recht vor, diese ohne Angabe von Gründen jederzeit zu beenden.</p></li>\n                    </ul>\n                    <ul>\n                      <b>Welche technischen Einschränkungen hat die Demo?</b>\n                      <p>Die Demo ist voll funktionstüchtig. Jedoch sind einige Funktionen vom Sinusbot eingeschränkt, die nicht für die Demo von Support++ benötigt wird.</p>\n                    </ul>\n                    <ul>\n                        <b>Erhalte ich eine Beratung?</b>\n                        <p>Die Demo Instance ist mit Schritt für Schritt Videos ausgestattet, jedoch stehen wir auf Anfrage auch gerne für eine persönliche Beratung bereit. </p>\n                      </ul>\n                      <div class=\"g-recaptcha\" data-sitekey=\"6LdmNIQUAAAAAGTd8LoJz4M9Ug3h8m1bi-56cCPS\"></div>\n\n                    <button type=\"submit\" class=\"btn btn-primary\">Absenden</button>\n                  </form>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/demo/demo.component.scss":
/*!******************************************!*\
  !*** ./src/app/demo/demo.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#imprint {\n  color: white; }\n  #imprint a.imprint-link {\n    color: #E8E8FF;\n    opacity: .8; }\n  #right-footer {\n  opacity: 1; }\n  .white {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9DOlxcVXNlcnNcXDQ5MTc2XFxEZXNrdG9wXFxjb2RlXFx3ZWJzaXRlL3NyY1xcYXBwXFxkZW1vXFxkZW1vLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWSxFQUtiO0VBTkg7SUFHTSxlQUFjO0lBQ2QsWUFBVyxFQUNaO0VBRUg7RUFDRSxXQUFVLEVBQ1g7RUFFRDtFQUNFLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZGVtby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpbXByaW50IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGEuaW1wcmludC1saW5re1xyXG4gICAgICBjb2xvcjogI0U4RThGRjtcclxuICAgICAgb3BhY2l0eTogLjg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNyaWdodC1mb290ZXJ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgLndoaXRle1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/demo/demo.component.ts":
/*!****************************************!*\
  !*** ./src/app/demo/demo.component.ts ***!
  \****************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
    }
    DemoComponent.prototype.ngOnInit = function () {
    };
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo',
            template: __webpack_require__(/*! ./demo.component.html */ "./src/app/demo/demo.component.html"),
            styles: [__webpack_require__(/*! ./demo.component.scss */ "./src/app/demo/demo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/app/feature/feature.component.html":
/*!************************************************!*\
  !*** ./src/app/feature/feature.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"feautures\" class=\"bg-primary\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12 py-3 text-center text-light\">\r\n                <h1 class=\"raleway bold display-4\">Unsere Features</h1>\r\n            </div>\r\n            <div class=\"card col-lg-4 color-1 py-4\">\r\n                <i class=\"fas fa-coffee card-title mx-auto\"></i>\r\n                <h3 class=\"card-header text-center\">Kaffeepause&nbsp;<span class=\"badge badge-success\">New</span></h3>\r\n                <div class=\"card-body text-justify\">\r\n                    Jeder weiß das Supporter + <i class=\"fas fa-coffee\"></i> = gute Arbeit bedeutet. Um die Produktivität zu steigern haben wir auch\r\n                    für den Notfall eines Supporter, wenn der Kaffee aus ist, ein Funktion. Um neuen Kaffee holen zu können und zufälligerweise mit dem Kollegen noch\r\n                    zu quatschen kann man nun eine Kaffeepause mit dem Coffee Break Modul machen. Dazu muss man sich nur in die definierte Gruppe setzen.\r\n                </div>\r\n            </div>\r\n            <div class=\"card col-lg-4 color-2 py-4\">\r\n                <i class=\"fas fa-bell card-title mx-auto\"></i>\r\n                <h3 class=\"card-header text-center\">Supporter Notification</h3>\r\n                <div class=\"card-body text-justify\">\r\n                    Das System von <b>Support++</b> ermöglicht es auch, einer gewählten Supportergruppe einen oder mehrere Supporterchannel zuzuweisen. Dabei gibt es\r\n                    auch\r\n                    Funktionen, Supporter oder kleine Spielverderber auf eine Ignorelist zu setzen, damit Supporter nicht beim betreten von denjenigen benachrichtigt\r\n                    werden. Das besondere an unserem System ist, dass es auch möglich ist, die Benachrichtigungen auf weitere Plattformen wie Discord oder Telegram\r\n                    zu übertragen! Wir bieten auch eine Themen greifendes System, mit dem voreingestellte Fragen bereits vordefiniert werden können, damit sich ein\r\n                    Supporter bereits auf den Support einstellen kann.\r\n                </div>\r\n            </div>\r\n            <div class=\"card col-lg-4 color-3 py-4\">\r\n                <i class=\"far fa-clock card-title mx-auto\"></i>\r\n                <h3 class=\"card-header text-center\">Automatic Opening/Closing</h3>\r\n                <div class=\"card-body text-justify\">\r\n                    Das System von <b>Support++</b> bietet auch eine automatische Öffnungszeiten Funktion. Dabei kann der Benutzer selber die Öffnungszeiten\r\n                    verwalten und\r\n                    auch einstellen, ob und wie die Supportchannel bearbeitet werden sollen. Der Benutzer kann auch Commands zur Schließung der Supportchannel\r\n                    einstellen und ebenfalls festlegen, ob die Supporterchannel geöffnet sind, ob ein Supporter online, offline oder AFK ist. Ist das nicht toll? Wie\r\n                    in einem Supermarkt!\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 d-none d-lg-flex\" style=\"border-bottom: 2px solid #D1DAFF\"></div>\r\n            <div class=\"card col-lg-4 color-1 py-4\">\r\n                <i class=\"fas fa-user-times card-title mx-auto\"></i>\r\n                <h3 class=\"card-header text-center\">Servergroup Support Ban </h3>\r\n                <div class=\"card-body text-justify\">\r\n                    Grade bei größeren Servern kann es hilfreich sein Nutzergruppen vom Support auszuschließen oder auch nur von bestimmten Support bereichen. Genau\r\n                    deshalb haben wir eine Möglichkeit eingebaut für jeden Warteraum eigenständig Gruppen festzulegen welche Ignoriert werden. Natürlich werden die\r\n                    Support Gruppen die für den Channel selber zuständig sind von Haus aus Ignoriert.\r\n                </div>\r\n            </div>\r\n            <div class=\"card col-lg-4 color-2 py-4\">\r\n                <i class=\"fas fa-music card-title mx-auto\"></i>\r\n                <h3 class=\"card-header text-center\">Wartemusik</h3>\r\n                <div class=\"card-body text-justify\">\r\n                    Um die Wartezeit für die Wartenden so angenehm wie möglich zu gestalten stellen wir euch Wartemusik mit Ansagen zur Verfügung. Aber ihr könnt\r\n                    natürlich auch eigene Hochladen und Verwenden. Dabei entscheidet Support++ sogar zwischen Support Online und Offline.\r\n                </div>\r\n            </div>\r\n            <div class=\"card col-lg-4 color-3 py-4\">\r\n                <i class=\"far fa-list-alt card-title mx-auto\"></i>\r\n                <h3 class=\"card-header text-center\">Themen Bezogener Support</h3>\r\n                <div class=\"card-body text-justify\">\r\n                    Da wir aus Erfahrung wissen das nicht jeder Supporter auch zu allen Themen ausgebildet ist, haben wir einen <b>Themen Modul</b> fest eingebaut wo\r\n                    mit man Themen festlegen kann, wo durch dann der dafür zuständige Supporter benachrichtigt wird.\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 d-none d-lg-flex\" style=\"border-bottom: 2px solid #D1DAFF\"></div>\r\n            <div class=\"card col-lg-4 color-1 py-4\">\r\n                <i class=\"fas fa-comments card-title mx-auto\"></i>\r\n                <h3 class=\"card-header text-center\">Feedback System</h3>\r\n                <div class=\"card-body text-justify\">\r\n                    Um vorallem bei großen Servern wo man schnell die Support Qualität aus den Augen verlieren kann, ist eine Rückmeldung von Nutzern wichtig. Somit\r\n                    kann man Supporter zu mehr disziplin anhalten oder die Schwarzen Schafe des Supports finden kann. Beim Feedback System können die Nutzer 1-5 <i\r\n                        class=\"fas fa-star\"></i> für ein Supporter vergeben.\r\n                </div>\r\n            </div>\r\n            <div class=\"card col-lg-4 color-2 py-4\">\r\n                <i class=\"fas fa-ticket-alt card-title mx-auto\"></i>\r\n                <h3 class=\"card-header text-center\">Ticket System</h3>\r\n                <div class=\"card-body text-justify\">\r\n                    Das System von <b>Support++</b> bietet ein umfangreiches Ticketsystem. Dabei kann ein eigener <b>Command</b> festgelegt werden. Die Supporter\r\n                    werden bei einer\r\n                    Einsendung eines Tickets benachrichtigt und auch der Versender erhält eine Bestätigung für seine Versendung. Das Ticketsystem kann auf weitere\r\n                    Plattformen wie Discord und Telegram erweitert werden.\r\n                </div>\r\n            </div>\r\n            <div class=\"card col-lg-4 color-3 py-4\">\r\n                <i class=\"far fa-list-alt card-title mx-auto\"></i>\r\n                <h3 class=\"card-header text-center\">Discord Ticket Antwort <span class=\"badge badge-custom\">PRO</span></h3>\r\n                <div class=\"card-body text-justify\">\r\n                    Da grade für Leute die dass Supporten nicht Hauptberuflich machen auch die Zeit eine Rolle spielt, wissen wir das man nicht dauerhaft auf dem\r\n                    TeamSpeak Server sitzen kann. Hier für haben wir auch die Antwort auf Tickets über Discord ermöglicht, da aber das ganze über eine API die bei\r\n                    uns liegt läuft, können wir das nicht ganz ohne eure finanzielle Hilfe zur Verfügung stellen\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 d-none d-lg-flex mx-auto\" style=\"border-bottom: 2px solid #D1DAFF\"></div>\r\n            <div class=\"card col-lg-4 color-2 py-4 mx-auto\">\r\n                <i class=\"fas fa-lightbulb card-title mx-auto\"></i>\r\n                <h3 class=\"card-header text-center\">Du hast eine Idee<i class=\"fas fa-question\"></i></h3>\r\n                <div class=\"card-body text-justify\">\r\n                    Du hast was wo du Denkst das muss unbedingt in das Script mit rein? Dann erstelle jetzt einen Feature Request in unserem GitHub <i\r\n                        class=\"fab fa-github\"></i> Repository und wenn wir oder die Community das genauso super finden bauen wir es auch ein.\r\n                    <p class=\"text-center mt-2\">\r\n                        <a href=\"https://github.com/Support-pp/Support-pp/issues/new/choose\" class=\"btn btn-lg btn-outline-primary\">Erstelle Feature\r\n                            Request&nbsp;<span style=\"vertical-align: text-top; font-size: 0.5rem\"><i class=\"fas fa-external-link-alt\"></i></span></a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/feature/feature.component.scss":
/*!************************************************!*\
  !*** ./src/app/feature/feature.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:300,400,700|Raleway:300,400,700\");\n/*!\r\n * Copyright (c) 2018.\r\n * All Rights Reserved to magiCCoder.\r\n * This work is protected by copyright laws and international treaties.\r\n */\n/*===================================================\r\n *                    Variablen\r\n *===================================================*/\n/*===================================================\r\n  *                     Styling\r\n  *===================================================*/\n#feautures {\n  background-color: #5F75FF; }\n#feautures i.fas.card-title, #feautures i.far.card-title {\n    font-size: 7rem; }\n#feautures .card {\n    border: 0;\n    border-radius: 0; }\n#feautures .card .card-header {\n      background-color: rgba(0, 0, 0, 0.3); }\n#feautures .card .card-header .badge {\n        vertical-align: top;\n        font-size: 60%; }\n#feautures .card .card-header .badge-custom {\n        background-color: rgba(162, 74, 178, 0.85); }\n#feautures .card .card-header .badge-success {\n        background-color: rgba(0, 171, 108, 0.85); }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9DOlxcVXNlcnNcXDQ5MTc2XFxEZXNrdG9wXFxjb2RlXFx3ZWJzaXRlL3NyY1xcYXBwXFxmZWF0dXJlXFxmZWF0dXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFRQyxpR0FBWTtBQVJiOzs7O0dBSUc7QUFDSDs7dURBRXVEO0FBWXREOzt3REFFdUQ7QUFFbkQ7RUFDRSwwQkFiYyxFQXFDbkI7QUF6Qkc7SUFJTSxnQkFBZSxFQUNoQjtBQUxMO0lBUUksVUFBUztJQUNULGlCQUFnQixFQWNqQjtBQXZCSDtNQVdNLHFDQUFtQyxFQVdwQztBQXRCTDtRQWFRLG9CQUFtQjtRQUNuQixlQUFjLEVBQ2Y7QUFmUDtRQWlCUSwyQ0FBeUMsRUFDMUM7QUFsQlA7UUFvQlEsMENBQXdDLEVBQ3pDIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZS9mZWF0dXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXHJcbiAqIENvcHlyaWdodCAoYykgMjAxOC5cclxuICogQWxsIFJpZ2h0cyBSZXNlcnZlZCB0byBtYWdpQ0NvZGVyLlxyXG4gKiBUaGlzIHdvcmsgaXMgcHJvdGVjdGVkIGJ5IGNvcHlyaWdodCBsYXdzIGFuZCBpbnRlcm5hdGlvbmFsIHRyZWF0aWVzLlxyXG4gKi9cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICogICAgICAgICAgICAgICAgICAgIFZhcmlhYmxlblxyXG4gKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczozMDAsNDAwLDcwMHxSYWxld2F5OjMwMCw0MDAsNzAwJyk7XHJcblxyXG4gJGNfc3BwX2Rhcms6ICMwMDAwMDA7XHJcbiAkY19zcHBfYmx1ZTogIzVGNzVGRjtcclxuICRjX3NwcF93aGl0ZTogI0U4RThGRjtcclxuIFxyXG4gJGlfYnNfc206IDU3NnB4O1xyXG4gJGlfYnNfbWQ6IDc2OHB4O1xyXG4gJGlfYnNfbGc6IDk5MnB4O1xyXG4gJGlfYnNfeGw6IDEyMDBweDtcclxuIFxyXG4gLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAqICAgICAgICAgICAgICAgICAgICAgU3R5bGluZ1xyXG4gICo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuICAgICAjZmVhdXR1cmVzIHtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjX3NwcF9ibHVlO1xyXG4gICAgICAgaS5mYXMsIGkuZmFyIHtcclxuICAgICAgICAgJi5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICBmb250LXNpemU6IDdyZW07XHJcbiAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG4gICAgICAgICAgIC5iYWRnZSB7XHJcbiAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgICAgICAgZm9udC1zaXplOiA2MCU7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIC5iYWRnZS1jdXN0b20ge1xyXG4gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjIsIDc0LCAxNzgsIC44NSk7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIC5iYWRnZS1zdWNjZXNzIHtcclxuICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTcxLCAxMDgsIC44NSk7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgICB9XHJcbiBcclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/feature/feature.component.ts":
/*!**********************************************!*\
  !*** ./src/app/feature/feature.component.ts ***!
  \**********************************************/
/*! exports provided: FeatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureComponent", function() { return FeatureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeatureComponent = /** @class */ (function () {
    function FeatureComponent() {
    }
    FeatureComponent.prototype.ngOnInit = function () {
    };
    FeatureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feature',
            template: __webpack_require__(/*! ./feature.component.html */ "./src/app/feature/feature.component.html"),
            styles: [__webpack_require__(/*! ./feature.component.scss */ "./src/app/feature/feature.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FeatureComponent);
    return FeatureComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"container-fluid color-3 pb-2\">\r\n    <div class=\"row text-center\">\r\n        <div class=\"col-md-4 py-1\">\r\n            <i class=\"fas fa-angle-double-right\"></i>&nbsp;<a href=\"https://magiccoder.de/datenschutz.html\">Datenschutz</a>&nbsp;<i class=\"fas fa-angle-double-left\"></i>\r\n        </div>\r\n        <div class=\"col-md-4 py-1 \">\r\n            A <a href=\"https://magiccoder.de\">magiCCoder</a>\r\n            project!\r\n        </div>\r\n        <div class=\"col-md-4 py-1\">\r\n            <i class=\"fas fa-angle-double-right\"></i>&nbsp;<a href=\"https://magiccoder.de/impressum.html\">Impressum</a>&nbsp;<i class=\"fas fa-angle-double-left\"></i>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sinusbot infoBox fade-in-top\">\r\n    <a href=\"https://sinusbot.com\"><img src=\"https://s3-eu-west-1.amazonaws.com/spp-website/sinusbot-logo-s.png\" height=\"30px\"></a><b>Platz 5</b>. Unter den \"Top Downloads\" im <a\r\n        href=\"https://forum.sinusbot.com/resources/support.229/\">Sinusbot Forum</a>\r\n</div>\r\n\r\n<section id=\"header\">\r\n    <img src=\"https://s3-eu-west-1.amazonaws.com/spp-website/Support.png\">\r\n</section>\r\n<nav id=\"navbar-top\" class=\"navbar sticky-top navbar-expand-lg navbar-dark bg-dark\">\r\n    <a class=\"navbar-brand\" routerLink='/'><span class=\"fa-stack fa-1x\">\r\n<i class=\"fa fa-circle fa-stack-1x\"></i>\r\n<i class=\"fa fa-question-circle fa-stack-1x\"></i>\r\n</span>\r\n        Support++</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\"\r\n            aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" routerLink='/' >Home <span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n            <li class=\"nav-item \">\r\n                <a class=\"nav-link\" routerLink='/feature'>Features</a>\r\n            </li>\r\n            <li class=\"nav-item \">\r\n                <a class=\"nav-link\" href=\"https://pay.mgicc.de/support-pp.de.html\" target=\"_blank\">Go Pro</a>\r\n            </li>\r\n            <li class=\"nav-item \">\r\n                <a class=\"nav-link\" routerLink='/about'>About Us</a>\r\n            </li>\r\n            <li class=\"nav-item \">\r\n                    <a class=\"nav-link\" routerLink='/tutorial'>Tutorial</a>\r\n                </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"https://medium.com/support-pp\">Blog&nbsp;<i class=\"fab fa-medium-m\" style=\"color: #00ab6c\"></i></a>\r\n            </li>\r\n            <li class=\"nav-item \">\r\n                <a class=\"nav-link\" href=\"https://discord.gg/3acZCcu\" target=\"_blank\">Support <span style=\"vertical-align: center; font-size: 1rem; color: #7289da;\"><i\r\n                        class=\"fab fa-discord\"></i></span></a>\r\n            </li>\r\n            <li class=\"nav-item \">\r\n                <a class=\"nav-link\" href=\"https://status.support-pp.de/\">Status <span style=\"vertical-align: text-top; font-size: 0.5rem\"><i\r\n                        class=\"fas fa-external-link-alt\"></i></span></a>\r\n            </li>\r\n            <li class=\"nav-item dropdown\">\r\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    Download\r\n                </a>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                    <a class=\"dropdown-item\" href=\"https://github.com/Support-pp/Support-pp\" target=\"_blank\">Source\r\n                        Code <span style=\"vertical-align: text-top; font-size: 0.5rem\"><i class=\"fas fa-external-link-alt\"></i></span></a>\r\n                    <a class=\"dropdown-item\" href=\"https://github.com/Support-pp/Support-pp/releases/latest\" target=\"_blank\">Stable Release <span\r\n                            style=\"vertical-align: text-top; font-size: 0.5rem\"><i class=\"fas fa-external-link-alt\"></i></span></a>\r\n                    <div class=\"dropdown-divider my-1\"></div>\r\n                    <a class=\"dropdown-item\" href=\"https://sounds.support-pp.de/\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Disabled\">Sounds</a>\r\n                    <a class=\"dropdown-item\"  routerLink='/statistik' data-toggle=\"tooltip\" data-placement=\"right\" title=\"Disabled\">Statistik</a>\r\n                    <a class=\"dropdown-item\"  routerLink='/download' data-toggle=\"tooltip\" data-placement=\"right\" title=\"Disabled\">Version</a>\r\n                    <div class=\"dropdown-divider my-1\"></div>\r\n                    <h5 class=\"dropdown-header font-italic\">\r\n                        Latest version: <span id=\"version\">2.0.4.9</span>\r\n                    </h5>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:300,400,700|Raleway:300,400,700\");\n.infoBox {\n  background-color: #bc2a1a;\n  height: 40px;\n  color: white;\n  font-size: 16px;\n  text-align: center;\n  z-index: 1;\n  position: absolute;\n  width: 100%;\n  top: 0; }\n/*===================================================\r\n *                    Variablen\r\n *===================================================*/\n/*===================================================\r\n  *                    Keyframes\r\n  *===================================================*/\n/* ----------------------------------------------\r\n  * Generated by Animista on 2018-10-30 22:29:34\r\n  * w: http://animista.net, t: @cssanimista\r\n  * ---------------------------------------------- */\n@-webkit-keyframes fade-in-top {\n  0% {\n    -webkit-transform: translateY(-50px);\n    transform: translateY(-50px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1; } }\n@keyframes fade-in-top {\n  0% {\n    -webkit-transform: translateY(-50px);\n    transform: translateY(-50px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1; } }\n/*===================================================\r\n  *                     Styling\r\n  *===================================================*/\n.fade-in-top {\n  -webkit-animation: fade-in-top 1s cubic-bezier(0.39, 0.575, 0.565, 1) 50ms both;\n  animation: fade-in-top 1s cubic-bezier(0.39, 0.575, 0.565, 1) 50ms both; }\n.infoBox {\n  background-color: #BC2A1A;\n  height: 40px;\n  color: white;\n  font-size: 16px;\n  text-align: center;\n  z-index: 1;\n  position: absolute;\n  width: 100%;\n  top: 0; }\n.infoBox img {\n  margin-top: 5px;\n  margin-right: 8px; }\n.infoBox a {\n  color: wheat; }\n#feautures {\n  background-color: #5F75FF; }\n#feautures i.fas.card-title, #feautures i.far.card-title {\n    font-size: 7rem; }\n#feautures .card {\n    border: 0;\n    border-radius: 0; }\n#team .card {\n  border-radius: 0;\n  border: none; }\n@media (min-width: 992px) {\n  #team .border-left {\n    border-left: solid #181D40 1px; }\n  #team .border-right {\n    border-right: solid #181D40 1px; } }\n#team .card-header {\n  background-color: rgba(0, 0, 0, 0.3); }\n#team .card-subtitle {\n  background-color: rgba(0, 0, 0, 0.15); }\n#team .card-footer {\n  background-color: rgba(0, 0, 0, 0.05);\n  /* footer social icons */\n  /* footer social icons */ }\n#team .card-footer ul.social-network {\n    list-style: none;\n    display: inline;\n    margin-left: 0 !important;\n    padding: 0; }\n#team .card-footer ul.social-network li {\n    display: inline;\n    margin: 0 5px; }\n#team .card-footer .social-network a.icoWebsite:hover {\n    background-color: #4285F4; }\n#team .card-footer .social-network a.icoFacebook:hover {\n    background-color: #3b5998; }\n#team .card-footer .social-network a.icoInstagram:hover {\n    background-color: #c13584; }\n#team .card-footer .social-network a.icoTwitter:hover {\n    background-color: #33ccff; }\n#team .card-footer .social-network a.icoGitHub:hover {\n    background-color: #000000; }\n#team .card-footer .social-network a.icoWebsite:hover i, #team .card-footer .social-network a.icoFacebook:hover i, #team .card-footer .social-network a.icoTwitter:hover i, #team .card-footer .social-network a.icoInstagram:hover i, #team .card-footer .social-network a.icoGitHub:hover i {\n    color: #fff; }\n#team .card-footer a.socialIcon:hover, #team .card-footer .socialHoverClass {\n    color: #44BCDD; }\n#team .card-footer .social-circle li a {\n    display: inline-block;\n    position: relative;\n    margin: 0 auto 0 auto;\n    border-radius: 50%;\n    text-align: center;\n    width: 37.5px;\n    height: 37.5px;\n    font-size: 15px; }\n#team .card-footer .social-circle li i {\n    margin: 0;\n    line-height: 37.5px;\n    text-align: center; }\n#team .card-footer .social-circle li a:hover i, #team .card-footer .triggeredHover {\n    -moz-transform: rotate(360deg);\n    -webkit-transform: rotate(360deg);\n    -ms--transform: rotate(360deg);\n    transform: rotate(360deg);\n    transition: all 0.5s; }\n#team .card-footer .social-circle i {\n    color: #fff;\n    transition: all 0.8s; }\n#team .card-footer a {\n    background-color: #2F3A7F; }\n#h30 {\n  height: 30px !important; }\n.infoBox a {\n  color: wheat; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcNDkxNzZcXERlc2t0b3BcXGNvZGVcXHdlYnNpdGUvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNDLGlHQUFZO0FBZGI7RUFDSSwwQkFBeUI7RUFDekIsYUFBWTtFQUNaLGFBQVk7RUFDWixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxPQUFNLEVBQ1Q7QUFDRDs7dURBRXVEO0FBWXREOzt3REFFdUQ7QUFDdkQ7OztxREFHb0Q7QUFFcEQ7RUFDRTtJQUNFLHFDQUFvQztJQUNwQyw2QkFBNEI7SUFDNUIsV0FDRixFQUFBO0VBQ0E7SUFDRSxpQ0FBZ0M7SUFDaEMseUJBQXdCO0lBQ3hCLFdBQ0YsRUFBQSxFQUFBO0FBR0Y7RUFDRTtJQUNFLHFDQUFvQztJQUNwQyw2QkFBNEI7SUFDNUIsV0FDRixFQUFBO0VBQ0E7SUFDRSxpQ0FBZ0M7SUFDaEMseUJBQXdCO0lBQ3hCLFdBQ0YsRUFBQSxFQUFBO0FBR0Y7O3dEQUV1RDtBQUNuRDtFQUNFLGdGQUFnRjtFQUNoRix3RUFBd0UsRUFDekU7QUFDRDtFQUNFLDBCQUF5QjtFQUN6QixhQUFZO0VBQ1osYUFBWTtFQUNaLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLE9BQU0sRUFDUDtBQUNEO0VBQ0UsZ0JBQWU7RUFDZixrQkFBaUIsRUFDbEI7QUFFRDtFQUNFLGFBQVksRUFDYjtBQUNEO0VBQ0UsMEJBckVjLEVBK0VmO0FBWEQ7SUFJTSxnQkFBZSxFQUNoQjtBQUxMO0lBUUksVUFBUztJQUNULGlCQUFnQixFQUNqQjtBQUVIO0VBRUksaUJBQWdCO0VBQ2hCLGFBQVksRUFDYjtBQUVEO0VBTkY7SUFRTSwrQkFBOEIsRUFDL0I7RUFUTDtJQVlNLGdDQUErQixFQUNoQyxFQUFBO0FBYkw7RUFnQkkscUNBQW1DLEVBQ3BDO0FBakJIO0VBbUJJLHNDQUFvQyxFQUNyQztBQXBCSDtFQXNCSSxzQ0FBb0M7RUFDcEMseUJBQXlCO0VBWXpCLHlCQUF5QixFQWdFMUI7QUFuR0g7SUF5Qk0saUJBQWdCO0lBQ2hCLGdCQUFlO0lBQ2YsMEJBQXlCO0lBQ3pCLFdBQVUsRUFDWDtBQTdCTDtJQStCTSxnQkFBZTtJQUNmLGNBQWEsRUFDZDtBQWpDTDtJQXFDTSwwQkFBeUIsRUFDMUI7QUF0Q0w7SUF3Q00sMEJBQXlCLEVBQzFCO0FBekNMO0lBMkNNLDBCQUF5QixFQUMxQjtBQTVDTDtJQThDTSwwQkFBeUIsRUFDMUI7QUEvQ0w7SUFpRE0sMEJBQXlCLEVBQzFCO0FBbERMO0lBb0RNLFlBQVcsRUFDWjtBQXJETDtJQXVETSxlQUFjLEVBQ2Y7QUF4REw7SUEyRE0sc0JBQXFCO0lBQ3JCLG1CQUFrQjtJQUNsQixzQkFBcUI7SUFHckIsbUJBQWtCO0lBQ2xCLG1CQUFrQjtJQUNsQixjQUFhO0lBQ2IsZUFBYztJQUNkLGdCQUFlLEVBQ2hCO0FBckVMO0lBdUVNLFVBQVM7SUFDVCxvQkFBbUI7SUFDbkIsbUJBQWtCLEVBQ25CO0FBMUVMO0lBNkVNLCtCQUE4QjtJQUM5QixrQ0FBaUM7SUFDakMsK0JBQThCO0lBQzlCLDBCQUF5QjtJQUt6QixxQkFBb0IsRUFDckI7QUF0Rkw7SUF3Rk0sWUFBVztJQUtYLHFCQUFvQixFQUNyQjtBQTlGTDtJQWlHTSwwQkFBeUIsRUFDMUI7QUFJVDtFQUNJLHdCQUF1QixFQUMxQjtBQUNEO0VBQ0csYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvQm94IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYzJhMWE7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICogICAgICAgICAgICAgICAgICAgIFZhcmlhYmxlblxyXG4gKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczozMDAsNDAwLDcwMHxSYWxld2F5OjMwMCw0MDAsNzAwJyk7XHJcblxyXG4gJGNfc3BwX2Rhcms6ICMwMDAwMDA7XHJcbiAkY19zcHBfYmx1ZTogIzVGNzVGRjtcclxuICRjX3NwcF93aGl0ZTogI0U4RThGRjtcclxuIFxyXG4gJGlfYnNfc206IDU3NnB4O1xyXG4gJGlfYnNfbWQ6IDc2OHB4O1xyXG4gJGlfYnNfbGc6IDk5MnB4O1xyXG4gJGlfYnNfeGw6IDEyMDBweDtcclxuIFxyXG4gLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAqICAgICAgICAgICAgICAgICAgICBLZXlmcmFtZXNcclxuICAqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDE4LTEwLTMwIDIyOjI5OjM0XHJcbiAgKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcclxuICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuIFxyXG4gQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtaW4tdG9wIHtcclxuICAgMCUge1xyXG4gICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcclxuICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xyXG4gICAgIG9wYWNpdHk6IDBcclxuICAgfVxyXG4gICAxMDAlIHtcclxuICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgb3BhY2l0eTogMVxyXG4gICB9XHJcbiB9XHJcbiBcclxuIEBrZXlmcmFtZXMgZmFkZS1pbi10b3Age1xyXG4gICAwJSB7XHJcbiAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xyXG4gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XHJcbiAgICAgb3BhY2l0eTogMFxyXG4gICB9XHJcbiAgIDEwMCUge1xyXG4gICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICBvcGFjaXR5OiAxXHJcbiAgIH1cclxuIH1cclxuIFxyXG4gLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAqICAgICAgICAgICAgICAgICAgICAgU3R5bGluZ1xyXG4gICo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgIC5mYWRlLWluLXRvcCB7XHJcbiAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZS1pbi10b3AgMXMgY3ViaWMtYmV6aWVyKC4zOSwgLjU3NSwgLjU2NSwgMS4wMDApIDUwbXMgYm90aDtcclxuICAgICAgIGFuaW1hdGlvbjogZmFkZS1pbi10b3AgMXMgY3ViaWMtYmV6aWVyKC4zOSwgLjU3NSwgLjU2NSwgMS4wMDApIDUwbXMgYm90aFxyXG4gICAgIH1cclxuICAgICAuaW5mb0JveCB7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkMyQTFBO1xyXG4gICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgei1pbmRleDogMTtcclxuICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgdG9wOiAwO1xyXG4gICAgIH1cclxuICAgICAuaW5mb0JveCBpbWcge1xyXG4gICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgfVxyXG4gXHJcbiAgICAgLmluZm9Cb3ggYSB7XHJcbiAgICAgICBjb2xvcjogd2hlYXQ7XHJcbiAgICAgfVxyXG4gICAgICNmZWF1dHVyZXMge1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNfc3BwX2JsdWU7XHJcbiAgICAgICBpLmZhcywgaS5mYXIge1xyXG4gICAgICAgICAmLmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogN3JlbTtcclxuICAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICAgICAgLmNhcmQge1xyXG4gICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICB9XHJcbiAgICAgfVxyXG4gICAgICN0ZWFtIHtcclxuICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgfVxyXG4gICAgICAgLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cClcclxuICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkaV9ic19sZykge1xyXG4gICAgICAgICAuYm9yZGVyLWxlZnQge1xyXG4gICAgICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAjMTgxRDQwIDFweDtcclxuICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgIC5ib3JkZXItcmlnaHQge1xyXG4gICAgICAgICAgIGJvcmRlci1yaWdodDogc29saWQgIzE4MUQ0MCAxcHg7XHJcbiAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG4gICAgICAgfVxyXG4gICAgICAgLmNhcmQtc3VidGl0bGUge1xyXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4xNSk7XHJcbiAgICAgICB9XHJcbiAgICAgICAuY2FyZC1mb290ZXIge1xyXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4wNSk7XHJcbiAgICAgICAgIC8qIGZvb3RlciBzb2NpYWwgaWNvbnMgKi9cclxuICAgICAgICAgdWwuc29jaWFsLW5ldHdvcmsge1xyXG4gICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICB1bC5zb2NpYWwtbmV0d29yayBsaSB7XHJcbiAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgIH1cclxuIFxyXG4gICAgICAgICAvKiBmb290ZXIgc29jaWFsIGljb25zICovXHJcbiAgICAgICAgIC5zb2NpYWwtbmV0d29yayBhLmljb1dlYnNpdGU6aG92ZXIge1xyXG4gICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Mjg1RjQ7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLnNvY2lhbC1uZXR3b3JrIGEuaWNvRmFjZWJvb2s6aG92ZXIge1xyXG4gICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLnNvY2lhbC1uZXR3b3JrIGEuaWNvSW5zdGFncmFtOmhvdmVyIHtcclxuICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzEzNTg0O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC5zb2NpYWwtbmV0d29yayBhLmljb1R3aXR0ZXI6aG92ZXIge1xyXG4gICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzM2NjZmY7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLnNvY2lhbC1uZXR3b3JrIGEuaWNvR2l0SHViOmhvdmVyIHtcclxuICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC5zb2NpYWwtbmV0d29yayBhLmljb1dlYnNpdGU6aG92ZXIgaSwgLnNvY2lhbC1uZXR3b3JrIGEuaWNvRmFjZWJvb2s6aG92ZXIgaSwgLnNvY2lhbC1uZXR3b3JrIGEuaWNvVHdpdHRlcjpob3ZlciBpLCAuc29jaWFsLW5ldHdvcmsgYS5pY29JbnN0YWdyYW06aG92ZXIgaSwgLnNvY2lhbC1uZXR3b3JrIGEuaWNvR2l0SHViOmhvdmVyIGkge1xyXG4gICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGEuc29jaWFsSWNvbjpob3ZlciwgLnNvY2lhbEhvdmVyQ2xhc3Mge1xyXG4gICAgICAgICAgIGNvbG9yOiAjNDRCQ0REO1xyXG4gICAgICAgICB9XHJcbiBcclxuICAgICAgICAgLnNvY2lhbC1jaXJjbGUgbGkgYSB7XHJcbiAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XHJcbiAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICB3aWR0aDogMzcuNXB4O1xyXG4gICAgICAgICAgIGhlaWdodDogMzcuNXB4O1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAuc29jaWFsLWNpcmNsZSBsaSBpIHtcclxuICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM3LjVweDtcclxuICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgIH1cclxuIFxyXG4gICAgICAgICAuc29jaWFsLWNpcmNsZSBsaSBhOmhvdmVyIGksIC50cmlnZ2VyZWRIb3ZlciB7XHJcbiAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAtbXMtLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC5zb2NpYWwtY2lyY2xlIGkge1xyXG4gICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuOHM7XHJcbiAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC44cztcclxuICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC44cztcclxuICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuOHM7XHJcbiAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuOHM7XHJcbiAgICAgICAgIH1cclxuIFxyXG4gICAgICAgICBhIHtcclxuICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkYzQTdGO1xyXG4gICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICAgfVxyXG5cclxuICNoMzB7XHJcbiAgICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAuaW5mb0JveCBhIHtcclxuICAgIGNvbG9yOiB3aGVhdDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"feautures\" class=\"bg-primary\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12 py-3 text-center text-light\">\r\n                <h1 class=\"raleway bold display-4\">Warum wir?</h1>\r\n            </div>\r\n            <div class=\"card col-lg-4 color-1 py-4\">\r\n                <i class=\"fas fa-ticket-alt card-title mx-auto\"></i>\r\n                <h3 class=\"card-header text-center\">Ticket System</h3>\r\n                <div class=\"card-body text-justify\">\r\n                    Das System von <b>Support++</b> bietet ein umfangreiches Ticketsystem. Dabei kann ein eigener <b>Command</b> festgelegt werden. Die Supporter\r\n                    werden bei einer\r\n                    Einsendung eines Tickets benachrichtigt und auch der Versender erhält eine Bestätigung für seine Versendung. Das Ticketsystem kann auf weitere\r\n                    Plattformen wie Discord und Telegram erweitert werden.\r\n                </div>\r\n            </div>\r\n            <div class=\"card col-lg-4 color-2 py-4\">\r\n                <i class=\"fas fa-bell card-title mx-auto\"></i>\r\n                <h3 class=\"card-header text-center\">Supporter Notification</h3>\r\n                <div class=\"card-body text-justify\">\r\n                    Das System von <b>Support++</b> ermöglicht es auch, einer gewählten Supportergruppe einen oder mehrere Supporterchannel zuzuweisen. Dabei gibt es\r\n                    auch\r\n                    Funktionen, Supporter oder kleine Spielverderber auf eine Ignorelist zu setzen, damit Supporter nicht beim betreten von denjenigen benachrichtigt\r\n                    werden. Das besondere an unserem System ist, dass es auch möglich ist, die Benachrichtigungen auf weitere Plattformen wie Discord oder Telegram\r\n                    zu übertragen! Wir bieten auch eine Themen greifendes System, mit dem voreingestellte Fragen bereits vordefiniert werden können, damit sich ein\r\n                    Supporter bereits auf den Support einstellen kann.\r\n                </div>\r\n            </div>\r\n            <div class=\"card col-lg-4 color-3 py-4\">\r\n                <i class=\"far fa-clock card-title mx-auto\"></i>\r\n                <h3 class=\"card-header text-center\">Automatic Opening/Closing</h3>\r\n                <div class=\"card-body text-justify\">\r\n                    Das System von <b>Support++</b> bietet auch eine automatische Öffnungszeiten Funktion. Dabei kann der Benutzer selber die Öffnungszeiten\r\n                    verwalten und\r\n                    auch einstellen, ob und wie die Supportchannel bearbeitet werden sollen. Der Benutzer kann auch Commands zur Schließung der Supportchannel\r\n                    einstellen und ebenfalls festlegen, ob die Supporterchannel geöffnet sind, ob ein Supporter online, offline oder AFK ist. Ist das nicht toll? Wie\r\n                    in einem Supermarkt! <i class=\"fas fa-smile\"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row mt-3\">\r\n            <div class=\"col-md-6 text-md-right text-center pr-md-5 pb-md-0 pb-3\">\r\n                <a routerLink='/feature' class=\"btn btn-lg btn-primary\">Alle Features</a>\r\n            </div>\r\n            <div class=\"col-md-6 text-md-left text-center pl-md-5 pt-md-0 pt-3\">\r\n                <a href=\"https://github.com/support-pp/support-pp/issues/new\" class=\"btn btn-lg btn-outline-secondary\">Erstelle Feature Request&nbsp;<span\r\n                        style=\"vertical-align: text-top; font-size: 0.5rem\"><i class=\"fas fa-external-link-alt\"></i></span></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section id=\"team\" class=\"bg-primary pb-3\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row \">\r\n            <div class=\"col-12 text-center py-4 text-light\">\r\n                <h1 class=\"raleway bold display-4\">Wer sind wir?</h1>\r\n            </div>\r\n            <div class=\"col-lg-3 card color-1 py-4 text-center border-right ml-auto\">\r\n                <div class=\"card-title\">\r\n                    <img src=\"../../assets/team/elias.png\" height=\"150\" class=\"rounded-circle\">\r\n                </div>\r\n                <h1 class=\"display-5 card-header\">Elias</h1>\r\n                <h6 class=\"card-subtitle py-1 mt-0\"><i class=\"fas fa-caret-right\"></i>&nbsp;Supporter <i class=\"fas fa-caret-left\"></i></h6>\r\n                <div class=\"card-body text-justify\">\r\n                    <p>\r\n                        <b>Elias</b> hilft den Usern wo er nur kann. Auch den verzweifelsten User hilft er aus der patsche und bringt sein Script zum laufen.\r\n                    </p>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <ul class=\"social-network social-circle\">\r\n                        <li><a href=\"https://esieben.party/\" class=\"icoWebsite\" title=\"Website\"><i class=\"fas fa-globe\"></i></a>\r\n                        </li>\r\n                        <li><a href=\"https://instagram.com/esieben1310\" class=\"icoInstagram\" title=\"Twitter\"><i class=\"fab fa-instagram\"></i></a>\r\n                        </li>\r\n                        <li><a href=\"https://github.com/esieben1310\" class=\"icoGitHub\" title=\"GitHub\"><i class=\"fab fa-github\"></i></a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 card color-1 py-4 text-center border-right border-left\">\r\n                <div class=\"card-title\">\r\n                    <img src=\"../../assets/team/gamerboomtv.png\" height=\"150\" class=\"rounded-circle\">\r\n                </div>\r\n                <h1 class=\"display-5 card-header\">GamerBoomTV</h1>\r\n                <h6 class=\"card-subtitle py-1 mt-0\"><i class=\"fas fa-caret-right\"></i>&nbsp;Support Leitung&nbsp;<i class=\"fas fa-caret-left\"></i></h6>\r\n                <div class=\"card-body text-justify\">\r\n                    <p>\r\n                        <b>GamerBoomTV</b> ist der Leiter für unseren Support und unterstützt <b>VerHext</b> bei seiner Arbeit, auch\r\n                        wenn es für ihn nicht immer einfach ist!\r\n                    </p>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <ul class=\"social-network social-circle\">\r\n                        <li><a href=\"https://cheep-netzwerk.de/\" class=\"icoWebsite\" title=\"Website\"><i class=\"fas fa-globe\"></i></a>\r\n                        </li>\r\n                        <li><a href=\"https://twitter.com/Boomischer_Dan\" class=\"icoTwitter\" title=\"Twitter\"><i class=\"fab fa-twitter\"></i></a>\r\n                        </li>\r\n                        <li><a href=\"https://github.com/GamerBoomTV\" class=\"icoGitHub\" title=\"GitHub\"><i class=\"fab fa-github\"></i></a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 card color-1 py-4 text-center border-left mr-auto\">\r\n                <div class=\"card-title\">\r\n                    <img src=\"../../assets/team/nxtmaster.png\" height=\"150\" class=\"rounded-circle\">\r\n                </div>\r\n                <h1 class=\"display-5 card-header\">Nxtmaster</h1>\r\n                <h6 class=\"card-subtitle py-1 mt-0\"><i class=\"fas fa-caret-right\"></i>&nbsp;Supporter <i class=\"fas fa-caret-left\"></i></h6>\r\n                <div class=\"card-body text-justify\">\r\n                    <p>\r\n                        <b>Nxtmaster</b> hilft den Usern wo er nur kann. Auch den verzweifelsten User hilft er aus der patsche und bringt sein Script zum laufen.\r\n                    </p>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <ul class=\"social-network social-circle\">\r\n                        <li><a href=\"https://www.instagram.com/felix.sbxt/\" class=\"icoInstagram\" title=\"Twitter\"><i class=\"fab fa-instagram\"></i></a>\r\n                        </li>\r\n                        <li><a href=\"https://github.com/Nxtmaster10/\" class=\"icoGitHub\" title=\"GitHub\"><i class=\"fab fa-github\"></i></a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-3 card color-1 py-4 text-center border-right border-top ml-auto\">\r\n                <div class=\"card-title\">\r\n                    <img src=\"../../assets/team/verhext.png\" height=\"150\" class=\"rounded-circle\">\r\n                </div>\r\n                <h1 class=\"display-5 card-header\">VerHext</h1>\r\n                <h6 class=\"card-subtitle py-1 mt-0\"><i class=\"fas fa-caret-right\"></i>&nbsp;Developer&nbsp;<i class=\"fas fa-caret-left\"></i></h6>\r\n                <div class=\"card-body text-justify\">\r\n                    <p>\r\n                        Das ist <b>VerHext</b>, der Gründer des Projektes. Er hat das Projekt im April 2017 ins Leben gerufen und nun ist\r\n                        <b>Support++</b> eins der\r\n                        erfolgreichsten Supportsysteme für Teamspeak&sup3;!\r\n                    </p>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <ul class=\"social-network social-circle\">\r\n                        <li><a href=\"https://allesverhext.de/\" class=\"icoWebsite\" title=\"Website\"><i class=\"fas fa-globe\"></i></a>\r\n                        </li>\r\n                        <li><a href=\"https://twitter.com/allesVerHext\" class=\"icoTwitter\" title=\"Twitter\"><i class=\"fab fa-twitter\"></i></a>\r\n                        </li>\r\n                        <li><a href=\"https://github.com/VerHext\" class=\"icoGitHub\" title=\"GitHub\"><i class=\"fab fa-github\"></i></a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 card color-1 py-4 text-center border-left border-top mr-auto\">\r\n                <div class=\"card-title\">\r\n                    <img src=\"../../assets//team/lapotor.png\" height=\"150\" class=\"rounded-circle\">\r\n                </div>\r\n                <h1 class=\"display-5 card-header\">Lapotor</h1>\r\n                <h6 class=\"card-subtitle py-1 mt-0\"><i class=\"fas fa-caret-right\"></i>&nbsp;Chef&nbsp;<i class=\"fas fa-caret-left\"></i></h6>\r\n                <div class=\"card-body text-justify\">\r\n                    <p>\r\n                        <b>Lapotor</b> ist der Entwickler der Module und leitet mit <b>VerHext</b> zusammen das Projekt. Auch wenn man meinen können,\r\n                        dass sein Name von der Hundrasse <b>Labrador</b> kommen könnte, ist er kein Hund, auch wenn er manchmal bellt! <i\r\n                            class=\"far fa-smile\"></i>\r\n                    </p>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <ul class=\"social-network social-circle\">\r\n                        <li><a href=\"https://lapotor.de/\" class=\"icoWebsite\" title=\"Website\"><i class=\"fas fa-globe\"></i></a>\r\n                        </li>\r\n                        <li><a href=\"https://twitter.com/lapotor\" class=\"icoTwitter\" title=\"Twitter\"><i class=\"fab fa-twitter\"></i></a>\r\n                        </li>\r\n                        <li><a href=\"https://github.com/Lapotor\" class=\"icoGitHub\" title=\"GitHub\"><i class=\"fab fa-github\"></i></a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:300,400,700|Raleway:300,400,700\");\n/*!\r\n * Copyright (c) 2018.\r\n * All Rights Reserved to magiCCoder.\r\n * This work is protected by copyright laws and international treaties.\r\n */\n/*===================================================\r\n *                    Variablen\r\n *===================================================*/\n.hshdasda {\n  color: #090223; }\n/*===================================================\r\n *                    Keyframes\r\n *===================================================*/\n/* ----------------------------------------------\r\n * Generated by Animista on 2018-10-30 22:29:34\r\n * w: http://animista.net, t: @cssanimista\r\n * ---------------------------------------------- */\n@-webkit-keyframes fade-in-top {\n  0% {\n    -webkit-transform: translateY(-50px);\n    transform: translateY(-50px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1; } }\n@keyframes fade-in-top {\n  0% {\n    -webkit-transform: translateY(-50px);\n    transform: translateY(-50px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1; } }\n/*===================================================\r\n *                     Styling\r\n *===================================================*/\n.fade-in-top {\n  -webkit-animation: fade-in-top 1s cubic-bezier(0.39, 0.575, 0.565, 1) 50ms both;\n  animation: fade-in-top 1s cubic-bezier(0.39, 0.575, 0.565, 1) 50ms both; }\n.infoBox {\n  background-color: #BC2A1A;\n  height: 40px;\n  color: white;\n  font-size: 16px;\n  text-align: center;\n  z-index: 1;\n  position: absolute;\n  width: 100%;\n  top: 0; }\n.infoBox img {\n  margin-top: 5px;\n  margin-right: 8px; }\n.infoBox a {\n  color: wheat; }\n#feautures {\n  background-color: #5F75FF; }\n#feautures i.fas.card-title, #feautures i.far.card-title {\n    font-size: 7rem; }\n#feautures .card {\n    border: 0;\n    border-radius: 0; }\n#team .card {\n  border-radius: 0;\n  border: none; }\n@media (min-width: 992px) {\n  #team .border-left {\n    border-left: solid #181D40 1px !important; }\n  #team .border-top {\n    border-top: solid #181D40 2px !important; }\n  #team .border-right {\n    border-right: solid #181D40 1px !important; } }\n#team .card-header {\n  background-color: rgba(0, 0, 0, 0.3); }\n#team .card-subtitle {\n  background-color: rgba(0, 0, 0, 0.15); }\n#team .card-footer {\n  background-color: rgba(0, 0, 0, 0.05);\n  /* footer social icons */ }\n#team .card-footer ul.social-network {\n    list-style: none;\n    display: inline;\n    margin-left: 0 !important;\n    padding: 0; }\n#team .card-footer ul.social-network li {\n      display: inline;\n      margin: 0 5px;\n      /* footer social icons */ }\n#team .card-footer ul.social-network li a.icoWebsite:hover {\n        background-color: #4285F4; }\n#team .card-footer ul.social-network li a.icoFacebook:hover {\n        background-color: #3b5998; }\n#team .card-footer ul.social-network li a.icoInstagram:hover {\n        background-color: #c13584; }\n#team .card-footer ul.social-network li a.icoTwitter:hover {\n        background-color: #33ccff; }\n#team .card-footer ul.social-network li a.icoGitHub:hover {\n        background-color: #000000; }\n#team .card-footer ul.social-network li a.icoWebsite:hover i, #team .card-footer ul.social-network li a.icoFacebook:hover i, #team .card-footer ul.social-network li a.icoTwitter:hover i, #team .card-footer ul.social-network li a.icoInstagram:hover i, #team .card-footer ul.social-network li a.icoGitHub:hover i {\n        color: #fff; }\n#team .card-footer ul.social-network li a.socialIcon:hover, #team .card-footer ul.social-network li .socialHoverClass {\n        color: #44BCDD; }\n#team .card-footer ul.social-circle li a {\n    display: inline-block;\n    position: relative;\n    margin: 0 auto 0 auto;\n    border-radius: 50%;\n    text-align: center;\n    width: 37.5px;\n    height: 37.5px;\n    font-size: 15px; }\n#team .card-footer ul.social-circle li i {\n    margin: 0;\n    line-height: 37.5px;\n    text-align: center; }\n#team .card-footer ul.social-circle li a:hover i, #team .card-footer ul .triggeredHover {\n    -moz-transform: rotate(360deg);\n    -webkit-transform: rotate(360deg);\n    -ms--transform: rotate(360deg);\n    transform: rotate(360deg);\n    transition: all 0.5s; }\n#team .card-footer ul.social-circle i {\n    color: #fff;\n    transition: all 0.8s; }\n#team .card-footer a {\n    background-color: #2F3A7F; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXDQ5MTc2XFxEZXNrdG9wXFxjb2RlXFx3ZWJzaXRlL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFZQSxpR0FBWTtBQVpaOzs7O0dBSUc7QUFDSDs7dURBRXVEO0FBQ3ZEO0VBQ0UsZUFBYyxFQUNmO0FBYUQ7O3VEQUV1RDtBQUN2RDs7O29EQUdvRDtBQUVwRDtFQUNFO0lBQ0UscUNBQW9DO0lBQ3BDLDZCQUE0QjtJQUM1QixXQUNGLEVBQUE7RUFDQTtJQUNFLGlDQUFnQztJQUNoQyx5QkFBd0I7SUFDeEIsV0FDRixFQUFBLEVBQUE7QUFHRjtFQUNFO0lBQ0UscUNBQW9DO0lBQ3BDLDZCQUE0QjtJQUM1QixXQUNGLEVBQUE7RUFDQTtJQUNFLGlDQUFnQztJQUNoQyx5QkFBd0I7SUFDeEIsV0FDRixFQUFBLEVBQUE7QUFHRjs7dURBRXVEO0FBQ3ZEO0VBQ0UsZ0ZBQWdGO0VBQ2hGLHdFQUF3RSxFQUN6RTtBQUVEO0VBQ0UsMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixhQUFZO0VBQ1osZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsT0FBTSxFQUNQO0FBRUQ7RUFDRSxnQkFBZTtFQUNmLGtCQUFpQixFQUNsQjtBQUVEO0VBQ0UsYUFBWSxFQUNiO0FBRUQ7RUFDRSwwQkF4RWtCLEVBb0ZuQjtBQWJEO0lBS00sZ0JBQWUsRUFDaEI7QUFOTDtJQVVJLFVBQVM7SUFDVCxpQkFBZ0IsRUFDakI7QUFHSDtFQUVJLGlCQUFnQjtFQUNoQixhQUFZLEVBQ2I7QUFHRDtFQVBGO0lBU00sMENBQXlDLEVBQzFDO0VBVkw7SUFhTSx5Q0FBd0MsRUFDekM7RUFkTDtJQWlCTSwyQ0FBMEMsRUFDM0MsRUFBQTtBQWxCTDtFQXNCSSxxQ0FBbUMsRUFDcEM7QUF2Qkg7RUEwQkksc0NBQW9DLEVBQ3JDO0FBM0JIO0VBOEJJLHNDQUFvQztFQUNwQyx5QkFBeUIsRUF1RjFCO0FBdEhIO0lBa0NRLGlCQUFnQjtJQUNoQixnQkFBZTtJQUNmLDBCQUF5QjtJQUN6QixXQUFVLEVBa0NYO0FBdkVQO01Bd0NVLGdCQUFlO01BQ2YsY0FBYTtNQUNiLHlCQUF5QixFQTRCMUI7QUF0RVQ7UUE0Q1ksMEJBQXlCLEVBQzFCO0FBN0NYO1FBZ0RZLDBCQUF5QixFQUMxQjtBQWpEWDtRQW9EWSwwQkFBeUIsRUFDMUI7QUFyRFg7UUF3RFksMEJBQXlCLEVBQzFCO0FBekRYO1FBNERZLDBCQUF5QixFQUMxQjtBQTdEWDtRQWdFWSxZQUFXLEVBQ1o7QUFqRVg7UUFvRVksZUFBYyxFQUNmO0FBckVYO0lBMEVRLHNCQUFxQjtJQUNyQixtQkFBa0I7SUFDbEIsc0JBQXFCO0lBR3JCLG1CQUFrQjtJQUNsQixtQkFBa0I7SUFDbEIsY0FBYTtJQUNiLGVBQWM7SUFDZCxnQkFBZSxFQUNoQjtBQXBGUDtJQXVGUSxVQUFTO0lBQ1Qsb0JBQW1CO0lBQ25CLG1CQUFrQixFQUNuQjtBQTFGUDtJQTZGUSwrQkFBOEI7SUFDOUIsa0NBQWlDO0lBQ2pDLCtCQUE4QjtJQUM5QiwwQkFBeUI7SUFLekIscUJBQW9CLEVBQ3JCO0FBdEdQO0lBeUdRLFlBQVc7SUFLWCxxQkFBb0IsRUFDckI7QUEvR1A7SUFvSE0sMEJBQXlCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXHJcbiAqIENvcHlyaWdodCAoYykgMjAxOC5cclxuICogQWxsIFJpZ2h0cyBSZXNlcnZlZCB0byBtYWdpQ0NvZGVyLlxyXG4gKiBUaGlzIHdvcmsgaXMgcHJvdGVjdGVkIGJ5IGNvcHlyaWdodCBsYXdzIGFuZCBpbnRlcm5hdGlvbmFsIHRyZWF0aWVzLlxyXG4gKi9cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICogICAgICAgICAgICAgICAgICAgIFZhcmlhYmxlblxyXG4gKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbi5oc2hkYXNkYSB7XHJcbiAgY29sb3I6ICMwOTAyMjM7XHJcbn1cclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjMwMCw0MDAsNzAwfFJhbGV3YXk6MzAwLDQwMCw3MDAnKTtcclxuXHJcbiRjX3NwcF9kYXJrOiAjMDAwMDAwO1xyXG4kY19zcHBfYmx1ZTogIzVGNzVGRjtcclxuJGNfc3BwX3doaXRlOiAjRThFOEZGO1xyXG5cclxuJGlfYnNfc206IDU3NnB4O1xyXG4kaV9ic19tZDogNzY4cHg7XHJcbiRpX2JzX2xnOiA5OTJweDtcclxuJGlfYnNfeGw6IDEyMDBweDtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqICAgICAgICAgICAgICAgICAgICBLZXlmcmFtZXNcclxuICo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDE4LTEwLTMwIDIyOjI5OjM0XHJcbiAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1pbi10b3Age1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XHJcbiAgICBvcGFjaXR5OiAwXHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICBvcGFjaXR5OiAxXHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tdG9wIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xyXG4gICAgb3BhY2l0eTogMFxyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgb3BhY2l0eTogMVxyXG4gIH1cclxufVxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICogICAgICAgICAgICAgICAgICAgICBTdHlsaW5nXHJcbiAqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuLmZhZGUtaW4tdG9wIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZS1pbi10b3AgMXMgY3ViaWMtYmV6aWVyKC4zOSwgLjU3NSwgLjU2NSwgMS4wMDApIDUwbXMgYm90aDtcclxuICBhbmltYXRpb246IGZhZGUtaW4tdG9wIDFzIGN1YmljLWJlemllciguMzksIC41NzUsIC41NjUsIDEuMDAwKSA1MG1zIGJvdGhcclxufVxyXG5cclxuLmluZm9Cb3gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNCQzJBMUE7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLmluZm9Cb3ggaW1nIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5pbmZvQm94IGEge1xyXG4gIGNvbG9yOiB3aGVhdDtcclxufVxyXG5cclxuI2ZlYXV0dXJlcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNfc3BwX2JsdWU7XHJcblxyXG4gIGkuZmFzLCBpLmZhciB7XHJcbiAgICAmLmNhcmQtdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDdyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxufVxyXG5cclxuI3RlYW0ge1xyXG4gIC5jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAvLyBNZWRpdW0gZGV2aWNlcyAodGFibGV0cywgNzY4cHggYW5kIHVwKVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkaV9ic19sZykge1xyXG4gICAgLmJvcmRlci1sZWZ0IHtcclxuICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkICMxODFENDAgMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmJvcmRlci10b3Age1xyXG4gICAgICBib3JkZXItdG9wOiBzb2xpZCAjMTgxRDQwIDJweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5ib3JkZXItcmlnaHQge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IHNvbGlkICMxODFENDAgMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2FyZC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMyk7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4xNSk7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG4gICAgLyogZm9vdGVyIHNvY2lhbCBpY29ucyAqL1xyXG4gICAgdWwge1xyXG4gICAgICAmLnNvY2lhbC1uZXR3b3JrIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgICAvKiBmb290ZXIgc29jaWFsIGljb25zICovXHJcbiAgICAgICAgICBhLmljb1dlYnNpdGU6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4NUY0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGEuaWNvRmFjZWJvb2s6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGEuaWNvSW5zdGFncmFtOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MxMzU4NDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhLmljb1R3aXR0ZXI6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNjY2ZmO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGEuaWNvR2l0SHViOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhLmljb1dlYnNpdGU6aG92ZXIgaSwgYS5pY29GYWNlYm9vazpob3ZlciBpLCBhLmljb1R3aXR0ZXI6aG92ZXIgaSwgYS5pY29JbnN0YWdyYW06aG92ZXIgaSwgYS5pY29HaXRIdWI6aG92ZXIgaSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGEuc29jaWFsSWNvbjpob3ZlciwgLnNvY2lhbEhvdmVyQ2xhc3Mge1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ0QkNERDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuc29jaWFsLWNpcmNsZSBsaSBhIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcclxuICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAzNy41cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNy41cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnNvY2lhbC1jaXJjbGUgbGkgaSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNy41cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnNvY2lhbC1jaXJjbGUgbGkgYTpob3ZlciBpLCAudHJpZ2dlcmVkSG92ZXIge1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgLW1zLS10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5zb2NpYWwtY2lyY2xlIGkge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuOHM7XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC44cztcclxuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC44cztcclxuICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuOHM7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuOHM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyRjNBN0Y7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4gIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nl2br.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/nl2br.pipe.ts ***!
  \*******************************/
/*! exports provided: Nl2brPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nl2brPipe", function() { return Nl2brPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Nl2brPipe = /** @class */ (function () {
    function Nl2brPipe() {
    }
    Nl2brPipe.prototype.transform = function (value, args) {
        // return value.replace(/\n/g, '<br />');
        value = value.replace(/(?:\r\n\r\n|\r\r|\n\n)/g, '</p><p>');
        return '<p>' + value.replace(/(?:\r\n|\r|\n)/g, '<br>') + '</p>';
    };
    Nl2brPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'nl2br'
        })
    ], Nl2brPipe);
    return Nl2brPipe;
}());



/***/ }),

/***/ "./src/app/statistik/statistik.component.html":
/*!****************************************************!*\
  !*** ./src/app/statistik/statistik.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"imprint\" class=\"bg-primary\">\n    <div class=\"container px-5 py-3\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <h1>Statistik</h1>\n            </div>\n            <div class=\"col-12 text-justify\">\n                <div class=\"card\">\n            \n                    <div class=\"card-body border border-white\">\n                   \n                      <p style=\"display:inline;\" class=\"card-text\">[2018] Download the Statistik of the year 2018.  (.pdf)</p>\n                      <a style=\"display:inline; float: right;\" href=\"../../assets/statistik/statistik-2018.pdf\" class=\"btn btn-danger\"><i class=\"far fa-file-alt\"></i></a>\n                    </div>\n                  </div>\n\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/statistik/statistik.component.scss":
/*!****************************************************!*\
  !*** ./src/app/statistik/statistik.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#imprint {\n  color: white;\n  height: 500px; }\n  #imprint a.imprint-link {\n    color: #E8E8FF;\n    opacity: .8; }\n  #right-footer {\n  opacity: 1; }\n  .card {\n  background: #34418C; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlzdGlrL0M6XFxVc2Vyc1xcNDkxNzZcXERlc2t0b3BcXGNvZGVcXHdlYnNpdGUvc3JjXFxhcHBcXHN0YXRpc3Rpa1xcc3RhdGlzdGlrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLGNBQWEsRUFNZDtFQVJIO0lBS00sZUFBYztJQUNkLFlBQVcsRUFDWjtFQUVIO0VBQ0UsV0FBVSxFQUNYO0VBRUQ7RUFDSSxvQkFBb0IsRUFDdkIiLCJmaWxlIjoic3JjL2FwcC9zdGF0aXN0aWsvc3RhdGlzdGlrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ltcHJpbnQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgXHJcbiAgICBhLmltcHJpbnQtbGlua3tcclxuICAgICAgY29sb3I6ICNFOEU4RkY7XHJcbiAgICAgIG9wYWNpdHk6IC44O1xyXG4gICAgfVxyXG4gIH1cclxuICAjcmlnaHQtZm9vdGVye1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIC5jYXJke1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMzQ0MThDIDtcclxuICB9XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/statistik/statistik.component.ts":
/*!**************************************************!*\
  !*** ./src/app/statistik/statistik.component.ts ***!
  \**************************************************/
/*! exports provided: StatistikComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatistikComponent", function() { return StatistikComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatistikComponent = /** @class */ (function () {
    function StatistikComponent() {
    }
    StatistikComponent.prototype.ngOnInit = function () {
    };
    StatistikComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statistik',
            template: __webpack_require__(/*! ./statistik.component.html */ "./src/app/statistik/statistik.component.html"),
            styles: [__webpack_require__(/*! ./statistik.component.scss */ "./src/app/statistik/statistik.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StatistikComponent);
    return StatistikComponent;
}());



/***/ }),

/***/ "./src/app/text2a.pipe.ts":
/*!********************************!*\
  !*** ./src/app/text2a.pipe.ts ***!
  \********************************/
/*! exports provided: Text2aPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text2aPipe", function() { return Text2aPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Text2aPipe = /** @class */ (function () {
    function Text2aPipe() {
    }
    Text2aPipe.prototype.transform = function (link) {
        return this.linkify(link);
    };
    Text2aPipe.prototype.linkify = function (plainText) {
        var replacedText;
        var replacePattern1;
        var replacePattern2;
        //URLs replace medium post with real url
        replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
        replacedText = plainText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');
        replacePattern2 = /!\[(.*?)\]\((.*?)\)/gim;
        replacedText = plainText.replace(replacePattern2, '<img src="$2"   width="342" target="_blank">');
        return replacedText;
    };
    Text2aPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'text2a'
        })
    ], Text2aPipe);
    return Text2aPipe;
}());



/***/ }),

/***/ "./src/app/tutorial/tutorial.component.html":
/*!**************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section id=\"imprint\" class=\"bg-primary\">\n    <div class=\"container px-5 py-3\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <h1>Tutorials</h1>\n            </div>\n            <div class=\"col-12 text-justify\">\n        \n                    <div class=\"row\">\n                        <div class=\"col-sm\">\n                           <ul>\n                              <li><b>Ticketsystem</b><br><br>\n                                <button class=\"btn btn-danger\" href=\"https://www.youtube.com/watch?v=pWNic-77xjs\">Zu YouTube</button>\n                              </li>\n                              <li><b>Themen notification</b>\n                                <p>Grundeinstellungen.</p>\n                                <button class=\"btn btn-danger\" href=\"https://www.youtube.com/watch?v=Ck7NM2bcmtw\">Zu YouTube</button>\n                              </li>\n                              <li><b>Discord notification</b>\n                                <p>Grundeinstellungen. Verbindung mit Discord</p>\n                                <button class=\"btn btn-danger\" href=\"https://www.youtube.com/watch?v=fI1-dtcX4ZM\">Zu YouTube</button>\n                              </li>\n                              <li><b>Prefix</b>\n                                <p>Anpassung des Prefix</p>\n                                <button class=\"btn btn-danger\" href=\"https://www.youtube.com/watch?v=smxItkrFcMQ\">Zu YouTube</button>\n                              </li>\n        \n                           </ul>\n                          </div>\n                          <div class=\"col-sm\">\n                              <ul>\n                     \n                                  <li><b>Queue</b>\n                                    <p>Einrichtung einer Warteschlange</p>\n                                    <button class=\"btn btn-danger\" href=\"https://www.youtube.com/watch?v=6cBZ4B99XPo\">Zu YouTube</button>\n                                  </li>\n            \n                                  <li><b>Telegram notification</b>\n                                    <p>Einrichtung. Verbindung mit Telegram</p>\n                                    <button class=\"btn btn-danger\" href=\"https://www.youtube.com/watch?v=rLFzjjhCquE\">Zu YouTube</button>\n                                  </li>\n                                  <li><b>ChannelEdit module</b>\n                                    <p>Einrichtung. Parameter.</p>\n                                    <button class=\"btn btn-danger\" href=\"https://www.youtube.com/watch?v=oPr3ieHB7KU\">Zu YouTube</button>\n                                  </li>\n                                  </ul>\n                            </div>\n                    </div>\n              \n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/tutorial/tutorial.component.scss":
/*!**************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#imprint {\n  color: white; }\n  #imprint a.imprint-link {\n    color: #E8E8FF;\n    opacity: .8; }\n  #right-footer {\n  opacity: 1; }\n  .white {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHV0b3JpYWwvQzpcXFVzZXJzXFw0OTE3NlxcRGVza3RvcFxcY29kZVxcd2Vic2l0ZS9zcmNcXGFwcFxcdHV0b3JpYWxcXHR1dG9yaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWSxFQUtiO0VBTkg7SUFHTSxlQUFjO0lBQ2QsWUFBVyxFQUNaO0VBRUg7RUFDRSxXQUFVLEVBQ1g7RUFFRDtFQUNFLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL3R1dG9yaWFsL3R1dG9yaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ltcHJpbnQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYS5pbXByaW50LWxpbmt7XHJcbiAgICAgIGNvbG9yOiAjRThFOEZGO1xyXG4gICAgICBvcGFjaXR5OiAuODtcclxuICAgIH1cclxuICB9XHJcbiAgI3JpZ2h0LWZvb3RlcntcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAud2hpdGV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/tutorial/tutorial.component.ts":
/*!************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.ts ***!
  \************************************************/
/*! exports provided: TutorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialComponent", function() { return TutorialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TutorialComponent = /** @class */ (function () {
    function TutorialComponent() {
    }
    TutorialComponent.prototype.ngOnInit = function () {
    };
    TutorialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tutorial',
            template: __webpack_require__(/*! ./tutorial.component.html */ "./src/app/tutorial/tutorial.component.html"),
            styles: [__webpack_require__(/*! ./tutorial.component.scss */ "./src/app/tutorial/tutorial.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TutorialComponent);
    return TutorialComponent;
}());



/***/ }),

/***/ "./src/app/versions/versions.component.html":
/*!**************************************************!*\
  !*** ./src/app/versions/versions.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"imprint\" class=\"bg-primary\">\n  <div class=\"container px-5 py-3\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <h1>Download Center</h1>\n      </div>\n      <div class=\"col-12 text-justify\">\n        <div *ngFor=\"let re of release; let i = index\" class=\"card\">\n\n          <div class=\"card-body border border-white\">\n            <h2><span *ngIf=\"!re.prerelease\" class=\"badge badge-success\">Release</span>\n              <span *ngIf=\"re.prerelease\" class=\"badge badge-warning\">Pre-Release</span>\n              {{ re.name }}</h2>\n            <div class=\"row\">\n              <div class=\"col-9\">\n                <div style=\"display:inline;\" class=\"card-text\" [innerHTML]=\" re.body |  text2a | nl2br\"></div>\n              </div>\n              <div class=\"col-3\">\n                <a style=\"display:inline; float: right;\" href=\"{{ re.html_url}}\" class=\"btn btn-dark intype\"><i\n                    class=\"fas fa-code-branch\"></i></a>\n                <a style=\"display:inline; float: right;\" href=\"{{ re.assets[0].browser_download_url }}\" class=\"btn btn-success intype\"><i\n                    class=\"fas fa-download\"></i></a>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/versions/versions.component.scss":
/*!**************************************************!*\
  !*** ./src/app/versions/versions.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#imprint {\n  color: white; }\n  #imprint a.imprint-link {\n    color: #E8E8FF;\n    opacity: .8; }\n  #right-footer {\n  opacity: 1; }\n  .card {\n  background: #34418C; }\n  .intype {\n  margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyc2lvbnMvQzpcXFVzZXJzXFw0OTE3NlxcRGVza3RvcFxcY29kZVxcd2Vic2l0ZS9zcmNcXGFwcFxcdmVyc2lvbnNcXHZlcnNpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWSxFQU1iO0VBUEg7SUFJTSxlQUFjO0lBQ2QsWUFBVyxFQUNaO0VBRUg7RUFDRSxXQUFVLEVBQ1g7RUFFRDtFQUNJLG9CQUFvQixFQUN2QjtFQUVIO0VBQ0ksa0JBQWlCLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmVyc2lvbnMvdmVyc2lvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW1wcmludCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgIFxyXG4gICAgYS5pbXByaW50LWxpbmt7XHJcbiAgICAgIGNvbG9yOiAjRThFOEZGO1xyXG4gICAgICBvcGFjaXR5OiAuODtcclxuICAgIH1cclxuICB9XHJcbiAgI3JpZ2h0LWZvb3RlcntcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAuY2FyZHtcclxuICAgICAgYmFja2dyb3VuZDogIzM0NDE4QyA7XHJcbiAgfVxyXG5cclxuLmludHlwZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/versions/versions.component.ts":
/*!************************************************!*\
  !*** ./src/app/versions/versions.component.ts ***!
  \************************************************/
/*! exports provided: VersionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionsComponent", function() { return VersionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VersionsComponent = /** @class */ (function () {
    function VersionsComponent(http) {
        this.http = http;
    }
    VersionsComponent.prototype.ngOnInit = function () {
        this.getGitHubReleases();
    };
    VersionsComponent.prototype.getGitHubReleases = function () {
        var _this = this;
        this.http.get('https://api.github.com/repos/support-pp/support-pp/releases').subscribe(function (resp) {
            _this.release = resp;
            console.log("[DEBUG] Release titel :: " + JSON.stringify(resp[0].name));
        }, function (err) {
            console.log("[ERROR] internal API offline?!");
        });
    };
    VersionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-versions',
            template: __webpack_require__(/*! ./versions.component.html */ "./src/app/versions/versions.component.html"),
            styles: [__webpack_require__(/*! ./versions.component.scss */ "./src/app/versions/versions.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VersionsComponent);
    return VersionsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\49176\Desktop\code\website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map