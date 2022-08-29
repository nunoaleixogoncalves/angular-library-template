# NgxLibraryTemplate

this is a template for the development of Angular libraries - ex. ngx-lib

eslint & docker/traefik

# DEVELOP with docker

docker-compose up -d

go to <http://localhost>

# DEVELOP without docker

for develop without docker you have to:

`sudo chown -R ${USER} /usr/local/lib`
`sudo chown -R ${USER} /root`

`cd ngx-library-template`

terminal 1:

`npm install && npm run build:ngx-lib && npm run link:lib && npm run build:lib:watch`

terminal 2:

`npm run start`

go to <http://localhost:4200>

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
