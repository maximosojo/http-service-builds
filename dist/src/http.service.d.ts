import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";
import 'rxjs/add/operator/map';
import { HttpServiceConfig } from './http.service_config';
export declare class HttpService {
    private http;
    private hsconfig;
    headers: Headers;
    options: RequestOptions;
    apiURL: string;
    apiRoot: string;
    constructor(http: Http, hsconfig: HttpServiceConfig);
    post(url: any, parameters: any): Observable<any>;
    get(url: any): Observable<any>;
    getApiRoot(): string;
    private handleError(error);
}
declare const _default: () => string;
export default _default;
