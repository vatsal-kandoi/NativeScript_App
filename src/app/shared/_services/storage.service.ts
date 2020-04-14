import { Injectable } from "@angular/core";
import * as  appSettings from "tns-core-modules/application-settings";

@Injectable({
    providedIn: "root"
})
export class StorageService {
    
    checkInitialOpen(): boolean {
        if (appSettings.getNumber('initialised') == undefined || appSettings.getNumber('initialised') == null ) {
            return true;
        }
        return false;
    }
}