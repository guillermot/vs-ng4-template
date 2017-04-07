import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

declare var swal: any;
declare var $: any;

@Component({
    selector: 'grid-data',
    templateUrl: './grid-data.component.html'
})
export class GridDataComponent implements OnInit {

    users: any;
    page: number;
    pageSize: number;
    result: any;
    totalItems: number;
    totalPages: number;
    pages: any[];

    pageObservable: Observable<number>;

    constructor(private http: Http, private route: ActivatedRoute) {

        this.route
            .params
            .map(params => params['page'])
            .subscribe((page) => {
                this.page = parseInt(page);
                this.loadGrid();
            });

        this.pageSize = 3;
    }

    ngOnInit() {
        this.loadGrid();
        console.log('grid-data');
    }

    changePage(newPage: number) {
        console.log('new page: ' + newPage);
        this.page = newPage;
        this.loadGrid();
    }

    deleteUser(user: any) {
        swal({
            title: "Are you sure?",
            text: "You are about to delete the following user: " + user.Firstname + " " + user.Lastname,
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: true
        },
            function () {
                $.notify("User delete!!");
            });
    }

    loadGrid() {
        this.http.get('/Home/Users?page=' + this.page + '&pageSize=' + this.pageSize)
            .map(function (res: Response) {
                return res.json();
            })
            .subscribe(val => {
                this.result = val;

                this.totalItems = this.result.TotalItems;
                this.users = this.result.Items;
                this.totalPages = Math.ceil(this.totalItems / this.pageSize);
                this.pages = Array(this.totalPages).fill(1, this.totalPages);
                console.log(this.pages);
                console.log('totalPages = ' + this.totalPages);
                console.log('totalItems = ' + this.totalItems);
                console.log('page = ' + this.page);
            });
    }
}
