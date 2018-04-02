var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import "rxjs/Rx";
import 'rxjs/add/operator/map';
import { readFile } from "fs-";
var HttpServiceConfig = (function () {
    function HttpServiceConfig() {
        try {
            console.log("ohhhsss");
            var content = readFile({ name: '.httpsbtest' });
            this.object = JSON.parse(content);
        }
        catch (e) {
            console.log(e);
        }
    }
    HttpServiceConfig.prototype.getPath = function () {
        var response = [];
        response = this.object;
        return response.path;
    };
    HttpServiceConfig = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], HttpServiceConfig);
    return HttpServiceConfig;
}());
export { HttpServiceConfig };
export default HttpServiceConfig.prototype.getPath;
//# sourceMappingURL=http.service_config.js.map