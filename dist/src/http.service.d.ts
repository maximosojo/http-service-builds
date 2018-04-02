import { Http, Headers, RequestOptions } from '@angular/http';
import "rxjs/Rx";
import 'rxjs/add/operator/map';
export declare class HttpService {
    private http;
    headers: Headers;
    options: RequestOptions;
    apiURL: string;
    apiRoot: string;
    constructor(http: Http);
    private post(url, parameters);
    private get(url);
    private handleError(error);
}
