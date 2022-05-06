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
            lat: 50.57760872346211,
            lng:  30.252368464097035
        },

        title: 'Школа N12',
        label: '',
        description: 'Благодійна волонтерська організація, яка займається відновленням Києва, Київської Області та інших областей України після деокупації.',
        image: 'https://images.1plus1.ua/uploads/articles/000/891/361/39c2b746fbcbedc7f200926ba0f56484_720x530.jpg?v=1647855541',
        goal: '80000',

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
            lat: 50.58153272348597,
            lng: 30.24185312400303,
        },

        title: 'Садик',
        label: '',
        description: 'Благодійна волонтерська організація, яка займається відновленням Києва, Київської Області та інших областей України після деокупації.',
        image: 'https://mrpl.city/uploads/news/968x504/pymuny74rqepnlds.jpg',
        goal: '240000',

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

// Angular
import { Injectable } from '@angular/core';

@Injectable()
export class ObjectService {
    public constructor() { }

    // TODO Add type
    public getObjects(): any [] {
        return TEST_MARKERS;
    }
}
