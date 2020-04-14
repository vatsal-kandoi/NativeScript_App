import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { CurrentService } from "../_services/current.service"

@Component({
    selector: "Navbar",
    styleUrls: [
        './navbar.css'
    ],
    templateUrl: "./navbar.component.html"
})
export class NavbarComponent implements OnInit {
    @ViewChild("nav",{ static: true}) SBref: ElementRef;

    index: number;
    constructor(private current: CurrentService) {
    }
    ngOnInit() { 
        this.index = 0;
    }
    ngAfterViewInit() {
        this.SBref.nativeElement.selectedIndex=this.index;
        this.current.change(this.index);
    }
    change(evt: any) {
        this.index = this.SBref.nativeElement.selectedIndex;
        this.current.change(this.index);
    }
}