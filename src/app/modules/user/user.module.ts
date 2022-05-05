// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App
import { UserComponent } from './user.component';
import { MapComponent } from './map/map.component';
import { PageComponent } from './page/page.component';
import { UserRoutingModule } from './user-routing.module';
import { ObjectService } from '../../services/object.service';

// Other
import { GoogleMapsModule } from '@angular/google-maps'

@NgModule({
    declarations: [
        UserComponent,
        MapComponent,
        PageComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        GoogleMapsModule
    ],
    providers: [
        ObjectService
    ]
})
export class UserModule { }
