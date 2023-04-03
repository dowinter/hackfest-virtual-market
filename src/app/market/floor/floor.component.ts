import {ApplicationRef, ChangeDetectorRef, Component} from '@angular/core';
import {SensoreventsService} from "../services/sensorevents.service";
import {ProductCategory, ProductEvent} from "../model/ProductEvent";
import {Product} from "../model/Product";
import {flatMap, mergeMap} from "rxjs";
import {ChangeDetection} from "@angular/cli/lib/config/workspace-schema";


@Component({
    selector: 'app-floor',
    templateUrl: './floor.component.html',
    styleUrls: ['./floor.component.scss']
})
export class FloorComponent {

    productsByCategory: { [key in ProductCategory]: Product[] } = {
        [ProductCategory.DAIRY]: [],
        [ProductCategory.BAKED_GOODS]: [],
        [ProductCategory.VEGETABLES]: [],
    }

    constructor(private sensoreventsService: SensoreventsService, private changeDetector: ChangeDetectorRef) {
        this.sensoreventsService.getInitialStock().pipe(
            mergeMap(events => {
                events.forEach(event => this.handleEvent(event));
                return this.sensoreventsService.createEventSource();
            })
        ).subscribe(event => this.handleEvent(event));
    }

    private handleEvent(event: ProductEvent) {
        console.log(`Handling ${JSON.stringify(event)}`)
        const productsForCategory = this.productsByCategory[event.productCategory];
        const toUpdate = productsForCategory.find(p => p.id === event.productId);

        if (!toUpdate) {
            productsForCategory.push({
                id: event.productId,
                name: event.productName,
                stockPercent: event.sensorFillData,
                category: event.productCategory
            })
        } else {
            toUpdate.stockPercent = event.sensorFillData;
        }

        this.changeDetector.detectChanges();
    }

    productsForCategory(category: ProductCategory) {
        return this.productsByCategory[category]
    }


}
