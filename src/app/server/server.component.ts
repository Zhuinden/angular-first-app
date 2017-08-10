import {Component, Input} from '@angular/core';
import {MyServer} from "../my-server";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    @Input("server") element: MyServer;

    constructor() {
    }

    getServerId() {
        return this.element.serverId;
    }

    getServerStatus() {
        return this.element.serverStatus;
    }

    getServerName() {
        return this.element.serverName;
    }
}
