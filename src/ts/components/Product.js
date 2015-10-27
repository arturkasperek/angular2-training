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
                    this.hideFlag = true;
                }
                ProductComponent.prototype.hide = function () {
                };
                ProductComponent = __decorate([
                    angular2_1.Component({
                        inputs: ['product'],
                        selector: 'product'
                    }),
                    angular2_1.View({
                        templateUrl: 'src/template/Product.html',
                        directives: [angular2_1.NgIf]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90cy9jb21wb25lbnRzL1Byb2R1Y3QudHMiXSwibmFtZXMiOlsiUHJvZHVjdENvbXBvbmVudCIsIlByb2R1Y3RDb21wb25lbnQuY29uc3RydWN0b3IiLCJQcm9kdWN0Q29tcG9uZW50LmhpZGUiLCJQcm9kdWN0IiwiUHJvZHVjdC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUEsa0RBQWtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJbEQ7Z0JBWUlBO29CQUNJQyxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQTtnQkFDekJBLENBQUNBO2dCQUVERCwrQkFBSUEsR0FBSkE7Z0JBRUFFLENBQUNBO2dCQWxCTEY7b0JBQUNBLG9CQUFTQSxDQUFDQTt3QkFDUEEsTUFBTUEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7d0JBQ25CQSxRQUFRQSxFQUFFQSxTQUFTQTtxQkFDdEJBLENBQUNBO29CQUNEQSxlQUFJQSxDQUFDQTt3QkFDRkEsV0FBV0EsRUFBRUEsMkJBQTJCQTt3QkFDeENBLFVBQVVBLEVBQUVBLENBQUNBLGVBQUlBLENBQUNBO3FCQUNyQkEsQ0FBQ0E7O3FDQVlEQTtnQkFBREEsdUJBQUNBO1lBQURBLENBbkJBLEFBbUJDQSxJQUFBO1lBbkJELCtDQW1CQyxDQUFBO1lBRUQ7Z0JBTUlHLGlCQUFZQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFFQSxXQUFXQSxFQUFFQSxNQUFNQTtvQkFDeENDLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO29CQUNqQkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBQ25CQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxXQUFXQSxDQUFDQTtvQkFDL0JBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLE1BQU1BLENBQUNBO2dCQUN6QkEsQ0FBQ0E7Z0JBQ0xELGNBQUNBO1lBQURBLENBWkEsQUFZQ0EsSUFBQTtZQVpELDZCQVlDLENBQUEiLCJmaWxlIjoic3JjL3RzL2NvbXBvbmVudHMvUHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cblxuaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIE5nSWZ9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcblxuQENvbXBvbmVudCh7XG4gICAgaW5wdXRzOiBbJ3Byb2R1Y3QnXSxcbiAgICBzZWxlY3RvcjogJ3Byb2R1Y3QnXG59KVxuQFZpZXcoe1xuICAgIHRlbXBsYXRlVXJsOiAnc3JjL3RlbXBsYXRlL1Byb2R1Y3QuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW05nSWZdXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RDb21wb25lbnQge1xuICAgIHB1YmxpYyBwcm9kdWN0OiBQcm9kdWN0O1xuICAgIHB1YmxpYyBoaWRlRmxhZzogQm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhpZGVGbGFnID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJvZHVjdCB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHByaWNlOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBpbWdTcmM6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbiwgaW1nU3JjKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmltZ1NyYyA9IGltZ1NyYztcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
