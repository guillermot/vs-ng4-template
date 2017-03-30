import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    selector: 'user-form-reactive',
    templateUrl: './user-form-reactive.component.html'
})
export class UserFormReactiveComponent {
    form: FormGroup;
    firstname = new FormControl("", Validators.required);
    lastname = new FormControl("", Validators.required);
    email = new FormControl("", Validators.required);

    constructor(builder: FormBuilder) {
        this.form = builder.group(
            {
                'firstname': this.firstname,
                'lastname': this.lastname,
                'email': this.email
            }
        );
    }

    onSubmit() {
        //event.preventDefault();
        console.log('Hellooo');
        console.log(this.form.value);
    }
}
