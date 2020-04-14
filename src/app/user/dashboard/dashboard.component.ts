import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";


@Component({
    selector: "Dashboard",
    templateUrl: "./dashboard.component.html"
})
export class DashboardComponent implements OnInit {

    constructor(private page: Page) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
    }
}
