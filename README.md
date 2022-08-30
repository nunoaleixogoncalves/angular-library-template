# NGX library template - ngx-lib

This is a template for the development of Angular libraries - ex. **ngx-lib**

eslint & docker

Angular.json has 2 projects one of type **library** and other of type **application** working together to develop and test your next angular library

- **library** is your npm package where you have all the stuff for your angular library (located on folder projects/ngx-lib)
- **application** consumes and uses your library in a real use case scenario for testing

Uses **--watch** flag in npm build command (of the ngx-lib) and **npm link** to simulate your library as a npm dependency of the main project!
putting the build folder of the library (dist/ngx-lib) into the node_modules as ngx-lib!

## DEVELOP with docker

`docker-compose up -d`

go to <http://localhost>

## DEVELOP without docker

`sudo chown -R ${USER} /usr/local/lib` - just for linux and probably mac

`sudo chown -R ${USER} /root` - just for linux and probably mac

`cd ngx-library-template`

terminal 1:

`npm install && npm run build:ngx-lib && npm run link:lib && npm run build:lib:watch`

terminal 2:

`npm run start`

go to <http://localhost:4200>

## ngx-lib examples/placeholders

Examples on the ngx-lib:

- Component - ExampleComponent
- Directive - BackgroundDirective
- Pipe - SafePipe
- Service - UtilsService
- SCSS - base.scss
- Assets (img, js, css)

these examples are a guideline so you can see how it works!

Now you can delete all the components on the **projects/ngx-lib/src/lib** folder and create your own.

To change the name of the library you can replace all of mentions of ngx-lib or just the package.json "name" entry (**projects/ngx-lib/package.json**)

To publish your creation you can run `npm run publish:ngx-lib`

# NgxLibraryTemplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
