/// <reference path="../../../typings/tsd.d.ts" />
System.register(['angular2/angular2'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1;
    var ProductComponent, Product;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            ProductComponent = (function () {
                function ProductComponent() {
                }
                ProductComponent = __decorate([
                    angular2_1.Component({
                        inputs: ['product'],
                        selector: 'product'
                    }),
                    angular2_1.View({
                        templateUrl: 'src/template/Product.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductComponent);
                return ProductComponent;
            })();
            exports_1("ProductComponent", ProductComponent);
            Product = (function () {
                function Product(name, price, description, imgSrc) {
                    this.name = name;
                    this.price = price;
                    this.description = description;
                    this.imgSrc = imgSrc;
                }
                return Product;
            })();
            exports_1("Product", Product);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90cy9jb21wb25lbnRzL1Byb2R1Y3QudHMiXSwibmFtZXMiOlsiUHJvZHVjdENvbXBvbmVudCIsIlByb2R1Y3RDb21wb25lbnQuY29uc3RydWN0b3IiLCJQcm9kdWN0IiwiUHJvZHVjdC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUEsa0RBQWtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJbEQ7Z0JBQUFBO2dCQVNBQyxDQUFDQTtnQkFUREQ7b0JBQUNBLG9CQUFTQSxDQUFDQTt3QkFDUEEsTUFBTUEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7d0JBQ25CQSxRQUFRQSxFQUFFQSxTQUFTQTtxQkFDdEJBLENBQUNBO29CQUNEQSxlQUFJQSxDQUFDQTt3QkFDRkEsV0FBV0EsRUFBRUEsMkJBQTJCQTtxQkFDM0NBLENBQUNBOztxQ0FHREE7Z0JBQURBLHVCQUFDQTtZQUFEQSxDQVRBLEFBU0NBLElBQUE7WUFURCwrQ0FTQyxDQUFBO1lBRUQ7Z0JBTUlFLGlCQUFZQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFFQSxXQUFXQSxFQUFFQSxNQUFNQTtvQkFDeENDLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO29CQUNqQkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBQ25CQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxXQUFXQSxDQUFDQTtvQkFDL0JBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLE1BQU1BLENBQUNBO2dCQUN6QkEsQ0FBQ0E7Z0JBQ0xELGNBQUNBO1lBQURBLENBWkEsQUFZQ0EsSUFBQTtZQVpELDZCQVlDLENBQUEiLCJmaWxlIjoic3JjL3RzL2NvbXBvbmVudHMvUHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cblxuaW1wb3J0IHtDb21wb25lbnQsIFZpZXd9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcblxuQENvbXBvbmVudCh7XG4gICAgaW5wdXRzOiBbJ3Byb2R1Y3QnXSxcbiAgICBzZWxlY3RvcjogJ3Byb2R1Y3QnXG59KVxuQFZpZXcoe1xuICAgIHRlbXBsYXRlVXJsOiAnc3JjL3RlbXBsYXRlL1Byb2R1Y3QuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdENvbXBvbmVudCB7XG4gICAgcHVibGljIHByb2R1Y3Q6IFByb2R1Y3Q7XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9kdWN0IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgcHJpY2U6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGltZ1NyYzogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBpbWdTcmMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuaW1nU3JjID0gaW1nU3JjO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
