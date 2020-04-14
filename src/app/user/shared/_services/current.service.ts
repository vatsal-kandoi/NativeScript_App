import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class CurrentService {
    current: Subject<number>;

    constructor() {
        this.current = new Subject();
    }

    change(num: number){
        this.current.next(num)
    }   
}