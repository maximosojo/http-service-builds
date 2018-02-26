import {Component, Input, Output, ViewChild, ViewContainerRef, EventEmitter,
    ComponentFactoryResolver, ChangeDetectorRef, OnInit, AfterViewInit
} from '@angular/core';

@Component({
    selector: 'http-component',
})

export class HttpComponent implements OnInit, AfterViewInit {
	
	constructor() {}

	ngOnInit() {
	}
}