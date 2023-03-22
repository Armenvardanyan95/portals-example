import { PortalModule } from "@angular/cdk/portal";
import { AsyncPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { PortalService } from "../services/portal.service";

@Component({
    selector: 'app-header',
    standalone: true,
    template: `
        <mat-toolbar>
            <span>Header</span>
            <ng-template [cdkPortalOutlet]="portal$ | async"></ng-template>
        </mat-toolbar>
    `,
    imports: [MatToolbarModule, PortalModule, AsyncPipe],
})
export class HeaderComponent {
    private readonly portalService = inject(PortalService);
    portal$ = this.portalService.getPortal('header');
}