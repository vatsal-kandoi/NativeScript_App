import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { LandingComponent } from "./default/landing/landing.component";
import { SelectorComponent } from "./default/auth/selector/selector.component";
import { AuthComponent } from "./default/auth/auth.component";
import { PreviousComponent } from "./default/auth/previous/previous.component";
import { UserAuthComponent } from "./default/auth/auth/auth.component";

const routes: Routes = [
    { path: "", component: LandingComponent },
/** Auth routes */
    { path: "auth", component: AuthComponent},
    { path: "previous", component: PreviousComponent},
    { path: "select", component: SelectorComponent},
    { path: "login", component: UserAuthComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
