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
var UserFormReactiveComponent = (function () {
    function UserFormReactiveComponent(builder) {
        this.firstname = new forms_1.FormControl("", forms_1.Validators.required);
        this.lastname = new forms_1.FormControl("", forms_1.Validators.required);
        this.email = new forms_1.FormControl("", forms_1.Validators.required);
        this.form = builder.group({
            'firstname': this.firstname,
            'lastname': this.lastname,
            'email': this.email
        });
    }
    UserFormReactiveComponent.prototype.onSubmit = function () {
        //event.preventDefault();
        console.log('Hellooo');
        console.log(this.form.value);
    };
    return UserFormReactiveComponent;
}());
UserFormReactiveComponent = __decorate([
    core_1.Component({
        selector: 'user-form-reactive',
        templateUrl: './user-form-reactive.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], UserFormReactiveComponent);
exports.UserFormReactiveComponent = UserFormReactiveComponent;
//# sourceMappingURL=user-form-reactive.component.js.map