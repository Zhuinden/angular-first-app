import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    @Input() element: {serverId: number, serverStatus: string, serverName: string};

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
