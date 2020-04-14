import { Component, OnInit } from "@angular/core";
import { fromObject } from "tns-core-modules/data/observable";
import { StorageService } from "~/app/shared/_services/storage.service";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page/page";


@Component({
    selector: "Auth",
    styleUrls: [
    ],
    templateUrl: "./auth.component.html"
})
export class AuthComponent implements OnInit {
    constructor(private storage: StorageService, private page: Page, private router: Router) {
        this.page.actionBarHidden = true;
    }
    ngOnInit(): void {
        // if (this.storage.checkPreviousLogin) {}
        this.router.navigate(['/previous'])
        // this.router.navigate(['/selector']);
    }
    change() {
    }
    switch() {
    }
}
