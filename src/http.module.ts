import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpComponent } from './http.component';
import { HttpService } from './http.service';

@NgModule({
	imports:[],
	declarations:[
        HttpComponent
    ],
	exports:[
        HttpComponent
    ],
    providers: [
        HttpService
    ]
})

export class HttpModule {}