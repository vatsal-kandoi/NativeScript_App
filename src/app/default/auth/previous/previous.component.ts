import { Component, OnInit } from "@angular/core";
import { StorageService } from "../../../shared/_services/storage.service";
import { Page } from "tns-core-modules/ui/page/page";
import { UserTypeService } from "../../_services/user.service";
import { Router } from "@angular/router";
@Component({
    selector: "Previous",
    styleUrls: [
        './previous.css'
    ],
    templateUrl: "./previous.component.html"
})
export class PreviousComponent implements OnInit {
    selected = false;
    constructor (private user: UserTypeService, private page: Page, private router: Router) {
        this.page.actionBarHidden = true;
    }
    ngOnInit() {

    }
    set(val) {
        this.user.set(val);
        this.selected = true;
    }
    nav() {
        this.router.navigate(['select']);
    }
}
