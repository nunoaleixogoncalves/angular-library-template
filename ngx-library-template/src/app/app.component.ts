import { Component } from '@angular/core';
import { UtilsService } from 'ngx-lib';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(readonly utilsService: UtilsService) { }

    onClick() {
        this.utilsService.testFuntion();
    }
}
