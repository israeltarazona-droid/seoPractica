import { CommonModule } from "@angular/common";
import { NgModule, LOCALE_ID } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PagesRoutingModule } from "./pages.routing.module";


@NgModule({
    imports: [
        CommonModule,
        PagesRoutingModule,
        RouterModule,
    ],
    providers: [
        { provide: LOCALE_ID, useValue: "es" },
    ]
})
export class PagesModule { }
