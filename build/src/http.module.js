"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HttpModule = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _http = require("./http.component");

var _http2 = require("./http.service");

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HttpModule = function () {
    function HttpModule() {}
    HttpModule = __decorate([(0, _core.NgModule)({
        imports: [],
        declarations: [_http.HttpComponent],
        exports: [_http.HttpComponent],
        providers: [_http2.HttpService]
    })], HttpModule);
    return HttpModule;
}();
exports.HttpModule = HttpModule;
//# sourceMappingURL=http.module.js.map