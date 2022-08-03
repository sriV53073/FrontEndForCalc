Overview

This is Full stack web app, that uses React js in the front-end and Nodes Js/ Express/socket.io in the back end. The back-end creates a socket. Using socket .io. The Front end also uses socket .io

Features

Created A Front End Using React Js. The Home Page Ask for you to login with a name. Which is stores in Local Storage. So you can use it in a different Component even after the state resets. Once You Loging You go to the Calculator Page Which uses the name you logged in with to connect to the socket in the back-end. Once you you connect to the socket. The calculator Front-end emits a join with the socket. Once you emit a join, the socket listens for it and once it gets it, it creates a one on one connection with the front end socket, with the name being the identifier. The Front end then emits a function when the user types in a function. The socket gets this and emits back an answer. Which the front end is listening for. Once the front end gets the answer it then displays it in html. You can also click logs button. Which download all the thransaction that the user has done with the back-end. It does this by sending a get request to the back-end in the "logs" route. Once you are done you can click exit. It takes you back to the home page. Where you can type in a new name.


Site Acess you can acess the site at https://sri-calculator.herokuapp.com/ It might take some time to load because heroku, puts the app to sleep.

Cloning You can clone the repo if you want to use it and change the code based on what you need. You would also need to create your own server or find you own way to implement that.

GitHub Link for Back-end https://github.com/sriV53073/ProjectNetworks

License

100% free to use and open source. 🙈 🙉 🙊
