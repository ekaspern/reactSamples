This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

- [Updating to New Releases](#updating-to-new-releases)
- [Sending Feedback](#sending-feedback)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
- [Displaying Lint Output in the Editor](#displaying-lint-output-in-the-editor)
- [Installing a Dependency](#installing-a-dependency)
- [Importing a Component](#importing-a-component)
- [Adding a Stylesheet](#adding-a-stylesheet)
- [Post-Processing CSS](#post-processing-css)
- [Adding Images and Fonts](#adding-images-and-fonts)
- [Using the `public` Folder](#using-the-public-folder)
- [Adding Bootstrap](#adding-bootstrap)
- [Adding Flow](#adding-flow)
- [Adding Custom Environment Variables](#adding-custom-environment-variables)
- [Can I Use Decorators?](#can-i-use-decorators)
- [Integrating with a Node Backend](#integrating-with-a-node-backend)
- [Proxying API Requests in Development](#proxying-api-requests-in-development)
- [Using HTTPS in Development](#using-https-in-development)
- [Generating Dynamic `<meta>` Tags on the Server](#generating-dynamic-meta-tags-on-the-server)
- [Running Tests](#running-tests)
  - [Filename Conventions](#filename-conventions)
  - [Command Line Interface](#command-line-interface)
  - [Version Control Integration](#version-control-integration)
  - [Writing Tests](#writing-tests)
  - [Testing Components](#testing-components)
  - [Using Third Party Assertion Libraries](#using-third-party-assertion-libraries)
  - [Initializing Test Environment](#initializing-test-environment)
  - [Focusing and Excluding Tests](#focusing-and-excluding-tests)
  - [Coverage Reporting](#coverage-reporting)
  - [Continuous Integration](#continuous-integration)
  - [Disabling jsdom](#disabling-jsdom)
  - [Experimental Snapshot Testing](#experimental-snapshot-testing)
- [Deployment](#deployment)
  - [Building for Relative Paths](#building-for-relative-paths)
  - [GitHub Pages](#github-pages)
  - [Heroku](#heroku)
  - [Modulus](#modulus)
  - [Netlify](#netlify)
  - [Now](#now)
  - [Surge](#surge)
- [Something Missing?](#something-missing)

## Updating to New Releases

Create React App is divided into two packages:

* `create-react-app` is a global command-line utility that you use to create new projects.
* `react-scripts` is a development dependency in the generated projects (including this one).

You almost never need to update `create-react-app` itself: it delegates all the setup to `react-scripts`.

When you run `create-react-app`, it always creates the project with the latest version of `react-scripts` so you’ll get all the new features and improvements in newly created apps automatically.

To update an existing project to a new version of `react-scripts`, [open the changelog](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md), find the version you’re currently on (check `package.json` in this folder if you’re not sure), and apply the migration instructions for the newer versions.

In most cases bumping the `react-scripts` version in `package.json` and running `npm install` in this folder should be enough, but it’s good to consult the [changelog](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md) for potential breaking changes.

We commit to keeping the breaking changes minimal so you can upgrade `react-scripts` painlessly.

## Sending Feedback

We are always open to [your feedback](https://github.com/facebookincubator/create-react-app/issues).

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  gulpfile.js
  public/
    index.html
    favicon.ico
  scrCoffee/
    App.coffee
    index.coffee
  css/
    index.css
    App.css
  images/
    logo.svg
```
***** Building this App using CoffeeScript ***

Install Node.js
Need version 4 or higher

nvm install v4.0.0

https://facebook.github.io/react/docs/installation.html

Once node is installed create a new React.js application and then you can create your app - “hello-world"

npm install -g create-react-app

create-react-app hello-world

npm start

http://localhost:3000/

Install CoffeScript.js

npm install -g coffee-script

Save as a dependency
npm install --save coffee-script

Install Gulp as a task manager

sudo npm install —global gulp

npm install --save-dev gulp-install

npm install --save-dev gulp-coffee gulp-concat gulp-util

npm install --save-dev gulp-watch

npm install --save-dev gulp-changed

npm install --save-dev react browserify reactify vinyl-source-stream

Create gulpfile.js to manage tasks - need to convert CoffeeScript to JS

gulpfile.js:

var gulp = require('gulp');
var coffee = require('gulp-coffee');
var changed = require('gulp-changed');

var paths;

paths = {
  coffee: {
    src: '/srcCoffee',
    dest: '/src'
  }
};

var coffeeCompile, coffeeCompileChanged;

coffeeCompile = function(done) {
  var cb;
  cb = typeof done === 'function' ? done : function() {};
  gulp.src('./srcCoffee/**/*.coffee').pipe(coffee({
    bare: true
  })).pipe(changed('./srcCoffee')).pipe(gulp.dest('./src')).on('end', function() {
    return cb();
  });
  return null;
};

coffeeCompileChanged = function(file) {
  var destPath, sliceStart, srcPath, subPath;
  sliceStart = file.path.search(paths.coffee.src) + paths.coffee.src.length;
  subPath = file.path.slice(sliceStart);
  srcPath = "." + paths.coffee.src + subPath;
  destPath = ("." + paths.coffee.dest + subPath).split('/');
  destPath.pop();
  destPath = destPath.join('/');
  return gulp.src(srcPath).pipe(coffee({
    bare: true
  })).pipe(gulp.dest(destPath)).on('end', function() {
    return console.log("compiled: " + subPath);
  });
};

gulp.task('coffee-watch', function(done) {
  gulp.watch("srcCoffee/**/*.coffee", function(file) {
    console.log(file.type + ": " + file.path);
    return coffeeCompileChanged(file);
  });
  return coffeeCompile(done);
});

gulp.task('default', ['coffee-watch']);


Now we can run gulp at the command line to convert our CoffeeScript files to JS

gulp

After we run gulp we can start the application 

npm start
