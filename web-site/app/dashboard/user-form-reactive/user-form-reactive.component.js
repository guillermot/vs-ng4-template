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
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var UserFormReactiveComponent = (function () {
    function UserFormReactiveComponent(builder, activatedRoute, router, http) {
        var _this = this;
        this.builder = builder;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
        this.firstname = new forms_1.FormControl("", forms_1.Validators.required);
        this.lastname = new forms_1.FormControl("", forms_1.Validators.required);
        this.email = new forms_1.FormControl("", forms_1.Validators.required);
        this.form = this.builder.group({
            'firstname': this.firstname,
            'lastname': this.lastname,
            'email': this.email
        });
        this.activatedRoute
            .params
            .map(function (params) { return params['id']; })
            .subscribe(function (val) {
            if (val != '' && val != undefined) {
                _this.id = parseInt(val);
                _this.load(_this.id);
            }
        });
    }
    UserFormReactiveComponent.prototype.load = function (id) {
        var _this = this;
        this.http.get('/Home/users/' + id)
            .map(function (res) { return res.json(); })
            .subscribe(function (val) {
            if (val.TotalItems > 0) {
                var user = val.Items[0];
                _this.firstname.setValue(user.Firstname);
                _this.lastname.setValue(user.Lastname);
                _this.email.setValue(user.Email);
            }
        });
    };
    UserFormReactiveComponent.prototype.onSubmit = function () {
        //event.preventDefault();
        console.log('Hellooo');
        console.log(this.form.value);
        $.notify("User saved!!");
        this.router.navigate(['grid-data', 1]);
    };
    return UserFormReactiveComponent;
}());
UserFormReactiveComponent = __decorate([
    core_1.Component({
        selector: 'user-form-reactive',
        templateUrl: './user-form-reactive.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.ActivatedRoute,
        router_1.Router,
        http_1.Http])
], UserFormReactiveComponent);
exports.UserFormReactiveComponent = UserFormReactiveComponent;
//# sourceMappingURL=user-form-reactive.component.js.map