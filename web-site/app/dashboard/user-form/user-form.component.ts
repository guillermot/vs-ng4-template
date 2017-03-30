import { Component, OnInit } from '@angular/core';

declare var $: any;

// README: This examples shows you how to implement a Template Driven Forms 

@Component({
    selector: 'user-form',
    templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {
    
    model: Object = {};
    // model: UserEntity;

    ngOnInit() {
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
    }

    click() {
        console.log("submit");
        console.log(JSON.stringify(this.model));


        //alert(val);
    }
}

export class UserEntity {
    constructor(private firstname: string, private lastname: string, private email: string) { }
}




