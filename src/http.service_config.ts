import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { writeFile, readFile } from "fs-";

@Injectable()
export class HttpServiceConfig {
	
	object:any[];

    constructor() {
    	try {
    		console.log("ohhhsss");
    		var content = readFile({name: '.httpsbtest'});
    		this.object = JSON.parse(content);
		}
		catch(e) {
			console.log(e);
		}
  	}

    public getPath(){
        let response:any = [];
        response = this.object;
    	return response.path;
    }
}

export default HttpServiceConfig.prototype.getPath;
