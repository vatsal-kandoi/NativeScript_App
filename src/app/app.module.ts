import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptFormsModule, NativeScriptHttpClientModule } from "nativescript-angular";
import { NavbarComponent } from "./user/shared/navbar/navbar.component";
import { BrowseComponent } from "./user/browse/browse.component";
import { HomeComponent } from "./user/home/home.component";
import { LandingComponent } from './default/landing/landing.component';
import { AuthComponent } from './default/auth/auth.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        BrowseComponent,
        HomeComponent,
        LandingComponent,
        AuthComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
