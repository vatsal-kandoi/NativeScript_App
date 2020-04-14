import { Component, OnInit } from "@angular/core";
import { fromObject } from "tns-core-modules/data/observable";


@Component({
    selector: "Auth",
    styleUrls: [
        "./auth.component.css"
    ],
    templateUrl: "./auth.component.html"
})
export class AuthComponent implements OnInit {
    signup: boolean;
    signupText: string;
    general: boolean;

    userType: string;

    constructor() { }
    ngOnInit(): void {
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
