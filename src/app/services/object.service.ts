const TEST_MARKERS = [
    {
        position: {
            lat: 50.57760872346211,
            lng:  30.252368464097035
        },

        title: 'Школа Title',
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

        title: 'Садик Title',
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
