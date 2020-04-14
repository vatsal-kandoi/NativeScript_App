import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { CurrentService } from "../shared/_services/current.service";


@Component({
    selector: "Dashboard",
    styles: [
        `
        .purple{
            background-color: rgb(84, 0, 117);
        }
        .white{
            background-color: white;
        }
        .bar{
            height: 70;
        }
        `
    ],
    templateUrl: "./dashboard.component.html"
})
export class DashboardComponent implements OnInit {
    index: number;
    constructor(private page: Page, private current: CurrentService) {
        this.current.current.subscribe((val) => {
            this.index = val;
        })
    }

    ngOnInit(): void {
    }
}
