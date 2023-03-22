import { Component } from "@angular/core";
import { PortalDirective } from "../directives/portal.directive";

@Component({
    selector: "about",
    standalone: true,
    template: `
        This is a page
        <div *portal="'header'">This is custom header content</div>
    `,
    imports: [PortalDirective],
})
export class AboutComponent {
}