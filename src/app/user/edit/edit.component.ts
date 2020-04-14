import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { View } from "tns-core-modules/ui/page/page";
import { SwipeGestureEventData } from "tns-core-modules/ui/gestures";
import { CurrentService } from "../shared/_services/current.service";

@Component({
    selector: "Edit",
    styleUrls: [
        './edit.css'
    ],
    templateUrl: "./edit.component.html"
})
export class EditComponent implements OnInit {
    index: number;
    editMode: boolean;
    editName: string;
    users = [
        { name: 'Vatsal Kandoi'}
    ]
    searches = [
        'Hello how are yo'
    ]
    nameInput: string;
    constructor(private current: CurrentService) {
    }
    add() {
        if (this.nameInput != null) {
            this.users.push({ name: this.nameInput});
            this.nameInput = null;
        }
    }
    addToCourse() {
        if (this.nameInput != null) {
            this.searches.push(this.nameInput);
            this.nameInput = null;
        }
    }
    ngOnInit(): void {
        this.current.done.subscribe((val) => {
            if (val) {
                this.editMode = false;                
            }
        })
        this.editMode = false;
    }
    onSwipe(args: SwipeGestureEventData) {
        if (args.direction == 1) {
            this.editMode = true
            this.current.changeToName('Vatsal')
            this.editName = 'course'
        }
    }
    show() {
        this.editMode = true;
        this.current.changeToName('Vatsal')
    }
    select(val) {
        this.editName = val;
    }
}
