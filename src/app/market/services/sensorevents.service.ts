import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, switchMap} from "rxjs";
import {ProductEvent} from "../model/ProductEvent";
import {MarketResponse} from "../model/MarketResponse";

@Injectable({
    providedIn: 'root'
})
export class SensoreventsService {

    baseUrl = "https://hackfest-market-manager-git-viada-production.apps.wa6eqszp.uksouth.aroapp.io"
    // baseUrl = ""

    constructor(private http: HttpClient) {

    }

    getInitialStock() : Observable<ProductEvent[]> {
        return this.http.get<MarketResponse>(this.baseUrl + "/markets/705f92c1-57ab-437f-b6de-eceb38f22d44")
            .pipe(
                map(response => response.lastMessages)
            );
    }

    createEventSource(): Observable<ProductEvent> {
        const eventSource = new EventSource(this.baseUrl + "/products/705f92c1-57ab-437f-b6de-eceb38f22d44");

        return new Observable(observer => {
            eventSource.onmessage = event => {
                const productEvent: ProductEvent = JSON.parse(event.data);
                observer.next(productEvent);
            };
        });
    }
}
