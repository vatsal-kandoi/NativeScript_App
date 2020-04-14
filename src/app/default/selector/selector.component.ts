import { Component, OnInit } from "@angular/core";
import { StorageService } from "../../shared/_services/storage.service";
import { Page } from "tns-core-modules/ui/page/page";
import { UserTypeService } from "../_services/user.service";
@Component({
    selector: "Select",
    styleUrls: [
        './selector.css'
    ],
    templateUrl: "./selector.component.html"
})
export class SelectorComponent implements OnInit {
    selected = false;
    constructor (private user: UserTypeService) {
    }
    ngOnInit() {

    }
    set(val) {
        this.user.set(val);
        this.selected = true;
    }
}
