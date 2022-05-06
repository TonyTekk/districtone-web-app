// Angular
import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import { Router } from '@angular/router';

// App
import { ObjectService, MarkersInfoModel } from '../../../services/object.service';

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
        private router: Router,
    ) { }

    // TODO Add call to backend
    public markers = this.objectService.getObjects();

    public zoom = 14;
    public center = CITY_CENTER;
    public options = MAP_OPTIONS;

    // TODO create model
    public objectInfo = new MarkersInfoModel({});

    public ngOnInit() {
        // TODO
        navigator.geolocation.getCurrentPosition((position) => {
            this.center = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            }
        });
    }

    public openInfo(markerElem: any, data: any): void {
        // TODO focus on map center
        console.log(this.map.getCenter().lat(), this.map.getCenter().lng());
        this.center = {
            lat: this.map.getCenter().lat(),
            lng: this.map.getCenter().lng(),
        }

        // console.log('Info: ', data);
        this.objectInfo = new MarkersInfoModel(data);
        this.infoWindow.open(markerElem)

        // console.log(markerElem);
        // markerElem.marker.icon.url = './assets/check.svg';
    }

    public zoomIn(): void {
        if (this.zoom < this.options.maxZoom) this.zoom++
    }

    public zoomOut(): void {
        if (this.zoom > this.options.minZoom) this.zoom--
    }
}
