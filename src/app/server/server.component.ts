import {Component, Input, ViewEncapsulation} from '@angular/core';
import {MyServer} from "../my-server";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ServerComponent {
    @Input("server") element: MyServer;

    constructor() {
    }
}
