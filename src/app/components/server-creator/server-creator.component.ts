import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MyServer} from "../../my-server";
import {LoggingService} from "../../services/logging.service";

@Component({
    selector: 'app-server-creator',
    templateUrl: './server-creator.component.html',
    styleUrls: ['./server-creator.component.css'],
})
export class ServerCreatorComponent implements OnInit {
    @Output() serverCreated = new EventEmitter<MyServer>();

    allowNewServer = false;
    serverCreationStatus = 'No server was created!';
    isServerCreated = false;
    serverName = '';

    constructor(private loggingService: LoggingService) {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit() {
    }

    onCreateServer() {
        this.isServerCreated = true;
        this.serverCreationStatus = 'Server [' + this.serverName + "] was created!";
        this.serverCreated.emit({
            serverId: Math.round(Math.random() * 150),
            serverStatus: 'online',
            serverName: this.serverName
        });
        this.loggingService.logStatusChange('online');
    }

    onUpdateServerName($event: Event) {
         //let value = (<HTMLInputElement>$event.target).value;
         //this.serverName = value;
        this.isServerCreated = false;
    }
}
