import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    constructor() { }

    testFuntion() {
        alert('this is the test function of ngx utilsService');
    }

}
