import {Component, OnInit} from '@angular/core';
import {MyServer} from "../my-server";

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    servers: MyServer[] = [{
        serverId: 5,
        serverStatus: 'online',
        serverName: 'Boop'
    }, {
        serverId: 11,
        serverStatus: 'offline',
        serverName: 'Beep'
    }];

    ngOnInit() {
    }

    onServerCreated(event: MyServer) {
        this.servers.push(event);
    }
}