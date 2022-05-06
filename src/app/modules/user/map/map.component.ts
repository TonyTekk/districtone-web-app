// Angular
import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';

// App
import { ObjectService } from '../../../services/object.service';

// TODO remove to service
const CITY_CENTER = {
    lat: 50.57743527945256,
    lng: 30.24427711473898,
};

//TODO remove to options
const MAP_OPTIONS = {
    mapTypeId: 'roadmap',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 150,
    minZoom: 1,
};

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    @ViewChild(GoogleMap, { static: false }) map: any;
    @ViewChild(MapInfoWindow, { static: false }) infoWindow: any;

    constructor(
        public objectService: ObjectService,
    ) { }

    // TODO Add call to backend
    public markers = this.objectService.getObjects();

    public zoom = 14;
    public center = CITY_CENTER;
    public options = MAP_OPTIONS;

    // TODO Add type
    public object = {
        title: '',
        description: '',
        image: '',
        goal: 0,
    }

    public ngOnInit() {
        // TODO
        navigator.geolocation.getCurrentPosition((position) => {
            this.center = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            }
        });
    }

    public openInfo(markerElem: any, data: any) {
        console.log('Info: ', data);

        this.object.title = data.title;
        this.object.description = data.description;
        this.object.image = data.image;
        this.object.goal = data.goal;

        this.infoWindow.open(markerElem)

        //console.log(markerElem);
        //markerElem.marker.icon.url = './assets/check.svg';
    }

    public zoomIn() {
        if (this.zoom < this.options.maxZoom) this.zoom++
    }

    public zoomOut() {
        if (this.zoom > this.options.minZoom) this.zoom--
    }
}
