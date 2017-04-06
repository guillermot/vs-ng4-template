import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

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

    constructor(private http: Http) {
        this.page = 1;
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

    loadGrid() {
        this.http.get('http://localhost:49376/Home/Users?page=' + this.page + '&pageSize=' + this.pageSize)
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
            });
    }
}
