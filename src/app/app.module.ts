import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ServerComponent} from './components/server/server.component';
import {ServersComponent} from './components/servers/servers.component';
import {ServerCreatorComponent} from './components/server-creator/server-creator.component';
import {HighlightDirective} from "./directives/highlight.directive";
import {UnlessDirective} from "./directives/unless.directive";
import {DropdownDirective} from "./directives/dropdown.directive";
import {LoggingService} from "./services/logging.service";

@NgModule({
    declarations: [
        AppComponent,
        ServerComponent,
        ServersComponent,
        ServerCreatorComponent,
        HighlightDirective,
        UnlessDirective,
        DropdownDirective
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [LoggingService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
