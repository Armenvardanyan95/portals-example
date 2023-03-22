import { Injectable } from "@angular/core";
import { Portal } from "@angular/cdk/portal";
import { Subject } from "rxjs";
import { filter, map } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class PortalService {
    private readonly portal$ = new Subject<{portal: Portal<unknown> | null, name: string}>();

    sendPortal(name: string, portal: Portal<unknown> | null) {
        this.portal$.next({portal, name});
    }

    getPortal(name: string) {
        return this.portal$.pipe(
            filter(portalRef => portalRef.name === name),
            map(portalRef => portalRef.portal),
        );
    }
}