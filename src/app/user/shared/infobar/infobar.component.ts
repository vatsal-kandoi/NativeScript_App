import { Component, OnInit } from "@angular/core";
import { CurrentService } from "../_services/current.service";

@Component({
    selector: "Infobar",
    styleUrls: [
        './infobar.css'
    ],
    templateUrl: "./infobar.component.html"
})
export class InfobarComponent implements OnInit {
    text: string;
    constructor(private current: CurrentService) {
    }
    back() {
        this.text = 'Dashboard';
        this.current.back()
    }
    ngOnInit() {
        this.current.override.subscribe((val) => {
            this.text = val;
        });
        this.current.current.subscribe((val) => {
            if (val == 0) {
                this.text = 'Home';
            }
            if (val == 1) {
                this.text = 'Dashboard';
            }
            if (val == 2) {
                this.text = 'Settings';
            }
        })
    }
}