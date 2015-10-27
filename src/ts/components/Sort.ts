/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, EventEmitter} from 'angular2/angular2';

@Component({
    outputs: ['clicked'],
    selector: 'sort-btn'
})
@View({
    templateUrl: 'src/template/Sort.html'
})
export class SortComponent {
    clicked = new EventEmitter();

    sortByNames() {
        this.clicked.next("names");
    }

    sortByPrices() {
        this.clicked.next("prices");
    }
}
