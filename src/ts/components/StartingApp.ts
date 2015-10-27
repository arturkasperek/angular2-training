/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, NgFor} from 'angular2/angular2';
import {Product, ProductComponent} from './Product';
import {SortComponent} from './Sort';

@Component({
    selector: 'catalog-app'
})
@View({
    templateUrl: 'src/template/starting-app.html',
    directives: [NgFor, ProductComponent, SortComponent]
})
export default class CatalogApp {
    link = "http://lorempixel.com/400/200/food/";
    products = [new Product("jablko", '123', "do jedzenia", this.link +'1'),
        new Product("ananas", '233', "do fd jedzenia", this.link + '2'),
        new Product("winogrona", '500', "do df jedzenia", this.link + '3'),
        new Product("gruszka", '100', "taka tam", this.link + '4'),
        new Product("wisnia", '1000', 'taki tam owoc', this.link + '5')];

    sort($event) {
        if($event == "names") {
            this.sortNames();
        } else {
            this.sortPrice();
        }
    }

    filtr($event) {
        console.log($event.target.value);
    }

    sortNames () {
        this.products.sort(function(obj, obj2) {
            return obj.name[0].charCodeAt() - obj2.name[0].charCodeAt();
        })
    }
    sortPrice () {
        this.products.sort(function(obj1, obj2) {
            return obj2.price - obj1.price;
        })
    }
}
