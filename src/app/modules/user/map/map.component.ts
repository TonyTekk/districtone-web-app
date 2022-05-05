const SVG_Marker = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "blue",
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
};

const CITY_CENTER = {
    lat: 50.57743527945256,
    lng: 30.24427711473898,
};

// Angular
import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';

// App
import { ObjectService } from '../../../services/object.service';

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

    // TODO Add type
    public markers = this.objectService.getObjects();

    public zoom = 14;
    public center = CITY_CENTER;
    public options = {
        mapTypeId: 'roadmap',
        zoomControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        maxZoom: 150,
        minZoom: 1,
    }

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
        // console.log(data);
        this.object.title = data.title;
        this.object.description = data.description;
        this.object.image = data.image;
        this.object.goal = data.goal;

        this.infoWindow.open(markerElem)

        //console.log(markerElem);
        markerElem.marker.icon.url = './assets/check.svg';
    }

    public zoomIn() {
        if (this.zoom < this.options.maxZoom) this.zoom++
    }

    public zoomOut() {
        if (this.zoom > this.options.minZoom) this.zoom--
    }
}
