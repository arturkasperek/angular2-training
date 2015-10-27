/// <reference path="../../../typings/tsd.d.ts" />
System.register(['angular2/angular2', './Product', './Sort'], function(exports_1) {
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
    var angular2_1, Product_1, Sort_1;
    var CatalogApp;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (Product_1_1) {
                Product_1 = Product_1_1;
            },
            function (Sort_1_1) {
                Sort_1 = Sort_1_1;
            }],
        execute: function() {
            CatalogApp = (function () {
                function CatalogApp() {
                    this.link = "http://lorempixel.com/400/200/food/";
                    this.products = [new Product_1.Product("jablko", '123', "do jedzenia", this.link + '1'),
                        new Product_1.Product("ananas", '233', "do fd jedzenia", this.link + '2'),
                        new Product_1.Product("winogrona", '500', "do df jedzenia", this.link + '3'),
                        new Product_1.Product("gruszka", '100', "taka tam", this.link + '4'),
                        new Product_1.Product("wisnia", '1000', 'taki tam owoc', this.link + '5')];
                }
                CatalogApp.prototype.sort = function ($event) {
                    if ($event == "names") {
                        this.sortNames();
                    }
                    else {
                        this.sortPrice();
                    }
                };
                CatalogApp.prototype.filtr = function ($event) {
                    console.log($event.target.value);
                };
                CatalogApp.prototype.sortNames = function () {
                    this.products.sort(function (obj, obj2) {
                        return obj.name[0].charCodeAt() - obj2.name[0].charCodeAt();
                    });
                };
                CatalogApp.prototype.sortPrice = function () {
                    this.products.sort(function (obj1, obj2) {
                        return obj2.price - obj1.price;
                    });
                };
                CatalogApp = __decorate([
                    angular2_1.Component({
                        selector: 'catalog-app'
                    }),
                    angular2_1.View({
                        templateUrl: 'src/template/starting-app.html',
                        directives: [angular2_1.NgFor, Product_1.ProductComponent, Sort_1.SortComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CatalogApp);
                return CatalogApp;
            })();
            exports_1("default", CatalogApp);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90cy9jb21wb25lbnRzL1N0YXJ0aW5nQXBwLnRzIl0sIm5hbWVzIjpbIkNhdGFsb2dBcHAiLCJDYXRhbG9nQXBwLmNvbnN0cnVjdG9yIiwiQ2F0YWxvZ0FwcC5zb3J0IiwiQ2F0YWxvZ0FwcC5maWx0ciIsIkNhdGFsb2dBcHAuc29ydE5hbWVzIiwiQ2F0YWxvZ0FwcC5zb3J0UHJpY2UiXSwibWFwcGluZ3MiOiJBQUFBLGtEQUFrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTWxEO2dCQUFBQTtvQkFRSUMsU0FBSUEsR0FBR0EscUNBQXFDQSxDQUFDQTtvQkFDN0NBLGFBQVFBLEdBQUdBLENBQUNBLElBQUlBLGlCQUFPQSxDQUFDQSxRQUFRQSxFQUFFQSxLQUFLQSxFQUFFQSxhQUFhQSxFQUFFQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFFQSxHQUFHQSxDQUFDQTt3QkFDbkVBLElBQUlBLGlCQUFPQSxDQUFDQSxRQUFRQSxFQUFFQSxLQUFLQSxFQUFFQSxnQkFBZ0JBLEVBQUVBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLEdBQUdBLENBQUNBO3dCQUMvREEsSUFBSUEsaUJBQU9BLENBQUNBLFdBQVdBLEVBQUVBLEtBQUtBLEVBQUVBLGdCQUFnQkEsRUFBRUEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsR0FBR0EsQ0FBQ0E7d0JBQ2xFQSxJQUFJQSxpQkFBT0EsQ0FBQ0EsU0FBU0EsRUFBRUEsS0FBS0EsRUFBRUEsVUFBVUEsRUFBRUEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsR0FBR0EsQ0FBQ0E7d0JBQzFEQSxJQUFJQSxpQkFBT0EsQ0FBQ0EsUUFBUUEsRUFBRUEsTUFBTUEsRUFBRUEsZUFBZUEsRUFBRUEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBd0J6RUEsQ0FBQ0E7Z0JBdEJHRCx5QkFBSUEsR0FBSkEsVUFBS0EsTUFBTUE7b0JBQ1BFLEVBQUVBLENBQUFBLENBQUNBLE1BQU1BLElBQUlBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBO3dCQUNuQkEsSUFBSUEsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0E7b0JBQ3JCQSxDQUFDQTtvQkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ0pBLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBLENBQUNBO29CQUNyQkEsQ0FBQ0E7Z0JBQ0xBLENBQUNBO2dCQUVERiwwQkFBS0EsR0FBTEEsVUFBTUEsTUFBTUE7b0JBQ1JHLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2dCQUNyQ0EsQ0FBQ0E7Z0JBRURILDhCQUFTQSxHQUFUQTtvQkFDSUksSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBU0EsR0FBR0EsRUFBRUEsSUFBSUE7d0JBQ2pDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ2hFLENBQUMsQ0FBQ0EsQ0FBQUE7Z0JBQ05BLENBQUNBO2dCQUNESiw4QkFBU0EsR0FBVEE7b0JBQ0lLLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLFVBQVNBLElBQUlBLEVBQUVBLElBQUlBO3dCQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO29CQUNuQyxDQUFDLENBQUNBLENBQUFBO2dCQUNOQSxDQUFDQTtnQkFwQ0xMO29CQUFDQSxvQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLGFBQWFBO3FCQUMxQkEsQ0FBQ0E7b0JBQ0RBLGVBQUlBLENBQUNBO3dCQUNGQSxXQUFXQSxFQUFFQSxnQ0FBZ0NBO3dCQUM3Q0EsVUFBVUEsRUFBRUEsQ0FBQ0EsZ0JBQUtBLEVBQUVBLDBCQUFnQkEsRUFBRUEsb0JBQWFBLENBQUNBO3FCQUN2REEsQ0FBQ0E7OytCQStCREE7Z0JBQURBLGlCQUFDQTtZQUFEQSxDQXJDQSxBQXFDQ0EsSUFBQTtZQXJDRCxnQ0FxQ0MsQ0FBQSIsImZpbGUiOiJzcmMvdHMvY29tcG9uZW50cy9TdGFydGluZ0FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cblxuaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIE5nRm9yfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1Byb2R1Y3QsIFByb2R1Y3RDb21wb25lbnR9IGZyb20gJy4vUHJvZHVjdCc7XG5pbXBvcnQge1NvcnRDb21wb25lbnR9IGZyb20gJy4vU29ydCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY2F0YWxvZy1hcHAnXG59KVxuQFZpZXcoe1xuICAgIHRlbXBsYXRlVXJsOiAnc3JjL3RlbXBsYXRlL3N0YXJ0aW5nLWFwcC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbTmdGb3IsIFByb2R1Y3RDb21wb25lbnQsIFNvcnRDb21wb25lbnRdXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0YWxvZ0FwcCB7XG4gICAgbGluayA9IFwiaHR0cDovL2xvcmVtcGl4ZWwuY29tLzQwMC8yMDAvZm9vZC9cIjtcbiAgICBwcm9kdWN0cyA9IFtuZXcgUHJvZHVjdChcImphYmxrb1wiLCAnMTIzJywgXCJkbyBqZWR6ZW5pYVwiLCB0aGlzLmxpbmsgKycxJyksXG4gICAgICAgIG5ldyBQcm9kdWN0KFwiYW5hbmFzXCIsICcyMzMnLCBcImRvIGZkIGplZHplbmlhXCIsIHRoaXMubGluayArICcyJyksXG4gICAgICAgIG5ldyBQcm9kdWN0KFwid2lub2dyb25hXCIsICc1MDAnLCBcImRvIGRmIGplZHplbmlhXCIsIHRoaXMubGluayArICczJyksXG4gICAgICAgIG5ldyBQcm9kdWN0KFwiZ3J1c3prYVwiLCAnMTAwJywgXCJ0YWthIHRhbVwiLCB0aGlzLmxpbmsgKyAnNCcpLFxuICAgICAgICBuZXcgUHJvZHVjdChcIndpc25pYVwiLCAnMTAwMCcsICd0YWtpIHRhbSBvd29jJywgdGhpcy5saW5rICsgJzUnKV07XG5cbiAgICBzb3J0KCRldmVudCkge1xuICAgICAgICBpZigkZXZlbnQgPT0gXCJuYW1lc1wiKSB7XG4gICAgICAgICAgICB0aGlzLnNvcnROYW1lcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zb3J0UHJpY2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbHRyKCRldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZygkZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBzb3J0TmFtZXMgKCkge1xuICAgICAgICB0aGlzLnByb2R1Y3RzLnNvcnQoZnVuY3Rpb24ob2JqLCBvYmoyKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqLm5hbWVbMF0uY2hhckNvZGVBdCgpIC0gb2JqMi5uYW1lWzBdLmNoYXJDb2RlQXQoKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgc29ydFByaWNlICgpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0cy5zb3J0KGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmoyLnByaWNlIC0gb2JqMS5wcmljZTtcbiAgICAgICAgfSlcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
