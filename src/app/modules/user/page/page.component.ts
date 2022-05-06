// Angular
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// RxJs
import { pipe } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
    ) { }

    public id: string = '';

    ngOnInit(): void {
        this.route.params.pipe(first()).toPromise()
            .then((params: any) => {
                // console.log('Params: ', params);

                if (params.id && params.id !== '') {
                    this.id = params.id;
                    console.log('Object Id: ', this.id);
                } else {
                    console.error('Error! No params found');
                }
            });
    }
}
