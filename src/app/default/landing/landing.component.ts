import { Component, OnInit } from "@angular/core";
import { StorageService } from "../../shared/_services/storage.service";
import { Page } from "tns-core-modules/ui/page/page";
import { Router } from "@angular/router";
@Component({
    selector: "Landing",
    styleUrls: [
        './landing.css'
    ],
    templateUrl: "./landing.component.html"
})
export class LandingComponent implements OnInit {
    isFirstTime: boolean;
    constructor (private storage: StorageService, private page: Page, private router: Router) {
        this.page.actionBarHidden = true;
    }
    ngOnInit() {
        // this.isFirstTime = this.storage.checkInitialOpen();
        this.isFirstTime = true;
        if (!this.isFirstTime) {
            this.router.navigate(['/auth'])
        }
    }
    nav() {
        this.router.navigate(['/auth'])        
    }
}
