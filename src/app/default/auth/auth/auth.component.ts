import { Component, OnInit } from "@angular/core";
import { fromObject } from "tns-core-modules/data/observable";
import { UserTypeService } from "../../_services/user.service";
import { Page } from "tns-core-modules/ui/page/page";
import { Router } from "@angular/router";


@Component({
    selector: "UserAuth",
    styleUrls: [
        "./auth.component.css"
    ],
    templateUrl: "./auth.component.html"
})
export class UserAuthComponent implements OnInit {
    signup: boolean;
    signupText: string;
    general: boolean;
    userType: string;

    constructor (private user: UserTypeService,private page: Page, private router: Router) {
        this.page.actionBarHidden = true;
    }
    ngOnInit(): void {
        this.userType = this.user.type;
        this.signup = false;
        this.signupText = 'Login';
        /** To check for logged in user */
        this.general = false;
    }
    change() {
        this.signup = !this.signup;
        if (this.signupText == 'Login') {
            this.signupText = 'Signup'
        }
        else {
            this.signupText = 'Login';
        }
    }
    switch(str: string) {
        this.general = true;
        if (str == 'login') {
            this.signup = false;
            this.signupText = 'Login'
        } else {
            this.signup = true;
            this.signupText = 'Signup'
        }
    }
}
