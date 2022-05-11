const TEST_MARKERS = [
    {
        id: '1',
        position: { lat: 50.5660536, lng:  30.2657559 },
        title: 'Дитячий садок №17 "Веселка"',
        address: 'вулиця Рекунова, 3б, Гостомель, Київська обл., 08289',
        label: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        preview: './assets/test/test_1.jpg',
        goal: '80000',
        icon: './assets/house.svg',
    },
    {
        id: '2',
        position: { lat: 50.58153272348597, lng: 30.24185312400303 },
        title: 'Садик',
        label: '',
        description: 'Благодійна волонтерська організація, яка займається відновленням Києва, Київської Області та інших областей України після деокупації.',
        preview: '',
        goal: '240000',
        icon: './assets/school.svg',
    },
    {
        id: '3',
        position: { lat: 50.56930756909896, lng: 30.265541323281195 },
        title: 'Ірпінська ЗОШ №13',
        address: 'вулиця Рекунова, 38, Гостомель, Київська обл., 08289',
        label: '',
        description: 'Благодійна волонтерська організація, яка займається відновленням Києва, Київської Області та інших областей України після деокупації.',
        preview: '',
        goal: '140000',
        icon: './assets/house.svg',
    },
]

// Angular
import { Injectable } from '@angular/core';

// Types
export type ObjectType = 'home' | 'school';

export class MarkerModel {
    public id: string | null;
    // Add type
    public position: any | null;
    // General info
    public title: string;
    public address: string | null;
    public label: string;
    public description: string;
    public preview: string;
    public goal: number | null;

    // Options
    public options: any;

    public constructor(item: any) {
        item.id ? this.id = item.id : this.id = null;
        item.position ? this.position = item.position: this.position = null;

        // General info
        item.title ? this.title = item.title : this.title = 'No title';
        item.address ? this.address = item.address : this.address = null;
        item.label ? this.label = item.label: this.label = '';
        item.description ? this.description = item.description : this.description = 'No description';
        item.preview && item.prev !== '' ? this.preview = item.preview : this.preview = './assets/no_image.png';
        item.goal ? this.goal = item.goal : this.goal = null;

        // Options
        if (item.icon) {
            this.options = {
                icon: {
                    url: item.icon,
                    scaledSize: new google.maps.Size(50, 50), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(0, 0) // anchor
                }
            }
        } else {
            this.options = {
                icon: {
                    url:  './assets/house.svg',
                    scaledSize: new google.maps.Size(50, 50), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(0, 0) // anchor
                }
            }
        }
    }
}

export class MarkersInfoModel {
    public id: string | null;
    public title: string;
    public address: string | null;
    public description: string;
    public preview: string;
    public goal: number | null;

    public constructor(item: any) {
        item.id ? this.id = item.id : this.id = null;
        item.title ? this.title = item.title : this.title = 'No title';
        item.address ? this.address = item.address : this.address = null;
        item.description ? this.description = item.description : this.description = 'No description';
        item.preview && item.prev !== ''  ? this.preview = item.preview : this.preview = './assets/no_image.png';
        item.goal ? this.goal = item.goal : this.goal = null;
    }
}

@Injectable()
export class ObjectService {
    public constructor() { }

    public getObjects(): MarkerModel[]  {
        const result:any[] = [];

        TEST_MARKERS.forEach((item) => {
            result.push(new MarkerModel(item));
        });

        return result;
    }

    public getObjectById(id: any): any {
        return TEST_MARKERS[0];
    }
}
