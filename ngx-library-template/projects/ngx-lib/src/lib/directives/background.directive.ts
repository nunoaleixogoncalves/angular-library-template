import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[ngxBackground]'
})
export class BackgroundDirective {

    @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
    @Input() color = 'transparent';

    constructor() { }

    @HostListener('mouseenter')
    onMouseOver() {
        this.backgroundColor = this.color;
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.backgroundColor = 'transparent';
    }
}