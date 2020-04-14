import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptFormsModule, NativeScriptHttpClientModule } from "nativescript-angular";
import { NavbarComponent } from "./user/shared/navbar/navbar.component";
import { SettingsComponent } from "./user/settings/settings.component";
import { HomeComponent } from "./user/home/home.component";
import { LandingComponent } from './default/landing/landing.component';
import { UserAuthComponent } from './default/auth/auth/auth.component';
import { SelectorComponent } from "./default/auth/selector/selector.component";
import { PreviousComponent } from "./default/auth/previous/previous.component";
import { AuthComponent } from "./default/auth/auth.component";
import { DashboardComponent } from "./user/dashboard/dashboard.component";
import { InfobarComponent } from "./user/shared/infobar/infobar.component"

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
        SettingsComponent,
        HomeComponent,
        LandingComponent,
        UserAuthComponent,
        SelectorComponent,
        PreviousComponent,
        AuthComponent,
        DashboardComponent,
        InfobarComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
