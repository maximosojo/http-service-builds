"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HttpService = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _http = require("@angular/http");

var _Observable = require("rxjs/Observable");

require("rxjs/Rx");

require("rxjs/add/operator/map");

var _http2 = require("./http.service_config");

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HttpService = function () {
    function HttpService(http, hsconfig) {
        this.http = http;
        this.hsconfig = hsconfig;
        this.apiRoot = '';
        var token = [];
        this.apiRoot = hsconfig.getPath();
        this.headers = new _http.Headers({ 'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new _http.RequestOptions({ headers: this.headers });
    }
    HttpService.prototype.post = function (url, parameters) {
        var json = [];
        if (!parameters) {
            var parameters_1 = {};
        }
        var apiURL = "" + this.apiRoot;
        return this.http.post(apiURL + url, parameters, this.options).map(function (res) {
            return res.json();
        }).catch(this.handleError);
    };
    HttpService.prototype.get = function (url) {
        var apiURL = "" + this.apiRoot;
        return this.http.get(apiURL + url, this.options).map(function (res) {
            return res.json();
        }).catch(this.handleError);
    };
    HttpService.prototype.getApiRoot = function () {
        return this.apiRoot;
    };
    HttpService.prototype.handleError = function (error) {
        return _Observable.Observable.throw(error.json().error || 'Server error');
    };
    HttpService = __decorate([(0, _core.Injectable)(), __metadata("design:paramtypes", [_http.Http, _http2.HttpServiceConfig])], HttpService);
    return HttpService;
}();
exports.HttpService = HttpService;
exports.default = HttpService.prototype.getApiRoot;
//# sourceMappingURL=http.service.js.map