"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
// README: This examples shows you how to implement a Template Driven Forms 
var UserFormComponent = (function () {
    function UserFormComponent() {
        this.model = {};
    }
    // model: UserEntity;
    UserFormComponent.prototype.ngOnInit = function () {
        console.log("on init");
        //this.model = {
        //    firstname: "John",
        //    lastname: "Lennon",
        //    email: "john.lennon@thebeatles.com"
        //};
        //console.log('validate!');
        //$("#user-form-validation").validate();
        //$("#user-form-validation").validator();
        //this.model = new UserEntity("John", "Lennon", "john.lennon@thebeatles.com");
    };
    UserFormComponent.prototype.click = function () {
        console.log("submit");
        console.log(JSON.stringify(this.model));
        //alert(val);
    };
    return UserFormComponent;
}());
UserFormComponent = __decorate([
    core_1.Component({
        selector: 'user-form',
        templateUrl: './user-form.component.html'
    })
], UserFormComponent);
exports.UserFormComponent = UserFormComponent;
var UserEntity = (function () {
    function UserEntity(firstname, lastname, email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
    }
    return UserEntity;
}());
exports.UserEntity = UserEntity;
//# sourceMappingURL=user-form.component.js.map