![cf](https://i.imgur.com/7v5ASc8.png) Lab 27: CFgram Login and Sign Up
======

# CFgram: Abs' Gallery App
This application allows users to create accounts, add, and store personal images. This app persists user login information.

## Open Website in Browser
In terminal tab, enter:
1. `npm install` to install application resources.
2. `rm -rf build` to remove build, if necessary.
2. `npm run build-watch` to run webpack server
3. Open on `http://localhost:8080/`

## Login and Sign Up functionality with MongoDB
1. In terminal tab, enter `mongod`
2. In new tab, enter `mongo`
* To view dbs, enter `show dbs`
* To use local dbs, enter `use cfgram-backend`
* To `show collections`
* To view dbs, enter `db.users.find()`
* To clear dbs, enter `db.users.drop()`

## Run Test
In terminal tab, enter:
1. `npm install` to install application resources.
2. `npm run test` to run tests using jasmine.
--------------------
## Application Resources
* "angular"
* "babel-core"
* babel-loader"
* "babel-preset-es2015"
* "cowsay-browser"
* "css-loader"
* "extract-text-webpack-plugin"
* "html-webpack-plugin"
* "node-sass"
* "sass-loader"
* "style-loader"
* "webpack"

## Testing Resources
* "angular-mocks"
* "jasmine"
* "jasmine-core"
* "karma"
* "karma-chrome-launcher"
* "karma-jasmine"
* "karma-webpack"
* "webpack-dev-server"
