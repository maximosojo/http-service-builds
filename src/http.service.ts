import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { HttpServiceConfig } from './http.service_config';

@Injectable()
export class HttpService {
	headers: Headers;
    options: RequestOptions;
    apiURL: string;
    apiRoot: string = '';

    constructor(private http: Http, private hsconfig: HttpServiceConfig) {
      let token:any = [];
      this.apiRoot = hsconfig.getPath();
      this.headers = new Headers({ 'Content-Type': 'application/json', 
                                     'Accept': 'q=0.8;application/json;q=0.9'});
      this.options = new RequestOptions({ headers: this.headers });
  	}

  	public post(url,parameters){
      let json = [];
      if (!parameters) {
        let parameters = {};
      }
      let apiURL = `${this.apiRoot}`;
      return this.http.post(apiURL+url, parameters, this.options)
      .map((res:Response) => res.json())
      .catch(this.handleError);
    }

    public get(url){
      let apiURL = `${this.apiRoot}`;
      return this.http.get(apiURL+url, this.options)
      .map((res:Response) => res.json())
      .catch(this.handleError);
    }

    public getApiRoot(){
      return this.apiRoot;
    }

    private handleError(error: Response) {
      return Observable.throw(error.json().error || 'Server error');
    }
}

export default HttpService.prototype.getApiRoot;
