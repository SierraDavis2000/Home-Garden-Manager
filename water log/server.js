//require packages and set up variables
const express = require('express'); 

const app = express();

const PORT = process.env.PORT || 3001;

//TODO: change this section as an environment variable to link to the database
//app.use(express.static('public'));
//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

const routes = require("./routes/apiroutes");
app.use(routes);
const htmlRoutes = require("./routes/htmlroutes");
app.use(htmlRoutes);

//todo complete this section

//port listener
app.listen(PORT, () => console.log("Server listening on port " + PORT));