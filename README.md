# Development Approach

Finally managed to put in the extra 2 hours to sort the test out Brett.

Please use this Github link to see the code, unit tests and e2e tests -  https://github.com/coreyhub/SearchPitches
Please use this url to see the functionality - https://coreyhub.github.io/SearchPitches/search

I have attached Search Pitches Wireframe.pdf to this email which shows a quick represent of how I broke down the component. 
First there is app component which is the outer most component, and within that is the search and search details component.
I could have also done a search results component to separate further.

In additions, I have used Reactive forms as I wanted to follow a model driven and immutability approach to manage the state of the form. This is also great for testing since the data is meant to be consistent and predictable when requested using Observables. 

By using the Angular Style guide created by John Papa, I wanted demonstrated awareness of best practices, coding standards and producing easily readable code 
Also, I have used BEM convention for writing CSS. As well, the use of Tslint was to check the Typescript code quality and Prettier was also used to allow for consistent code style throughout development.
I have followed TDD approach, where I wrote initial tests which failed and then I wrote a simple test for it to past and then I refactored the functional code further.

Next, I chose Angular Material which is a popular UI/UX frameworks for Angular because the toolset
adheres to modern web design principles and is best practice throughout the angular community. The controls I chose was the datepicker and button, which allow the user to choose a date from and date to range to see a list of pitch slots.
This was due to fact that i could use this the filter starts and ends for the initial api call after the user selected the date ranges for the slots their required for their pitch as seen here in this example https://api-v2.mylp.info/pitches/32990/slots?filter[starts]=2019-01-04&filter[ends]=2019-01-04

The intention was to build modular, reusable, maintainable, readable and scalable code within the give 2-4 hours.

I have highlighted in the code further test that could have been done, given more time. Another functional component
could have been the filter component, where the user could filter the pitch slots by price and availability. This still needs development. Thank you.

# SearchPitches

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# SearchPitches
