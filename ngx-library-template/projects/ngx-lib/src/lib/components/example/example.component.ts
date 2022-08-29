import { Component, Input } from '@angular/core';

@Component({
    selector: 'ngx-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {

    @Input() inputExample!: string;

    constructor() { }
}
