"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var GridDataComponent = (function () {
    function GridDataComponent(http) {
        this.http = http;
        this.page = 1;
        this.pageSize = 3;
    }
    GridDataComponent.prototype.ngOnInit = function () {
        this.loadGrid();
        console.log('grid-data');
    };
    GridDataComponent.prototype.changePage = function (newPage) {
        console.log('new page: ' + newPage);
        this.page = newPage;
        this.loadGrid();
    };
    GridDataComponent.prototype.loadGrid = function () {
        var _this = this;
        this.http.get('http://localhost:49376/Home/Users?page=' + this.page + '&pageSize=' + this.pageSize)
            .map(function (res) {
            return res.json();
        })
            .subscribe(function (val) {
            _this.result = val;
            _this.totalItems = _this.result.TotalItems;
            _this.users = _this.result.Items;
            _this.totalPages = Math.ceil(_this.totalItems / _this.pageSize);
            _this.pages = Array(_this.totalPages).fill(1, _this.totalPages);
            console.log(_this.pages);
            console.log('totalPages = ' + _this.totalPages);
            console.log('totalItems = ' + _this.totalItems);
        });
    };
    return GridDataComponent;
}());
GridDataComponent = __decorate([
    core_1.Component({
        selector: 'grid-data',
        templateUrl: './grid-data.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], GridDataComponent);
exports.GridDataComponent = GridDataComponent;
//# sourceMappingURL=grid-data.component.js.map