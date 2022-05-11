// Angular
import { Component, OnInit, ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import { Router } from '@angular/router';

// App
import { ObjectService, MarkerModel, MarkersInfoModel } from '../../../services/object.service';

// TODO remove to service
const CITY_CENTER = { lat: 50.57743527945256, lng: 30.24427711473898 };

const MAP_OPTIONS = {
    mapTypeId: 'roadmap',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 150,
    minZoom: 1,
    fullscreenControl: false,
    mapTypeControl: false,
    streetViewControl: false,
};

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    @ViewChild(GoogleMap, { static: false }) map: any;
    @ViewChild(MapInfoWindow, { static: false }) infoWindow: any;
    @ViewChildren('markerElem') markerElemList: any;

    constructor(
        private router: Router,
        public objectService: ObjectService,
    ) { }

    // Map
    public zoom = 14;
    public center = CITY_CENTER;
    public options = MAP_OPTIONS;

    // Markers
    public currentMarkerPosition: number = 0;
    public markers: MarkerModel[] = [];
    public objectInfo = new MarkersInfoModel({});

    private getObjectIndex(id: string): number {
        let index = 0;
        this.markers.forEach((item, i) => item.id === id ? index = i : null);

        return index;
    }

    public ngOnInit() {
        this.markers = this.objectService.getObjects();
        // console.log('Markers: ', this.markers);
        this.center = this.markers[this.currentMarkerPosition].position;
    }

    public openInfo(markerMapObject: any, dataModel: any): void {
        //console.log('Marker', dataModel);
        //console.log('Marker info', markerMapObject);

        this.infoWindow.close();
        this.infoWindow.open(markerMapObject);
        this.objectInfo = new MarkersInfoModel(dataModel);
        this.center = dataModel.position;
        this.currentMarkerPosition = this.getObjectIndex(dataModel.id);

        // TODO add current marker visualisation
        // markerElem.marker.icon.url = './assets/check.svg';
    }

    public next(): void {
        this.currentMarkerPosition < this.markers.length - 1 ? this.currentMarkerPosition++ : this.currentMarkerPosition = 0;
        this.openInfo(this.markerElemList.toArray()[this.currentMarkerPosition], this.markers[this.currentMarkerPosition]);
    }
    public prev(): void {
        this.currentMarkerPosition > 0 ? this.currentMarkerPosition-- : this.currentMarkerPosition = this.markers.length - 1;
        this.openInfo(this.markerElemList.toArray()[this.currentMarkerPosition], this.markers[this.currentMarkerPosition]);
    }

    public zoomIn(): void {
        if (this.zoom < this.options.maxZoom) this.zoom++
    }

    public zoomOut(): void {
        if (this.zoom > this.options.minZoom) this.zoom--
    }

    public mapPositionChanged(): void {
        this.infoWindow.close();
    }
}
