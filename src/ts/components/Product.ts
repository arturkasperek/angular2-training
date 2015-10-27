/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

@Component({
    inputs: ['product'],
    selector: 'product'
})
@View({
    templateUrl: 'src/template/Product.html'
})
export class ProductComponent {
    public product: Product;
}

export class Product {
    name: string;
    price: string;
    description: string;
    imgSrc: string;

    constructor(name, price, description, imgSrc) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.imgSrc = imgSrc;
    }
}
