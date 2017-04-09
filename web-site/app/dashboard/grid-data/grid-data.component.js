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
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
var GridDataComponent = (function () {
    function GridDataComponent(http, route, router) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.router = router;
        this.route
            .params
            .map(function (params) { return params['page']; })
            .subscribe(function (page) {
            _this.page = parseInt(page);
            _this.loadGrid();
        });
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
    GridDataComponent.prototype.deleteUser = function (user) {
        var http = this.http;
        var router = this.router;
        var self = this;
        swal({
            title: "Are you sure?",
            text: "You are about to delete the following user: " + user.Firstname + " " + user.Lastname,
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: true
        }, function () {
            http.delete('/Home/users/' + user.Id)
                .subscribe(function () { return console.log('next'); }, function (err) { return console.error(err); }, function () {
                $.notify("User delete!!");
                self.page = 1;
                self.loadGrid();
            });
        });
    };
    GridDataComponent.prototype.loadGrid = function () {
        var _this = this;
        this.http.get('/Home/Users?page=' + this.page + '&pageSize=' + this.pageSize)
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
        });
    };
    return GridDataComponent;
}());
GridDataComponent = __decorate([
    core_1.Component({
        selector: 'grid-data',
        templateUrl: './grid-data.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute, router_1.Router])
], GridDataComponent);
exports.GridDataComponent = GridDataComponent;
//# sourceMappingURL=grid-data.component.js.map