import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreationStatus = 'No server was created!';
    serverCreated = false;
    serverName = '';
    servers = [{serverId: 5, serverStatus: 'online', serverName: 'Boop'}, {serverId: 11, serverStatus: 'offline', serverName: 'Beep'}];

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit() {
    }

    onCreateServer() {
        this.serverCreated = true;
        this.servers.push({serverId: Math.round(Math.random() * 150), serverStatus: 'online', serverName: this.serverName});
        this.serverCreationStatus = 'Server [' + this.serverName + "] was created!";
    }

    // onUpdateServerName($event: Event) {
    //     let value = (<HTMLInputElement>$event.target).value;
    //     this.serverName = value;
    // }
}