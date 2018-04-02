import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";
import 'rxjs/add/operator/map';
export declare class HttpService {
    private http;
    headers: Headers;
    options: RequestOptions;
    apiURL: string;
    apiRoot: string;
    constructor(http: Http);
    post(url: any, parameters: any): Observable<any>;
    get(url: any): Observable<any>;
    private handleError(error);
}
