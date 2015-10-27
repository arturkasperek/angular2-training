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
    var SortComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            SortComponent = (function () {
                function SortComponent() {
                    this.clicked = new angular2_1.EventEmitter();
                }
                SortComponent.prototype.sortByNames = function () {
                    this.clicked.next("names");
                };
                SortComponent.prototype.sortByPrices = function () {
                    this.clicked.next("prices");
                };
                SortComponent = __decorate([
                    angular2_1.Component({
                        outputs: ['clicked'],
                        selector: 'sort-btn'
                    }),
                    angular2_1.View({
                        templateUrl: 'src/template/Sort.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], SortComponent);
                return SortComponent;
            })();
            exports_1("SortComponent", SortComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90cy9jb21wb25lbnRzL1NvcnQudHMiXSwibmFtZXMiOlsiU29ydENvbXBvbmVudCIsIlNvcnRDb21wb25lbnQuY29uc3RydWN0b3IiLCJTb3J0Q29tcG9uZW50LnNvcnRCeU5hbWVzIiwiU29ydENvbXBvbmVudC5zb3J0QnlQcmljZXMiXSwibWFwcGluZ3MiOiJBQUFBLGtEQUFrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSWxEO2dCQUFBQTtvQkFRSUMsWUFBT0EsR0FBR0EsSUFBSUEsdUJBQVlBLEVBQUVBLENBQUNBO2dCQVNqQ0EsQ0FBQ0E7Z0JBUEdELG1DQUFXQSxHQUFYQTtvQkFDSUUsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7Z0JBQy9CQSxDQUFDQTtnQkFFREYsb0NBQVlBLEdBQVpBO29CQUNJRyxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtnQkFDaENBLENBQUNBO2dCQWhCTEg7b0JBQUNBLG9CQUFTQSxDQUFDQTt3QkFDUEEsT0FBT0EsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7d0JBQ3BCQSxRQUFRQSxFQUFFQSxVQUFVQTtxQkFDdkJBLENBQUNBO29CQUNEQSxlQUFJQSxDQUFDQTt3QkFDRkEsV0FBV0EsRUFBRUEsd0JBQXdCQTtxQkFDeENBLENBQUNBOztrQ0FXREE7Z0JBQURBLG9CQUFDQTtZQUFEQSxDQWpCQSxBQWlCQ0EsSUFBQTtZQWpCRCx5Q0FpQkMsQ0FBQSIsImZpbGUiOiJzcmMvdHMvY29tcG9uZW50cy9Tb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxuXG5pbXBvcnQge0NvbXBvbmVudCwgVmlldywgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5cbkBDb21wb25lbnQoe1xuICAgIG91dHB1dHM6IFsnY2xpY2tlZCddLFxuICAgIHNlbGVjdG9yOiAnc29ydC1idG4nXG59KVxuQFZpZXcoe1xuICAgIHRlbXBsYXRlVXJsOiAnc3JjL3RlbXBsYXRlL1NvcnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU29ydENvbXBvbmVudCB7XG4gICAgY2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHNvcnRCeU5hbWVzKCkge1xuICAgICAgICB0aGlzLmNsaWNrZWQubmV4dChcIm5hbWVzXCIpO1xuICAgIH1cblxuICAgIHNvcnRCeVByaWNlcygpIHtcbiAgICAgICAgdGhpcy5jbGlja2VkLm5leHQoXCJwcmljZXNcIik7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
