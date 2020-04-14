import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class UserTypeService {
    type: string;
    
    set(val) {
        this.type = val;
    }
}