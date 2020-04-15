import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { View } from "tns-core-modules/ui/page/page";
import { SwipeGestureEventData } from "tns-core-modules/ui/gestures";
import { CurrentService } from "../../shared/_services/current.service";
import { UserTypeService } from "~/app/default/_services/user.service";

@Component({
    selector: "EditUser",
    styleUrls: [
        './edit.css'
    ],
    templateUrl: "./edit.component.html"
})
export class EditUserComponent implements OnInit {
    index: number;
    editMode: boolean;
    editName: string;
    searches = [
        'Hello how are yo'
    ]
    nameInput: string;
    userType: string;
    constructor(private user: UserTypeService) {
        this.userType = this.user.type;
    }
    add() {
        if (this.nameInput != null) {
            this.searches.push(this.nameInput);
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
        this.editMode = false;
    }
    onSwipe(args: SwipeGestureEventData) {
        if (args.direction == 1) {
            this.editMode = true
            this.editName = 'course'
        }
    }
    back(event) {
        this.editMode = false;
        console.log(this.editMode)
    }
    show() {
        this.editMode = true;
    }
    select(val) {
        this.editName = val;
    }
}
