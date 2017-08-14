import {Injectable} from "@angular/core";

@Injectable()
export class LoggingService {
    logStatusChange(status: string) {
        console.log('Server status changed to [' + status + ']');
    }
}