import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Response } from '@angular/http';

declare var $: any;

@Component({
    selector: 'user-form-reactive',
    templateUrl: './user-form-reactive.component.html'
})
export class UserFormReactiveComponent {
    form: FormGroup;
    idControl: FormControl;
    firstname: FormControl;
    lastname: FormControl;
    email: FormControl;
    id: number;

    constructor(private builder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private http: Http) {

        this.idControl = new FormControl("0");
        this.firstname = new FormControl("", Validators.required);
        this.lastname = new FormControl("", Validators.required);
        this.email = new FormControl("", Validators.required);

        this.form = this.builder.group(
            {
                'id': this.idControl,
                'firstname': this.firstname,
                'lastname': this.lastname,
                'email': this.email
            }
        );

        this.activatedRoute
            .params
            .map(params => params['id'])
            .subscribe(val => {
                if (val != '' && val != undefined) {
                    this.id = parseInt(val);
                    this.load(this.id);
                }
            });
    }

    load(id: number) {

        this.http.get('/Home/users/' + id)
            .map(res => res.json())
            .subscribe(val => {
                if (val.TotalItems > 0) {
                    var user = val.Items[0];

                    this.idControl.setValue(user.Id)
                    this.firstname.setValue(user.Firstname)
                    this.lastname.setValue(user.Lastname);
                    this.email.setValue(user.Email);
                }
            });
    }

    onSubmit() {
        var user = this.form.value;
        console.log(user);

        if (user.id > 0) {
            this.http
                .put('/Home/users', user)
                .map(resp => resp.json)
                .subscribe(
                () => console.log('next'),
                err => console.error(err),
                () => {
                    $.notify("User updated!!");
                    this.router.navigate(['grid-data', 1]);
                });
        }
        else
        {
            this.http
                .post('/Home/users', user)
                .map(resp => resp.json)
                .subscribe(
                () => console.log('next'),
                err => console.error(err),
                () => {
                    $.notify("User created!!");
                    this.router.navigate(['grid-data', 1]);
                });
        }
    }
}
