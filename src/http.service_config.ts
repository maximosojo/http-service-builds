import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { writeFile, readFile } from "fs-";

@Injectable()
export class HttpServiceConfig {
	
	object:string[];

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
    	return this.object;
    }
}

export default HttpServiceConfig.prototype.getPath;
