import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { MapComponent } from './map/map.component';
import { PageComponent } from './page/page.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
    declarations: [
        UserComponent,
        MapComponent,
        PageComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule
    ]
})
export class UserModule { }
