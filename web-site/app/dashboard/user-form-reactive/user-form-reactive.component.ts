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
    firstname: FormControl;
    lastname: FormControl;
    email: FormControl;
    id: number;

    constructor(private builder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private http: Http) {

        this.firstname = new FormControl("", Validators.required);
        this.lastname = new FormControl("", Validators.required);
        this.email = new FormControl("", Validators.required);

        this.form = this.builder.group(
            {
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

                    this.firstname.setValue(user.Firstname)
                    this.lastname.setValue(user.Lastname);
                    this.email.setValue(user.Email);
                }
            });
    }

    onSubmit() {
        //event.preventDefault();
        console.log('Hellooo');
        console.log(this.form.value);

        $.notify("User saved!!");

        this.router.navigate(['grid-data', 1])
    }
}
