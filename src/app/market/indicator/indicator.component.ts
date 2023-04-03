import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-indicator',
    templateUrl: './indicator.component.html',
    styleUrls: ['./indicator.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class IndicatorComponent {

    @Input()
    fillPercent = 0;

    @Input()
    productName!: string;

    calcProgressColor() {
        if (this.fillPercent <= 40) return 'warn';
        return 'primary';
    }

    getTooltip() {
        return `Stock of '${ this.productName }' is ${ Math.round(this.fillPercent) }%`;
    }
}
