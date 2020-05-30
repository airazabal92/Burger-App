![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

# Burger Log App

## Description

An application that uses the MVC design pattern to create a burger logger. The app uses Node and MySQL to query and route data and Handlebars to generate HTML. The user will be prompted for a burger that they would like to devour. Once the user submits their input, the burger will be added to the "To Be Eaten" list. Clicking on the "Devour" button will move the burger over to the "Devoured" section. The data is saved for the user to be able to reference which burgers are on their wish list and which have already been consumed.

<img src="https://i.imgur.com/xAwOlLF.png">

## Table of Contents

- [Application](#application)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Questions](#questions)
- [License](#license)

## Application

To view the deployed application on Heroku, visit:
<a href="https://note-taker-ai.herokuapp.com/" target="_blank">https://note-taker-ai.herokuapp.com/</a>

## Technologies Used

- MySQL
- Node.js
- Express
- Handlebars
- Custom ORM

## Installation

Download all files and open server.js to initiate the server.
The application is invoked with the following command:

```sh
node server.js
```

Make sure to install the dependencies included in the <b>package.json</b> file.
Installation of these dependencies can be completed with the following command:

```sh
npm i
```

<b>CONFIG FOLDER</b>

- Contains <b> connection.js </b> which hosts all the information to connect to the server.
- Has <b>orm.js</b> which is the custom ORM.

<b>CONTROLLERS</b>

- The <b>burgers_controller.js</b> has the router with the get/put/post info.

<b>DB</b>

- Contains <b>schema.sql</b> which has all of specifications to create the burgers database.
- <b>Seeds.sql</b> has sample entries that can be added to the database for testing.

<b>MODELS</b>

- Burger object with all/create/update functions.

<b>Public/Assets</b>

- <b>CSS</b> folder has custom styles.
- <b> JS</b> folder has event handles for front-end

<b>VIEWS</b>

- Folder that hosts the Handlebars required structure.
- <b>Layouts</b> folder within has the main HTML skeleton.
- <b>Partials/Burgers</b> folder has the partial HTML skeleton for the burger data that is returned from the database.
- <b>Index.handlebars</b> contains the HTML skeleton of the page that will go in the {{body}} section of the main.handlebars file.

<b>PACKAGE.JSON</b>

- Has all the dependencies required to run the app.

<b>SERVER.JS</b>

- Establishes connection to the server and runs the application.

## Questions

If you have any questions, feel free to reach out!

 <img src="https://avatars0.githubusercontent.com/u/60761756?v=4" width="100">
  
 GitHub: airazabal92

## License

Licensed under the [MIT](https://github.com/microsoft/vscode/blob/master/LICENSE.txt) license.
