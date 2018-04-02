"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HttpServiceConfig = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

require("rxjs/Rx");

require("rxjs/add/operator/map");

var _fs = require("fs-");

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

var HttpServiceConfig = function () {
    function HttpServiceConfig() {}
    HttpServiceConfig.prototype.ngOnInit = function () {
        console.log("ohhh");
        try {
            console.log("ohhhsss");
            var content = (0, _fs.readFile)({ name: '.httpsbtest' });
            this.object = JSON.parse(content);
        } catch (e) {
            console.log(e);
        }
    };
    HttpServiceConfig.prototype.getPath = function () {
        console.log(this);
        return "hola";
    };
    HttpServiceConfig = __decorate([(0, _core.Injectable)(), __metadata("design:paramtypes", [])], HttpServiceConfig);
    return HttpServiceConfig;
}();
exports.HttpServiceConfig = HttpServiceConfig;
exports.default = HttpServiceConfig.prototype.getPath;
//# sourceMappingURL=http.service_config.js.map