// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// App
import { UserComponent } from './user.component';
import { MapComponent } from './map/map.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            {
                path     : 'map',
                component: MapComponent,
            },
            {
                path     : 'page/:id',
                component: PageComponent,
            },
            {
                path: '',
                redirectTo: 'map',
                pathMatch: 'full'
            },
        ]
    },
];
@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ]
})
export class UserRoutingModule { }
