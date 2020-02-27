# Convo 2.0
**Convo** is a team collaboration tool, founded in 2011. The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Table of Contents
 2. [Installation](#installation)
 3. [Usage]()
 4. [Running unit tests]()
 5. [Configuring IDE]()
 6.  [Tools]()
 7. [Code style guide]()
 8. [Application Structure]()
 9. [Localisation]()
 10. [License]()
 

## Installation
You'll need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com/)) installed on your computer.
````
#Clone this repository
$ git clone https://[username]@bitbucket.org/badrzamanconvo/webapp.git

#Go into the repository
$ cd path_to_your_repository

#Install dependencies
$ npm install
````

## Usage

````
#Install Angular CLI using (if not installed yet);
$ npm install -g @angular/cli

#Go into the repository
$ cd path_to_your_repository

#Run ng serve command to run it on dev server
$ ng serve --open

#this will open your project in the default browser
````

## Running unit tests
Running tests and generation of code coverage reports can be performed through angular cli.

````
#Running angular test
$ ng test
(This will generate test, serve them on local server and shows test reports in html files)

#Running test with code coverage reports
$ ng test --code-coverage

(This will run test as well as create a direcdtory ./coverage from where we can run index.html to see code coverage reports) 
````

## Configuring IDE
To make sure consistency in the code style standards we need to configure our IDE so that everyone can follow the same code style guideline.

````
#To configure IDE for typescript
#Use tslint.json file and configure your IDE to pick setting it.
#E.g. For webstorm;
Go to; 
	Webstorm -> Preferences -> Languages and frameworks -> typescript -> TSLint -> Enable
Note: Webstorm will automatically find path to tslint.json if not you can do that by browse option under Enable radio button. 
````

## Tools

 - **JavaScript Framework**
	 - Angular 6.1.5
 - **UI Framework**
	 - Yet to be decided
 - **CSS Preprocessors**
	 - SCSS
 - **Unit testing and code coverage**
	 - Karma
	 - Jasmine
	 - Istanbul

## Code style guide

- **Files**
	- **Do** define one thing, such as a service or component, per file.
	- **Do** use dashes to separate words in the descriptive name E.g. hero-list
	- **Do** use dots to separate the descriptive name from the type i.e. [desriptive-name].[type].[ext] E.g. hero-list.component.ts
	- **Do** use lower case for file names
	- **Consider** limiting files to 400 lines of code.
- **Functions**
	- **Do** define small functions
	- **Consider** limiting functions to no more than 15 lines.
	- **Consider** writing function names in camelCase E.g. thisIsMyFunction()
- **Classes**
	- **Do** use upper camel case when naming classes E.g. HeroClass
- **Interfaces**
	- **Do** name an interface using upper camel case E.g. HeroInterface
	- **Consider** using interface for data models.
- **Variables and constants**
	- **Do** declare all local variables with either `const` or `let`. Use const by default, unless a variable needs to be reassigned. The `var` keyword must not be used.
	- **Do** writing type for each variable E.g. let employeeName: string;
	- **Do**  use lower camel case to name properties, methods, variables and constants.
	- **Avoid**  prefixing private properties and methods with an underscore.
- **Formatting**
	- **Indentation**
		- **Do** keep 2 spaces indentation
	- **Spacing**
		- **Consider** space before each '{' i.e. in functions, if statement, loops etc E.g. testFunc() {, if () {, for () {
		- **Consider** a line space between each logical block
	- **Import statements**
		- **Consider**  leaving one empty line between third party imports and application imports.
		- **Consider**  listing import lines alphabetized by the module.
		- **Consider**  listing destructured imported symbols alphabetically.

## Application Structure

 - App
	 - Auth Module
		 - Services
		 - LoginComponent
		 - Models
	 - Dashboard
		 - Services
		 - Models
		 - WelcomeComponent
	 - Shared Module
		 - Services
		 - Models

## Localisation
We are using [ngx-translate/core](https://www.npmjs.com/package/@ngx-translate/core)  and [ngx-translate/http-loader](https://www.npmjs.com/package/@ngx-translate/http-loader) for localisation.  A comprehensive guide to this library can be found [here](https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular-app-with-ngx-translate).

## License
Convo 2.0 is licensed to Convo Inc.