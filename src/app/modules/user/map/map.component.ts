const SVG_Marker = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "blue",
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
};

const TEST_MARKERS = [
    {
        position: {
            lat: 51.673858,
            lng: 7.815982,
        },

        title: 'Школа Title',
        label: '',
        description: 'Благодійна волонтерська організація, яка займається відновленням Києва, Київської Області та інших областей України після деокупації.',
        image: 'https://images.1plus1.ua/uploads/articles/000/891/361/39c2b746fbcbedc7f200926ba0f56484_720x530.jpg?v=1647855541',

        draggable: true,

        options: {
            draggable: false,
            icon: {
                url:  './assets/school.svg',
                scaledSize: new google.maps.Size(50, 50), // scaled size
                origin: new google.maps.Point(0,0), // origin
                anchor: new google.maps.Point(0, 0) // anchor
            },
            //icon: SVG_Marker
        },
        data: {
            text: 'text'
        }
    },
    {
        position: {
            lat: 51.623238,
            lng: 7.815912,
        },

        title: 'Садик Title',
        label: '',
        description: 'Благодійна волонтерська організація, яка займається відновленням Києва, Київської Області та інших областей України після деокупації.',
        image: 'https://images.1plus1.ua/uploads/articles/000/891/361/39c2b746fbcbedc7f200926ba0f56484_720x530.jpg?v=1647855541',

        draggable: true,

        options: {
            draggable: false,
            icon: {
                url: './assets/house.svg',
                scaledSize: new google.maps.Size(50, 50), // scaled size
                origin: new google.maps.Point(0,0), // origin
                anchor: new google.maps.Point(0, 0) // anchor
            },
        },
        data: {
            text: 'text'
        }
    },
]

const CITY_CENTER = {
    lat: 51.673858,
    lng: 7.835982,
};

// Angular
import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    @ViewChild(MapInfoWindow, { static: false }) infoWindow: any;

    constructor() { }

    // TODO Add type
    public markers = TEST_MARKERS

    public zoom = 13;
    public center = CITY_CENTER;
    public options = {
        mapTypeId: 'roadmap',
        zoomControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        maxZoom: 15,
        minZoom: 8,
    }

    // TODO Add type
    public object = {
        title: '',
        description: '',
        image: ''
    }

    public ngOnInit() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.center = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            }
        })
    }

    public openInfo(markerElem: any, data: any) {
        // console.log(data);
        this.object.title = data.title;
        this.object.description = data.description;
        this.object.image = data.image;

        this.infoWindow.open(markerElem)
    }

    public zoomIn() {
        if (this.zoom < this.options.maxZoom) this.zoom++
    }

    public zoomOut() {
        if (this.zoom > this.options.minZoom) this.zoom--
    }
}
