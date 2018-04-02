import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HttpService {
	headers: Headers;
    options: RequestOptions;
    apiURL: string;
    apiRoot: string = '';

    constructor(private http: Http) {
      let token:any = [];
      this.headers = new Headers({ 'Content-Type': 'application/json', 
                                     'Accept': 'q=0.8;application/json;q=0.9'});
      this.options = new RequestOptions({ headers: this.headers });
  	}

  	private post(url,parameters){
      let json = [];
      if (!parameters) {
        let parameters = {};
      }
      let apiURL = `${this.apiRoot}`;
      return this.http.post(apiURL+url, parameters, this.options)
      .map((res:Response) => res.json())
      .catch(this.handleError);
    }

    private get(url){
      let apiURL = `${this.apiRoot}`;
      return this.http.get(apiURL+url, this.options)
      .map((res:Response) => res.json())
      .catch(this.handleError);
    }

    private handleError(error: Response) {
      return Observable.throw(error.json().error || 'Server error');
    }
}