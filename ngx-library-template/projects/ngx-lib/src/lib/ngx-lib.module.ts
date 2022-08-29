import { NgModule } from '@angular/core';
import { ExampleComponent } from './components/example/example.component';
import { BackgroundDirective } from './directives/background.directive';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
    declarations: [
        ExampleComponent,
        SafePipe,
        BackgroundDirective
    ],
    imports: [
    ],
    exports: [
        ExampleComponent,
        SafePipe,
        BackgroundDirective
    ]
})
export class NgxLibModule { }
