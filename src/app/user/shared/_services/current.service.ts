import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class CurrentService {
    current: Subject<number>;
    override: Subject<string>;
    done: Subject<boolean>;
    constructor() {
        this.done = new Subject();
        this.current = new Subject();
        this.override = new Subject();
    }
    back() {
        this.done.next(true);
    }
    changeToName(val) {
        this.override.next(val);
    }
    change(num: number){
        this.current.next(num)
    }   
}