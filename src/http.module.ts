import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpComponent } from './http.component';
import { HttpService } from './http.service';

@NgModule({
	imports:[CommonModule],
	declarations:[],
	exports:[]
})

export class HttpModule { 
	static forRoot(): ModuleWithProviders {
        return {
            ngModule: HttpModule,
            providers: [HttpService]
        }
    }

    static forChild(): ModuleWithProviders {
        return {
            ngModule: HttpModule,
            providers: []
        }
    }
}